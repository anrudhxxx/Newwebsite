import { useState } from 'react';

type Option = { key: string; text: string };
export type QuizQuestion = {
  id: string;
  question: string;
  options: Option[];
  answerKey: string;
  explanation: string;
};

export default function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = Object.entries(answers).reduce((acc, [qid, key]) => {
    const q = questions.find((x) => x.id === qid);
    if (q && q.answerKey === key) acc += 1;
    return acc;
  }, 0);

  return (
    <div className="space-y-6">
      {questions.map((q) => (
        <div key={q.id} className="card p-4">
          <p className="font-medium">{q.question}</p>
          <div className="mt-3 grid gap-2">
            {q.options.map((o) => (
              <label key={o.key} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={q.id}
                  value={o.key}
                  checked={answers[q.id] === o.key}
                  onChange={(e) => setAnswers((s) => ({ ...s, [q.id]: e.target.value }))}
                />
                <span>{o.text}</span>
              </label>
            ))}
          </div>
          {submitted && (
            <p className={`mt-2 text-sm ${answers[q.id] === q.answerKey ? 'text-green-700' : 'text-red-700'}`}>
              {answers[q.id] === q.answerKey ? 'Correct!' : 'Not quite.'} {q.explanation}
            </p>
          )}
        </div>
      ))}
      <div className="flex items-center gap-3">
        <button className="btn btn-primary" onClick={() => setSubmitted(true)}>Check answers</button>
        {submitted && (
          <span className="text-sm text-gray-700">Score: {score}/{questions.length}</span>
        )}
      </div>
    </div>
  );
}
