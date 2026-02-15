import { useParams, Link } from "react-router-dom";
import QuizRenderer from "../components/QuizRenderer";
import horoscopeQuiz from "../data/horoscope-quiz.json";

const quizzesMap = {
  [horoscopeQuiz.id]: horoscopeQuiz,
};

export default function Quiz() {
  const { id } = useParams();
  const quiz = quizzesMap[id];

  if (!quiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Questionário não encontrado
          </h2>
          <Link
            to="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  const isHoroscope = quiz.theme === "horoscope";

  return (
    <div
      className={`min-h-screen ${
        isHoroscope
          ? "bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950"
          : "bg-gradient-to-br from-indigo-50 to-purple-50"
      }`}
    >
      {isHoroscope && <StarField />}
      <div className="relative mx-auto max-w-3xl px-4 py-16">
        <Link
          to="/"
          className={`inline-flex items-center text-sm mb-8 ${
            isHoroscope
              ? "text-purple-300 hover:text-purple-100"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          ← Voltar
        </Link>
        <h1
          className={`text-3xl font-bold text-center mb-2 ${
            isHoroscope ? "text-white" : "text-gray-800"
          }`}
        >
          {isHoroscope && "✦ "}
          {quiz.title}
          {isHoroscope && " ✦"}
        </h1>
        <p
          className={`text-center mb-10 ${
            isHoroscope ? "text-purple-300" : "text-gray-500"
          }`}
        >
          {quiz.description}
        </p>
        <QuizRenderer quiz={quiz} />
      </div>
    </div>
  );
}

function StarField() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 60 }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.1,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
    </div>
  );
}
