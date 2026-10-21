"use client";

import { useState } from "react";
import { useWorkouts } from "@/components/WorkoutProvider";

export default function LogWorkoutForm({ exerciseName }) {
  const { logWorkout } = useWorkouts();
  const [minutes, setMinutes] = useState("");
  const [message, setMessage] = useState("");

  const duration = Number(minutes);
  const isValid = Number.isInteger(duration) && duration > 0;

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    logWorkout(exerciseName, duration);
    setMinutes("");
    setMessage(`${exerciseName} was added to your workout history.`);
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <label>
        Duration (minutes)
        <input
          type="number"
          min="1"
          placeholder="Example: 15"
          value={minutes}
          onChange={(e) => {
            setMinutes(e.target.value);
            setMessage("");
          }}
        />
      </label>
      <button type="submit" disabled={!isValid}>
        Log Completed Workout
      </button>
      {message && <p className="success">{message}</p>}
    </form>
  );
}
