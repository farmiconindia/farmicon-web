export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-green-50">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
                <p className="text-green-800 font-medium animate-pulse">Loading Plans...</p>
            </div>
        </div>
    );
}
