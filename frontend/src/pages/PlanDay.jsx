// PlanDay.jsx
import { useState } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:8000"; //backend URL later

export default function PlanDay() {
  const [tasksInput, setTasksInput] = useState('');
  const [plan, setPlan] = useState('');

  const handleGeneratePlan = async () => {
    if (!tasksInput.trim()) return;

    const tasksArray = tasksInput
      .split('\n')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    try {
      const res = await axios.post(`${API_URL}/plan-day`, { tasks: tasksArray });
      setPlan(res.data.plan);
    } catch (error) {
      console.error("Error generating plan:", error);
      setPlan("Failed to generate plan. Try again.");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">AI Day Planner</h1>

      <textarea
        className="w-full p-2 border rounded mb-4"
        rows="6"
        placeholder="Enter your tasks, one per line..."
        value={tasksInput}
        onChange={(e) => setTasksInput(e.target.value)}
      />

      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={handleGeneratePlan}
      >
        Generate Plan
      </button>

      {plan && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="font-semibold mb-2">Suggested Schedule:</h2>
          <pre className="whitespace-pre-wrap">{plan}</pre>
        </div>
      )}
    </div>
  );
}