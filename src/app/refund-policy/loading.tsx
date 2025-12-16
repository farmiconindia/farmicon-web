export default function Loading() {
    return (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-green-200 border-t-green-800 rounded-full animate-spin" />
                <p className="text-lg font-medium text-green-800 animate-pulse">Loading...</p>
            </div>
        </div>
    );
}
