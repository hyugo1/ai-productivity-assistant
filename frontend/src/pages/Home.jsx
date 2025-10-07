// home.jsx

import { useState } from 'react';
import { summarizeText } from '../api/ai';

export default function Home() {
  const [input, setInput] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = async () => {
    const result = await summarizeText(input);
    setSummary(result);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
  Text Summarizer
</h1>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows="6"
        placeholder="Paste text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleSummarize}
      >
        Summarize
      </button>

      {summary && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="font-semibold mb-2">Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}