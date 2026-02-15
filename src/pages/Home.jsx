import { Link } from "react-router-dom";
import horoscopeQuiz from "../data/horoscope-quiz.json";
import reverseHoroscopeQuiz from "../data/reverse-horoscope-quiz.json";

const quizzes = [horoscopeQuiz, reverseHoroscopeQuiz];

const THEME_STYLES = {
  horoscope: {
    card: "bg-gradient-to-r from-indigo-950 via-purple-900 to-violet-950 border-purple-700/50",
    title: "text-white",
    desc: "text-purple-300",
    icon: "✦",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-3">
          Questionários
        </h1>
        <p className="text-center text-gray-500 mb-12">
          Escolha um questionário para começar
        </p>
        <div className="grid gap-4">
          {quizzes.map((quiz) => {
            const style = THEME_STYLES[quiz.theme];

            return (
              <Link
                key={quiz.id}
                to={`/quiz/${quiz.id}`}
                className={`block rounded-2xl p-6 shadow-sm border transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98] ${
                  style
                    ? `${style.card}`
                    : "bg-white border-gray-100"
                }`}
              >
                <h2
                  className={`text-xl font-semibold mb-1 ${
                    style ? style.title : "text-gray-800"
                  }`}
                >
                  {style?.icon && `${style.icon} `}
                  {quiz.title}
                </h2>
                <p className={style ? style.desc : "text-gray-500"}>
                  {quiz.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
