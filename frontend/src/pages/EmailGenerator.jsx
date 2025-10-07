// EmailGenerator.jsx

import { useState } from 'react';
import { generateEmail } from '../api/ai';

export default function EmailGenerator() {
  const [prompt, setPrompt] = useState('');
  const [email, setEmail] = useState('');

  const handleGenerate = async () => {
    const result = await generateEmail(prompt);
    setEmail(result);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Email Generator</h1>
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter email prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={handleGenerate}
      >
        Generate Email
      </button>

      {email && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="font-semibold mb-2">Generated Email:</h2>
          <p>{email}</p>
        </div>
      )}
    </div>
  );
}