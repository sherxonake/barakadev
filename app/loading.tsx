export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950 flex flex-col items-center justify-center z-[9999]">
      <div className="relative w-40 h-40 mb-10">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse opacity-60 blur-xl" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 animate-pulse opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-white animate-pulse tracking-widest">
            BR
          </span>
        </div>
      </div>

      <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight animate-pulse">
        Baraka Residence
      </h2>

      <p className="text-2xl md:text-3xl text-gray-300 mb-12 animate-pulse">
        Премиум жизнь в Навои... загружается
      </p>

      <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-loading-bar" />
      </div>

      <style jsx global>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .animate-loading-bar {
          animation: loading-bar 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
