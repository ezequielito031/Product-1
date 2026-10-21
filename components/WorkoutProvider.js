"use client";

// Shared workout state, the web version of WorkoutViewModel.
// v1: kept in memory only, so a page refresh resets it (same as the Android app).

import { createContext, useContext, useState } from "react";

const WorkoutContext = createContext(null);

export function WorkoutProvider({ children }) {
  const [history, setHistory] = useState([]);

  function logWorkout(exerciseName, durationMinutes) {
    setHistory((h) => [{ id: h.length + 1, exerciseName, durationMinutes }, ...h]);
  }

  const totalWorkouts = history.length;
  const totalMinutes = history.reduce((sum, w) => sum + w.durationMinutes, 0);

  return (
    <WorkoutContext.Provider value={{ history, totalWorkouts, totalMinutes, logWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkouts() {
  return useContext(WorkoutContext);
}
