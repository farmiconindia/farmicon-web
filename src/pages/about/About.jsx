import React from "react";
import "./about.scss";
import about1 from "../../assets/about-1.png";
import about2 from "../../assets/about-2.png";
import about3 from "../../assets/about-3.png";

const About = ({changeLang}) => {
  return (
    <div className="about">
      <section className="sec-1">
        <div className="left">
          <div className="content">
            {!changeLang?<div className="intro">
              <span>About Us</span>
              <p>
                Welcome to Farmicon, where we're transforming the agriculture
                industry through innovative technology solutions. Our startup
                was founded in 2021 with a mission to empower farmers with
                advanced farming tools that increase efficiency, productivity,
                and profitability.
              </p>
              <p>
                At Farmicon, we understand the challenges farmers face in the
                modern world. That's why we've developed a suite of smart
                farming solutions that leverage cutting-edge technology to help
                farmers achieve their goals. Our solutions include precision
                agriculture tools, crop monitoring systems, soil analysis
                technologies, and drone-based surveying systems, all of which
                are powered by artificial intelligence, machine learning, and
                the Internet of Things (IoT).
              </p>
              <p>
                Our precision agriculture tools offer farmers real-time insights
                into their crops, soil conditions, and weather patterns. With
                these tools, farmers can make data-driven decisions that
                optimize yields, reduce costs, and improve sustainability. Our
                crop monitoring systems use drones imagery to provide farmers
                with accurate and up-to-date information on the health and
                growth of their crops.
              </p>
              <p>
                We also offer soil analysis technologies that help farmers
                determine the right nutrients and fertilizers needed for their
                crops. Our drone-based surveying systems can quickly and
                efficiently survey large areas of farmland, providing farmers
                with valuable data on soil health, water management, and crop
                growth.
              </p>
              <p>
                At Farmicon, we're committed to making agriculture more
                efficient, productive, and sustainable. Our solutions are
                designed to help farmers make the most of their resources while
                reducing waste and environmental impact. We believe that by
                empowering farmers with the right technology tools, we can help
                transform the agriculture industry and improve food security for
                all.
              </p>
            </div>:<div className="intro">
              <span>हमारे बारे में</span>
              <p>
                Farmicon में आपका स्वागत है, जहां हम नवाचारी तकनीकी समाधानों के
                माध्यम से कृषि उद्योग को बदल रहे हैं। हमारी स्टार्टअप 2021 में
                स्थापित की गई थी जिसका मिशन किसानों को उन्नत खेती उपकरणों से
                सशक्त बनाना था जो दक्षता, उत्पादकता और लाभदायकता में वृद्धि करते
                हैं।
              </p>
              <p>
                Farmicon में, हम मॉडर्न दुनिया में किसानों के सामने आने वाली
                चुनौतियों को समझते हैं। इसीलिए हमने कटिंग एज तकनीक का उपयोग करके
                किसानों को अपने लक्ष्यों को प्राप्त करने में मदद करने के लिए एक
                स्मार्ट खेती समाधान का एक सुइट विकसित किया है। हमारे समाधान
                शामिल हैं प्रेसिजन एग्रीकल्चर टूल्स, फसल मॉनिटरिंग सिस्टम, मृदा
                विश्लेषण प्रौद्योगिकियों और ड्रोन आधारित सर्वेक्षण प्रणालियां,
                जिनमें से सभी का उपयोग कृत्रिम बुद्धिमत्ता, मशीन सीखने और इंटरनेट
                ऑफ थिंग्स (आईओटी) द्वारा किया जाता है।
              </p>
              <p>
                हमारे सटीक कृषि उपकरण किसानों को वास्तविक समय की अंतर्दृष्टि प्रदान करते हैं
                उनकी फसलों, मिट्टी की स्थिति और मौसम के पैटर्न में। साथ
                ये उपकरण, किसान डेटा-संचालित निर्णय ले सकते हैं
                पैदावार का अनुकूलन करें, लागत कम करें और स्थिरता में सुधार करें। हमारा
                फसल निगरानी प्रणाली किसानों को प्रदान करने के लिए ड्रोन इमेजरी का उपयोग करती है
                स्वास्थ्य के बारे में सटीक और अद्यतन जानकारी के साथ और
                उनकी फसलों की वृद्धि। 
              </p>
              <p>
               हम मृदा विश्लेषण तकनीकों की भी पेशकश करते हैं जो किसानों की मदद करती हैं
                उनके लिए आवश्यक सही पोषक तत्वों और उर्वरकों का निर्धारण करें
                फसलें। हमारे ड्रोन-आधारित सर्वेक्षण प्रणाली जल्दी और
                किसानों को प्रदान करते हुए कृषि भूमि के बड़े क्षेत्रों का कुशलतापूर्वक सर्वेक्षण करें
                मिट्टी के स्वास्थ्य, जल प्रबंधन और फसल पर बहुमूल्य डेटा के साथ
                विकास। 
              </p>
              <p>
                फार्मिकॉन में, हम कृषि को और अधिक बनाने के लिए प्रतिबद्ध हैं
                कुशल, उत्पादक और टिकाऊ। हमारे समाधान हैं
                किसानों को अपने संसाधनों का अधिकतम उपयोग करने में मदद करने के लिए डिज़ाइन किया गया है
                अपशिष्ट और पर्यावरणीय प्रभाव को कम करना। हम मानते हैं कि द्वारा
                सही प्रौद्योगिकी उपकरणों के साथ किसानों को सशक्त बनाने में हम मदद कर सकते हैं
                कृषि उद्योग को बदलना और खाद्य सुरक्षा में सुधार करना
                सभी।
              </p>
              </div>
            }  
          </div>
        </div>
        <div className="right">
          <img src={about1} className="img-1" alt="" />
          <img src={about2} className="img-2" alt="" />
          <img src={about3} className="img-3" alt="" />
        </div>
      </section>
      <hr />
    </div>
  );
};

export default About;
