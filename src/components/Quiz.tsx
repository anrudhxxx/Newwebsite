import React, { useState } from 'react';

type Question = {
  id: string;
  prompt: string;
  choices: { id: string; text: string; correct?: boolean; explanation?: string }[];
};

export default function Quiz({ questions }: { questions: Question[] }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  return (
    <div className="space-y-4">
      {questions.map((q) => {
        const selected = answers[q.id];
        const chosen = q.choices.find((c) => c.id === selected);
        const isCorrect = chosen?.correct ?? false;
        return (
          <div key={q.id} className="rounded-2xl border bg-white p-4 shadow-soft">
            <p className="font-medium">{q.prompt}</p>
            <div className="mt-2 grid gap-2">
              {q.choices.map((c) => (
                <label key={c.id} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={q.id}
                    value={c.id}
                    checked={selected === c.id}
                    onChange={() => setAnswers({ ...answers, [q.id]: c.id })}
                    aria-label={c.text}
                  />
                  <span>{c.text}</span>
                </label>
              ))}
            </div>
            {selected && (
              <div className={`mt-3 text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {isCorrect ? 'Correct!' : 'Try again.'} {chosen?.explanation && <span>— {chosen.explanation}</span>}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
