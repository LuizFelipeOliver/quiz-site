import { Link } from "react-router-dom";

const ELEMENT_COLORS = {
  Fogo: "from-orange-500 to-red-600",
  Terra: "from-emerald-500 to-green-700",
  Ar: "from-sky-400 to-blue-600",
  Água: "from-cyan-500 to-blue-700",
};

export default function ResultCard({ result, onRestart, theme }) {
  const isHoroscope = theme === "horoscope";

  if (isHoroscope) {
    const elementGradient = ELEMENT_COLORS[result.element] || "from-purple-500 to-indigo-600";

    return (
      <div className="w-full max-w-md mx-auto text-center animate-fade-in">
        <div className="rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl shadow-purple-900/30 p-8 border border-white/20">
          <div className="text-7xl mb-2">{result.symbol}</div>
          <h2 className="text-3xl font-bold text-white mb-1">{result.title}</h2>
          <p className="text-purple-300 text-sm mb-4">{result.period}</p>

          <span
            className={`inline-block rounded-full bg-gradient-to-r ${elementGradient} px-4 py-1 text-sm font-semibold text-white mb-6`}
          >
            {result.element}
          </span>

          <p className="text-purple-100/90 leading-relaxed mb-6">
            {result.description}
          </p>

          {result.traits && (
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {result.traits.map((trait) => (
                <span
                  key={trait}
                  className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-medium text-purple-200"
                >
                  {trait}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onRestart}
              className="rounded-xl bg-purple-500/80 backdrop-blur-sm px-6 py-3 font-medium text-white shadow-sm transition-all hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 cursor-pointer"
            >
              Tentar novamente
            </button>
            <Link
              to="/"
              className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-3 font-medium text-purple-200 shadow-sm transition-all hover:bg-white/20 active:scale-95"
            >
              Voltar ao início
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto text-center animate-fade-in">
      <div className="rounded-2xl bg-white shadow-lg p-8 border border-gray-100">
        <div className="text-5xl mb-4">✨</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          {result.title}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          {result.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onRestart}
            className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md active:scale-95 cursor-pointer"
          >
            Tentar novamente
          </button>
          <Link
            to="/"
            className="rounded-xl border-2 border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 shadow-sm transition-all hover:border-indigo-400 hover:shadow-md active:scale-95"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
