import { useState } from "react";
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";

function resolveZodiac(answers, resolver) {
  const month = answers.birth_month;
  const day = answers.birth_day;

  for (const range of resolver.ranges) {
    if (range.startMonth > range.endMonth) {
      // Wraps around year (e.g. Capricorn: Dec 22 - Jan 19)
      if (
        (month === range.startMonth && day >= range.startDay) ||
        (month === range.endMonth && day <= range.endDay)
      ) {
        return range.sign;
      }
    } else {
      if (
        (month === range.startMonth && day >= range.startDay) ||
        (month === range.endMonth && day <= range.endDay)
      ) {
        return range.sign;
      }
    }
  }
  return null;
}

function resolveResult(answers, quiz) {
  if (quiz.resultResolver) {
    if (quiz.resultResolver.type === "zodiac") {
      const sign = resolveZodiac(answers, quiz.resultResolver);
      return quiz.results[sign];
    }
  }
  // Fallback: direct mapping from last answer
  const questions = quiz.questions;
  const lastQuestion = questions[questions.length - 1];
  const answerValue = answers[lastQuestion.id];
  return quiz.results[answerValue];
}

export default function QuizRenderer({ quiz }) {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = quiz.questions;
  const isFinished = currentQuestion >= questions.length;

  function handleSelect(value) {
    const question = questions[currentQuestion];
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
    setCurrentQuestion((prev) => prev + 1);
  }

  function handleRestart() {
    setAnswers({});
    setCurrentQuestion(0);
  }

  if (isFinished) {
    const result = resolveResult(answers, quiz);
    return <ResultCard result={result} onRestart={handleRestart} theme={quiz.theme} />;
  }

  return (
    <QuestionCard
      question={questions[currentQuestion]}
      onSelect={handleSelect}
      answers={answers}
      theme={quiz.theme}
    />
  );
}
