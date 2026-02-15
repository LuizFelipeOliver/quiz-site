const DAYS_IN_MONTH = {
  1: 31, 2: 29, 3: 31, 4: 30, 5: 31, 6: 30,
  7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31,
};

export default function QuestionCard({ question, onSelect, answers, theme }) {
  const isHoroscope = theme === "horoscope";

  if (question.type === "day_of_month") {
    const month = answers[question.dependsOn];
    const maxDay = DAYS_IN_MONTH[month] || 31;
    const days = Array.from({ length: maxDay }, (_, i) => i + 1);

    return (
      <div className="w-full max-w-2xl mx-auto animate-fade-in">
        <h2
          className={`text-2xl font-bold text-center mb-8 ${
            isHoroscope ? "text-purple-100" : "text-gray-800"
          }`}
        >
          {question.text}
        </h2>
        <div className="grid grid-cols-7 gap-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => onSelect(day)}
              className={
                isHoroscope
                  ? "rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-3 text-center font-medium text-purple-100 transition-all hover:bg-purple-500/40 hover:border-purple-400/50 hover:scale-110 active:scale-95 cursor-pointer"
                  : "rounded-lg border-2 border-gray-200 bg-white px-2 py-3 text-center font-medium text-gray-700 shadow-sm transition-all hover:border-indigo-400 hover:shadow-md hover:scale-110 active:scale-95 cursor-pointer"
              }
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <h2
        className={`text-2xl font-bold text-center mb-8 ${
          isHoroscope ? "text-purple-100" : "text-gray-800"
        }`}
      >
        {question.text}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.value)}
            className={
              isHoroscope
                ? "rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-4 text-center font-medium text-purple-100 shadow-sm transition-all hover:bg-purple-500/40 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 active:scale-95 cursor-pointer"
                : "rounded-xl border-2 border-gray-200 bg-white px-4 py-4 text-center font-medium text-gray-700 shadow-sm transition-all hover:border-indigo-400 hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            }
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
