document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('annotationCanvas');
    const ctx = canvas.getContext('2d');
    const uploadBtn = document.getElementById('uploadBtn');
    const imageLoader = document.getElementById('imageLoader');
    const labelDialog = document.getElementById('labelDialog');
    const labelInput = document.getElementById('labelInput');
    const labelList = document.getElementById('labelList');
    const colorPickerContainer = document.getElementById('colorPickerContainer');
    const colorPicker = document.getElementById('colorPicker');
    const saveLabelBtn = document.getElementById('saveLabelBtn');
    const cancelLabelBtn = document.getElementById('cancelLabelBtn');
    const projectLabelsDiv = document.getElementById('projectLabels');
    const undoBtn = document.getElementById('undoBtn');
    const redoBtn = document.getElementById('redoBtn');
    const resetBtn = document.getElementById('resetBtn');
    const autoAnnotateBtn = document.getElementById('autoAnnotateBtn');
    const autoAnnotateAllBtn = document.getElementById('autoAnnotateAllBtn');
    const labelsPreview = document.getElementById('labelsPreview');
    const saveBtn = document.getElementById('saveBtn');
    const thumbnailBar = document.getElementById('thumbnailBar');
    const cameraBtn = document.getElementById('cameraBtn');
    const captureBtn = document.getElementById('captureBtn');
    const cameraFeed = document.getElementById('cameraFeed');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const deleteBtn = document.getElementById('deleteBtn');

    let projectData = [];
    let activeImageIndex = -1;
    let currentModel = {
        session: null,
        classNames: {},
        numClasses: 0
    };
    let history = [];
    let historyIndex = -1;
    let labels = {};
    let selectedAnnotation = null;
    let isDrawing = false;
    let isMoving = false;
    let isResizing = false;
    let resizeHandle = null;
    let startX, startY, endX, endY;
    const handleSize = 8;
    let editingLabelName = null;
    let stream = null;
    let deleteMode = false;
    let selectedThumbnails = new Set();
    let scale = 1.0;
    let panX = 0;
    let panY = 0;
    let isPanning = false;
    let lastPanX, lastPanY;

    function generateRandomColor() {
        let color;
        do {
            color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        } while (Object.values(labels).some(l => l.color === color));
        return color;
    }

    function saveState() {
        if (activeImageIndex === -1) return;
        history.splice(historyIndex + 1);
        const state = {
            projectData: JSON.parse(JSON.stringify(projectData)),
            activeImageIndex: activeImageIndex,
            labels: JSON.parse(JSON.stringify(labels))
        };
        history.push(state);
        historyIndex++;
        updateUndoRedoButtons();
        updateLabelsPreview();
    }

    function undo() {
        if (historyIndex > 0) {
            historyIndex--;
            const prevState = history[historyIndex];
            projectData = JSON.parse(JSON.stringify(prevState.projectData));
            labels = JSON.parse(JSON.stringify(prevState.labels));
            setActiveImage(prevState.activeImageIndex);
        }
    }

    function redo() {
        if (historyIndex < history.length - 1) {
            historyIndex++;
            const nextState = history[historyIndex];
            projectData = JSON.parse(JSON.stringify(nextState.projectData));
            labels = JSON.parse(JSON.stringify(nextState.labels));
            setActiveImage(nextState.activeImageIndex);
        }
    }

    function loadState(state) {
        projectData = JSON.parse(JSON.stringify(state.projectData));
        labels = JSON.parse(JSON.stringify(state.labels));
        setActiveImage(state.activeImageIndex);
        updateUndoRedoButtons();
        updateLabelsPreview();
        updateProjectLabels();
    }

    function updateUndoRedoButtons() {
        undoBtn.disabled = historyIndex <= 0;
        redoBtn.disabled = historyIndex >= history.length - 1;
    }

    function updateLabelsPreview() {
        if (activeImageIndex === -1) {
            labelsPreview.textContent = '';
            return;
        }
        let previewText = '';
        const classNames = currentModel.classNames;
        if (!classNames || Object.keys(classNames).length === 0) {
            labelsPreview.textContent = 'No model classes loaded.';
            return;
        }
        
        const classNameToId = {};
        for (let i = 0; i < classNames.length; i++) {
            classNameToId[classNames[i]] = i;
        }

        const activeImage = projectData[activeImageIndex];
        activeImage.annotations.forEach(ann => {
            const classId = classNameToId[ann.label];
            if (classId === undefined) return;

            const x_center = (ann.x + ann.width / 2) / activeImage.width;
            const y_center = (ann.y + ann.height / 2) / activeImage.height;
            const width = ann.width / activeImage.width;
            const height = ann.height / activeImage.height;

            previewText += `${classId} ${x_center.toFixed(6)} ${y_center.toFixed(6)} ${width.toFixed(6)} ${height.toFixed(6)}\n`;
        });
        labelsPreview.textContent = previewText;
    }

    function updateProjectLabels() {
        projectLabelsDiv.innerHTML = '';
        for (const labelName in labels) {
            const chip = document.createElement('div');
            chip.className = 'label-chip';
            chip.setAttribute('data-label', labelName);
            
            const colorBox = document.createElement('div');
            colorBox.className = 'label-color-box';
            colorBox.style.backgroundColor = labels[labelName].color;
            
            const name = document.createElement('span');
            name.textContent = labelName;
            
            chip.appendChild(colorBox);
            chip.appendChild(name);
            
            chip.addEventListener('dblclick', () => {
                editingLabelName = labelName;
                showLabelDialog();
            });

            projectLabelsDiv.appendChild(chip);
        }
    }

    function redrawCanvas() {
        if (activeImageIndex === -1) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }
        const activeImage = projectData[activeImageIndex];
        const container = canvas.parentElement;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(panX, panY);
        ctx.scale(scale, scale);
        ctx.drawImage(activeImage.image, 0, 0, activeImage.width, activeImage.height);

        ctx.lineWidth = 2 / scale;
        ctx.font = '32px sans-serif';
        ctx.textBaseline = 'bottom';

        activeImage.annotations.forEach(ann => {
            const labelInfo = labels[ann.label];
            ctx.strokeStyle = labelInfo ? labelInfo.color : 'red';

            if (ann === selectedAnnotation) {
                ctx.globalAlpha = 0.7;
            } else {
                ctx.globalAlpha = 1.0;
            }
            
            ctx.strokeRect(ann.x, ann.y, ann.width, ann.height);
            ctx.globalAlpha = 1.0;

            if (labelInfo) {
                const text = ann.label;
                const textMetrics = ctx.measureText(text);
                const textWidth = textMetrics.width;
                const textHeight = 32;
                
                ctx.fillStyle = labelInfo.color;
                ctx.fillRect(ann.x, ann.y - textHeight - 4, textWidth + 8, textHeight + 4);
                
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 2;
                ctx.strokeRect(ann.x, ann.y - textHeight - 4, textWidth + 8, textHeight + 4);

                ctx.fillStyle = '#ffffff';
                ctx.fillText(text, ann.x + 4, ann.y - 2);
            }

            if (ann === selectedAnnotation) {
                const handleSizeScaled = handleSize / scale;
                ctx.fillStyle = '#0000ff';
                ctx.fillRect(ann.x - handleSizeScaled / 2, ann.y - handleSizeScaled / 2, handleSizeScaled, handleSizeScaled);
                ctx.fillRect(ann.x + ann.width - handleSizeScaled / 2, ann.y - handleSizeScaled / 2, handleSizeScaled, handleSizeScaled);
                ctx.fillRect(ann.x - handleSizeScaled / 2, ann.y + ann.height - handleSizeScaled / 2, handleSizeScaled, handleSizeScaled);
                ctx.fillRect(ann.x + ann.width - handleSizeScaled / 2, ann.y + ann.height - handleSizeScaled / 2, handleSizeScaled, handleSizeScaled);
            }
        });
        ctx.restore();
    }

    uploadBtn.addEventListener('click', () => {
        imageLoader.click();
    });

    imageLoader.addEventListener('change', (e) => {
        const files = e.target.files;
        if (!files.length) return;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    const newImage = {
                        id: Date.now() + i,
                        image: img,
                        width: img.width,
                        height: img.height,
                        annotations: [],
                        metadata: {},
                        fileName: file.name.split('.')[0],
                        viewState: { scale: 1.0, panX: 0, panY: 0 }
                    };
                    projectData.push(newImage);
                    if (activeImageIndex === -1) {
                        setActiveImage(0);
                    }
                    updateThumbnailBar();
                    saveState();
                };
                img.src = event.target.result;

                EXIF.getData(file, function() {
                    const allMetaData = EXIF.getAllTags(this);
                    const newImage = projectData[projectData.length - 1];
                    if (newImage) {
                        newImage.metadata = allMetaData;
                    }
                });
            };
            reader.readAsDataURL(file);
        }
        imageLoader.value = '';
    });

    function updateThumbnailBar() {
        thumbnailBar.innerHTML = '';
        projectData.forEach((imgData, index) => {
            const thumbItem = document.createElement('div');
            thumbItem.className = 'thumbnail-item';

            const thumb = new Image();
            thumb.src = imgData.image.src;
            thumb.className = index === activeImageIndex ? 'selected' : '';
            thumb.addEventListener('click', () => {
                if (deleteMode) {
                    toggleThumbnailSelection(index);
                } else {
                    setActiveImage(index);
                }
            });

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'delete-checkbox';
            checkbox.style.display = deleteMode ? 'block' : 'none';
            checkbox.checked = selectedThumbnails.has(index);
            checkbox.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleThumbnailSelection(index);
            });

            thumbItem.appendChild(thumb);
            thumbItem.appendChild(checkbox);
            thumbnailBar.appendChild(thumbItem);
        });
    }

    function setActiveImage(index) {
        if (activeImageIndex !== -1) {
            projectData[activeImageIndex].viewState = { scale, panX, panY };
        }

        if (index < 0 || index >= projectData.length) return;
        activeImageIndex = index;
        selectedAnnotation = null;
        
        const activeImage = projectData[activeImageIndex];
        if (activeImage.viewState) {
            scale = activeImage.viewState.scale;
            panX = activeImage.viewState.panX;
            panY = activeImage.viewState.panY;
        } else {
            const container = canvas.parentElement;
            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight;
            const imgAspectRatio = activeImage.width / activeImage.height;
            const containerAspectRatio = containerWidth / containerHeight;

            if (imgAspectRatio > containerAspectRatio) {
                scale = containerWidth / activeImage.width;
            } else {
                scale = containerHeight / activeImage.height;
            }
            panX = (containerWidth - activeImage.width * scale) / 2;
            panY = (containerHeight - activeImage.height * scale) / 2;
            activeImage.viewState = { scale, panX, panY };
        }

        updateThumbnailBar();
        redrawCanvas();
        updateLabelsPreview();
    }

    function toggleThumbnailSelection(index) {
        if (selectedThumbnails.has(index)) {
            selectedThumbnails.delete(index);
        } else {
            selectedThumbnails.add(index);
        }
        updateThumbnailBar();
    }

    cameraBtn.addEventListener('click', async () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            cameraFeed.style.display = 'none';
            captureBtn.style.display = 'none';
            canvas.style.display = 'block';
            stream = null;
            return;
        }
        try {
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
            cameraFeed.srcObject = stream;
            cameraFeed.style.display = 'block';
            captureBtn.style.display = 'block';
            canvas.style.display = 'none';
            cameraFeed.play();
        } catch (err) {
            console.error("Error accessing camera: ", err);
        }
    });

    captureBtn.addEventListener('click', () => {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = cameraFeed.videoWidth;
        tempCanvas.height = cameraFeed.videoHeight;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.drawImage(cameraFeed, 0, 0);

        const img = new Image();
        img.onload = () => {
            const newImage = {
                id: Date.now(),
                image: img,
                width: img.width,
                height: img.height,
                annotations: [],
                metadata: {
                    captureDevice: 'webcam',
                    captureTime: new Date().toISOString()
                },
                fileName: `capture_${Date.now()}`,
                viewState: { scale: 1.0, panX: 0, panY: 0 }
            };
            projectData.push(newImage);
            if (activeImageIndex === -1) {
                setActiveImage(0);
            } else {
                setActiveImage(projectData.length - 1);
            }
            updateThumbnailBar();
            saveState();
        };
        img.src = tempCanvas.toDataURL('image/jpeg');

        stream.getTracks().forEach(track => track.stop());
        cameraFeed.style.display = 'none';
        captureBtn.style.display = 'none';
        canvas.style.display = 'block';
        stream = null;
    });

    function getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        const x = (evt.clientX - rect.left - panX) / scale;
        const y = (evt.clientY - rect.top - panY) / scale;
        return { x, y };
    }

    function getHandleAt(pos, ann) {
        if (!ann) return null;
        if (pos.x >= ann.x - handleSize && pos.x <= ann.x + handleSize && pos.y >= ann.y - handleSize && pos.y <= ann.y + handleSize) return 'tl';
        if (pos.x >= ann.x + ann.width - handleSize && pos.x <= ann.x + ann.width + handleSize && pos.y >= ann.y - handleSize && pos.y <= ann.y + handleSize) return 'tr';
        if (pos.x >= ann.x - handleSize && pos.x <= ann.x + handleSize && pos.y >= ann.y + ann.height - handleSize && pos.y <= ann.y + ann.height + handleSize) return 'bl';
        if (pos.x >= ann.x + ann.width - handleSize && pos.x <= ann.x + ann.width + handleSize && pos.y >= ann.y + ann.height - handleSize && pos.y <= ann.y + ann.height + handleSize) return 'br';
        return null;
    }

    canvas.addEventListener('mousedown', (e) => {
        if (e.altKey || e.button === 1) {
            isPanning = true;
            lastPanX = e.clientX;
            lastPanY = e.clientY;
            canvas.style.cursor = 'grabbing';
            return;
        }

        if (activeImageIndex === -1) return;
        const pos = getMousePos(canvas, e);
        
        if (pos.x < 0 || pos.y < 0 || pos.x > projectData[activeImageIndex].width || pos.y > projectData[activeImageIndex].height) {
            return;
        }

        startX = pos.x;
        startY = pos.y;

        resizeHandle = getHandleAt(pos, selectedAnnotation);
        if (resizeHandle) {
            isResizing = true;
            return;
        }

        if (selectedAnnotation && pos.x >= selectedAnnotation.x && pos.x <= selectedAnnotation.x + selectedAnnotation.width && pos.y >= selectedAnnotation.y && pos.y <= selectedAnnotation.y + selectedAnnotation.height) {
            isMoving = true;
            return;
        }

        let clickedOnAnnotation = false;
        const activeImage = projectData[activeImageIndex];
        for (let i = activeImage.annotations.length - 1; i >= 0; i--) {
            const ann = activeImage.annotations[i];
            if (pos.x >= ann.x && pos.x <= ann.x + ann.width && pos.y >= ann.y && pos.y <= ann.y + ann.height) {
                selectedAnnotation = ann;
                clickedOnAnnotation = true;
                break;
            }
        }

        if (clickedOnAnnotation) {
            redrawCanvas();
            return;
        }

        selectedAnnotation = null;
        isDrawing = true;
        redrawCanvas();
    });

    canvas.addEventListener('mousemove', (e) => {
        if (isPanning) {
            const dx = e.clientX - lastPanX;
            const dy = e.clientY - lastPanY;
            panX += dx;
            panY += dy;
            lastPanX = e.clientX;
            lastPanY = e.clientY;
            redrawCanvas();
            return;
        }

        if (activeImageIndex === -1) return;
        const pos = getMousePos(canvas, e);
        
        const handle = getHandleAt(pos, selectedAnnotation);
        if (handle) {
            canvas.style.cursor = 'crosshair';
        } else if (selectedAnnotation && pos.x >= selectedAnnotation.x && pos.x <= selectedAnnotation.x + selectedAnnotation.width && pos.y >= selectedAnnotation.y && pos.y <= selectedAnnotation.y + selectedAnnotation.height) {
            canvas.style.cursor = 'move';
        } else {
            canvas.style.cursor = 'default';
        }

        if (isDrawing) {
            endX = pos.x;
            endY = pos.y;
            redrawCanvas();
            ctx.save();
            ctx.translate(panX, panY);
            ctx.scale(scale, scale);
            ctx.strokeRect(startX, startY, endX - startX, endY - startY);
            ctx.restore();
        } else if (isMoving && selectedAnnotation) {
            const dx = pos.x - startX;
            const dy = pos.y - startY;
            selectedAnnotation.x += dx;
            selectedAnnotation.y += dy;
            startX = pos.x;
            startY = pos.y;
            redrawCanvas();
        } else if (isResizing && selectedAnnotation) {
            switch (resizeHandle) {
                case 'tl':
                    selectedAnnotation.width += selectedAnnotation.x - pos.x;
                    selectedAnnotation.height += selectedAnnotation.y - pos.y;
                    selectedAnnotation.x = pos.x;
                    selectedAnnotation.y = pos.y;
                    break;
                case 'tr':
                    selectedAnnotation.width = pos.x - selectedAnnotation.x;
                    selectedAnnotation.height += selectedAnnotation.y - pos.y;
                    selectedAnnotation.y = pos.y;
                    break;
                case 'bl':
                    selectedAnnotation.width += selectedAnnotation.x - pos.x;
                    selectedAnnotation.x = pos.x;
                    selectedAnnotation.height = pos.y - selectedAnnotation.y;
                    break;
                case 'br':
                    selectedAnnotation.width = pos.x - selectedAnnotation.x;
                    selectedAnnotation.height = pos.y - selectedAnnotation.y;
                    break;
            }
            redrawCanvas();
        }
    });

    canvas.addEventListener('mouseup', (e) => {
        if (isPanning) {
            isPanning = false;
            canvas.style.cursor = 'default';
            return;
        }

        if (isDrawing) {
            isDrawing = false;
            const pos = getMousePos(canvas, e);
            endX = pos.x;
            endY = pos.y;

            const activeImage = projectData[activeImageIndex];
            const x1 = Math.max(0, Math.min(startX, endX));
            const y1 = Math.max(0, Math.min(startY, endY));
            const x2 = Math.min(activeImage.width, Math.max(startX, endX));
            const y2 = Math.min(activeImage.height, Math.max(startY, endY));

            const width = x2 - x1;
            const height = y2 - y1;

            if (width > 5 && height > 5) {
                projectData[activeImageIndex].annotations.push({ x: x1, y: y1, width: width, height: height, label: 'unlabeled' });
                saveState();
            }
            redrawCanvas();
        }
        
        if ((isResizing || isMoving) && selectedAnnotation) {
            if (selectedAnnotation.width < 0) {
                selectedAnnotation.x += selectedAnnotation.width;
                selectedAnnotation.width = Math.abs(selectedAnnotation.width);
            }
            if (selectedAnnotation.height < 0) {
                selectedAnnotation.y += selectedAnnotation.height;
                selectedAnnotation.height = Math.abs(selectedAnnotation.height);
            }
            saveState();
        }

        isMoving = false;
        isResizing = false;
        resizeHandle = null;
    });

    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const scaleAmount = 0.1;
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const oldScale = scale;
        if (e.deltaY < 0) {
            scale += scaleAmount;
        } else {
            scale -= scaleAmount;
        }
        scale = Math.max(0.1, Math.min(scale, 10));

        const mouseToPanX = mouseX - panX;
        const mouseToPanY = mouseY - panY;

        panX = mouseX - mouseToPanX * (scale / oldScale);
        panY = mouseY - mouseToPanY * (scale / oldScale);

        redrawCanvas();
    });

    function showLabelDialog() {
        const targetLabel = editingLabelName || (selectedAnnotation ? selectedAnnotation.label : null);
        if (!targetLabel) return;

        if (selectedAnnotation && !editingLabelName) {
            const canvasRect = canvas.getBoundingClientRect();
            const scaleX = canvasRect.width / canvas.width;
            const scaleY = canvasRect.height / canvas.height;
            const dialogX = canvasRect.left + (selectedAnnotation.x + selectedAnnotation.width) * scaleX + 10;
            const dialogY = canvasRect.top + selectedAnnotation.y * scaleY;
            labelDialog.style.left = `${dialogX}px`;
            labelDialog.style.top = `${dialogY}px`;
            labelDialog.style.transform = 'none';
        } else {
            labelDialog.style.left = '50%';
            labelDialog.style.top = '50%';
            labelDialog.style.transform = 'translate(-50%, -50%)';
        }

        labelDialog.style.display = 'block';
        labelInput.value = targetLabel === 'unlabeled' ? '' : targetLabel;
        
        colorPickerContainer.style.display = 'block';
        if (labels[targetLabel]) {
            colorPicker.value = labels[targetLabel].color;
        } else {
            colorPicker.value = '#ff0000';
        }

        updateLabelList();
        labelInput.focus();
    }

    function hideLabelDialog() {
        labelDialog.style.display = 'none';
        colorPickerContainer.style.display = 'none';
        editingLabelName = null;
    }

    function updateLabelList() {
        labelList.innerHTML = '';
        const allLabels = Object.keys(labels);

        allLabels.forEach(label => {
            const li = document.createElement('li');
            li.textContent = label;
            li.addEventListener('click', () => {
                labelInput.value = label;
                colorPicker.value = labels[label].color;
            });
            labelList.appendChild(li);
        });
    }

    labelInput.addEventListener('input', updateLabelList);
    cancelLabelBtn.addEventListener('click', hideLabelDialog);

    saveLabelBtn.addEventListener('click', () => {
        const newLabelName = labelInput.value.trim();
        if (!newLabelName) {
            hideLabelDialog();
            return;
        }

        if (editingLabelName) {
            if (editingLabelName !== newLabelName) {
                labels[newLabelName] = { color: colorPicker.value };
                delete labels[editingLabelName];
                projectData.forEach(imgData => {
                    imgData.annotations.forEach(ann => {
                        if (ann.label === editingLabelName) {
                            ann.label = newLabelName;
                        }
                    });
                });
            } else {
                labels[newLabelName].color = colorPicker.value;
            }
        } else if (selectedAnnotation) {
            if (!labels[newLabelName]) {
                labels[newLabelName] = { color: colorPicker.value };
            }
            selectedAnnotation.label = newLabelName;
        }

        updateProjectLabels();
        hideLabelDialog();
        redrawCanvas();
        saveState();
    });

    canvas.addEventListener('dblclick', (e) => {
        if (selectedAnnotation) {
            showLabelDialog();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Delete' || e.key === 'Backspace') {
            if (selectedAnnotation && activeImageIndex !== -1) {
                const activeImage = projectData[activeImageIndex];
                const index = activeImage.annotations.indexOf(selectedAnnotation);
                if (index > -1) {
                    activeImage.annotations.splice(index, 1);
                    selectedAnnotation = null;
                    redrawCanvas();
                    saveState();
                }
            }
        }
    });

    // Touch event handlers
    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousedown', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        }
    });

    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        }
    });

    canvas.addEventListener('touchend', (e) => {
        e.preventDefault();
        const mouseEvent = new MouseEvent('mouseup', {});
        canvas.dispatchEvent(mouseEvent);
    });

    async function loadCustomModel() {
        const modelInfo = {
            onnxPath: './model/yolo11s.onnx',
            jsonPath: './model/yolo11s.json'
        };

        try {
            autoAnnotateBtn.textContent = 'Loading Model...';
            autoAnnotateBtn.disabled = true;

            const session = await ort.InferenceSession.create(modelInfo.onnxPath);
            const response = await fetch(modelInfo.jsonPath);
            const classIdToName = await response.json();
            const classNames = Object.values(classIdToName);

            currentModel = {
                session: session,
                classNames: classNames,
                numClasses: classNames.length
            };

            classNames.forEach(name => {
                if (!labels[name]) {
                    labels[name] = { color: generateRandomColor() };
                }
            });

            updateProjectLabels();
            autoAnnotateBtn.textContent = 'Auto-annotate';
            autoAnnotateBtn.disabled = false;
            console.log("Custom model loaded successfully.");

        } catch (error) {
            console.error("Failed to load custom model:", error);
            autoAnnotateBtn.textContent = 'Model Load Failed';
        }
    }

    function iou(box1, box2) {
        const x1 = Math.max(box1.x, box2.x);
        const y1 = Math.max(box1.y, box2.y);
        const x2 = Math.min(box1.x + box1.width, box2.x + box2.width);
        const y2 = Math.min(box1.y + box1.height, box2.y + box2.height);
        const intersection = Math.max(0, x2 - x1) * Math.max(0, y2 - y1);
        const area1 = box1.width * box1.height;
        const area2 = box2.width * box2.height;
        return intersection / (area1 + area2 - intersection);
    }

    function nonMaxSuppression(boxes, iouThreshold) {
        boxes.sort((a, b) => b.score - a.score);
        const result = [];
        while (boxes.length > 0) {
            result.push(boxes[0]);
            boxes = boxes.filter(box => iou(boxes[0], box) < iouThreshold);
        }
        return result;
    }

    async function runInference() {
        if (activeImageIndex === -1 || !currentModel.session) {
            alert("Please upload an image and wait for the model to load.");
            return;
        }
        
        const activeImage = projectData[activeImageIndex];
        activeImage.annotations = [];

        const modelInputSize = 640;
        const originalWidth = activeImage.width;
        const originalHeight = activeImage.height;

        const ratio = Math.min(modelInputSize / originalWidth, modelInputSize / originalHeight);
        const newWidth = Math.round(originalWidth * ratio);
        const newHeight = Math.round(originalHeight * ratio);
        const xOffset = (modelInputSize - newWidth) / 2;
        const yOffset = (modelInputSize - newHeight) / 2;

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = modelInputSize;
        tempCanvas.height = modelInputSize;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.fillStyle = '#808080';
        tempCtx.fillRect(0, 0, modelInputSize, modelInputSize);
        tempCtx.drawImage(activeImage.image, xOffset, yOffset, newWidth, newHeight);
        const imageData = tempCtx.getImageData(0, 0, modelInputSize, modelInputSize);
        const { data } = imageData;
        
        const red = [], green = [], blue = [];
        for (let i = 0; i < data.length; i += 4) {
            red.push(data[i] / 255.0);
            green.push(data[i + 1] / 255.0);
            blue.push(data[i + 2] / 255.0);
        }
        const transposedData = red.concat(green, blue);
        const inputTensor = new ort.Tensor('float32', transposedData, [1, 3, modelInputSize, modelInputSize]);

        try {
            const feeds = { 'images': inputTensor };
            const results = await currentModel.session.run(feeds);
            const outputTensor = results[Object.keys(results)[0]];
            
            processModelOutput(outputTensor, originalWidth, originalHeight, ratio, xOffset, yOffset);
            
        } catch (error) {
            console.error("Error during model inference:", error);
        }
    }

    function processModelOutput(output, originalWidth, originalHeight, ratio, xOffset, yOffset) {
        const outputData = output.data;
        const numClasses = currentModel.numClasses;
        const numBoxes = 8400;
        let boxes = [];

        const transposed = [];
        for (let i = 0; i < numBoxes; i++) {
            for (let j = 0; j < 4 + numClasses; j++) {
                transposed[i * (4 + numClasses) + j] = outputData[j * numBoxes + i];
            }
        }

        for (let i = 0; i < numBoxes; i++) {
            const offset = i * (4 + numClasses);
            const x_center = transposed[offset];
            const y_center = transposed[offset + 1];
            const w = transposed[offset + 2];
            const h = transposed[offset + 3];
            
            const classProbs = transposed.slice(offset + 4, offset + 4 + numClasses);
            const maxProb = Math.max(...classProbs);
            if (maxProb < 0.5) continue;

            const classId = classProbs.indexOf(maxProb);
            const label = currentModel.classNames[classId] || "unknown";

            const x1 = (x_center - w / 2 - xOffset) / ratio;
            const y1 = (y_center - h / 2 - yOffset) / ratio;
            const width = w / ratio;
            const height = h / ratio;

            boxes.push({ x: x1, y: y1, width: width, height: height, label: label, score: maxProb });
        }
        
        const finalBoxes = nonMaxSuppression(boxes, 0.5);

        projectData[activeImageIndex].annotations.push(...finalBoxes);
        redrawCanvas();
        saveState();
    }

    undoBtn.addEventListener('click', undo);
    redoBtn.addEventListener('click', redo);
    resetBtn.addEventListener('click', () => {
        if (history.length > 0) {
            loadState(history[0]);
        }
    });
    autoAnnotateBtn.addEventListener('click', runInference);
    autoAnnotateAllBtn.addEventListener('click', async () => {
        for (let i = 0; i < projectData.length; i++) {
            setActiveImage(i);
            await runInference();
        }
        alert('Auto-annotation for all images is complete.');
    });

    prevBtn.addEventListener('click', () => {
        if (activeImageIndex > 0) {
            setActiveImage(activeImageIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (activeImageIndex < projectData.length - 1) {
            setActiveImage(activeImageIndex + 1);
        }
    });

    deleteBtn.addEventListener('click', () => {
        deleteMode = !deleteMode;
        if (!deleteMode) {
            const indicesToDelete = Array.from(selectedThumbnails).sort((a, b) => b - a);
            if (indicesToDelete.length > 0) {
                if (confirm(`Are you sure you want to delete ${indicesToDelete.length} image(s)?`)) {
                    indicesToDelete.forEach(index => {
                        projectData.splice(index, 1);
                    });
                    selectedThumbnails.clear();
                    if (activeImageIndex >= projectData.length) {
                        setActiveImage(projectData.length - 1);
                    } else {
                        setActiveImage(activeImageIndex);
                    }
                    saveState();
                }
            }
            deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i> Delete';
        } else {
            deleteBtn.textContent = 'Confirm Delete';
        }
        updateThumbnailBar();
    });

    saveBtn.addEventListener('click', async () => {
        if (projectData.length === 0) {
            alert("Please load an image first.");
            return;
        }

        const zip = new JSZip();
        const imagesFolder = zip.folder('images');
        const labelsFolder = zip.folder('labels');
        const deviceInfoFolder = zip.folder('deviceInfo');
        const numImages = projectData.length;
        const numDigits = Math.max(5, Math.ceil(Math.log10(numImages + 1)));

        for (let i = 0; i < numImages; i++) {
            const imgData = projectData[i];
            const baseFileName = `f${(i + 1).toString().padStart(numDigits, '0')}`;

            // 1. Add image file
            const imageBlob = await fetch(imgData.image.src).then(res => res.blob());
            imagesFolder.file(`${baseFileName}.jpg`, imageBlob);

            // 2. Add label file
            const labelText = generateLabelText(imgData);
            labelsFolder.file(`${baseFileName}.txt`, labelText);

            // 3. Add device info file
            const deviceInfoText = generateDeviceInfo(imgData);
            deviceInfoFolder.file(`${baseFileName}.md`, deviceInfoText);
        }

        zip.generateAsync({ type: 'blob' }).then(content => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(content);
            a.download = 'annotated_data.zip';
            a.click();
            URL.revokeObjectURL(a.href);
        });
    });

    function generateLabelText(imgData) {
        let labelText = '';
        const classNames = currentModel.classNames;
        if (!classNames || Object.keys(classNames).length === 0) {
            return '';
        }
        const classNameToId = {};
        for (let i = 0; i < classNames.length; i++) {
            classNameToId[classNames[i]] = i;
        }
        imgData.annotations.forEach(ann => {
            const classId = classNameToId[ann.label];
            if (classId === undefined) return;
            const x_center = (ann.x + ann.width / 2) / imgData.width;
            const y_center = (ann.y + ann.height / 2) / imgData.height;
            const width = ann.width / imgData.width;
            const height = ann.height / imgData.height;
            labelText += `${classId} ${x_center.toFixed(6)} ${y_center.toFixed(6)} ${width.toFixed(6)} ${height.toFixed(6)}\n`;
        });
        return labelText;
    }

    function generateDeviceInfo(imgData) {
        let info = `# Device Information for ${imgData.fileName}\n\n`;
        for (const key in imgData.metadata) {
            if (Object.hasOwnProperty.call(imgData.metadata, key)) {
                const element = imgData.metadata[key];
                info += `**${key}:** ${element}\n`;
            }
        }
        return info;
    }

    function initialize() {
        updateUndoRedoButtons();
        loadCustomModel();
    }

    initialize();
});
