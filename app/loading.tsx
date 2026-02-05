export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-950 to-black flex flex-col items-center justify-center z-50">
      <div className="relative w-32 h-32 mb-8">
        {/* Simple pulsing logo circle */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse opacity-70" />
        <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center">
          <span className="text-5xl font-bold text-white tracking-widest">BR</span>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-white mb-4 tracking-wide">Baraka Residence</h2>
      <p className="text-xl text-gray-400 animate-pulse">Загружаем премиум жизнь...</p>
      <div className="mt-12 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div className="w-1/3 h-full bg-gradient-to-r from-blue-500 to-purple-600 animate-[loading_2s_infinite]" />
      </div>
    </div>
  );
}
