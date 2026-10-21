"use client";

// Shared workout state for every page — the web equivalent of WorkoutViewModel.
// Unlike the Android version, history is saved in the browser (localStorage),
// so it survives a page refresh.

import { createContext, useContext, useEffect, useState } from "react";
import { clearLogs, EMPTY_STATE, logWorkout, restoreState } from "@/lib/workouts";

const STORAGE_KEY = "fittrack.workouts.v1";
const WorkoutContext = createContext(null);

export function WorkoutProvider({ children }) {
  const [state, setState] = useState(EMPTY_STATE);
  const [loaded, setLoaded] = useState(false);

  // Load saved history once, in the browser.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setState(restoreState(saved));
    } catch {
      /* storage blocked (private mode etc.) — start empty */
    }
    setLoaded(true);
  }, []);

  // Save whenever it changes.
  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state, loaded]);

  const value = {
    ...state,
    loaded,
    logWorkout: (name, minutes) => setState((s) => logWorkout(s, name, minutes)),
    clearLogs: () => setState(clearLogs()),
  };

  return <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>;
}

export function useWorkouts() {
  const ctx = useContext(WorkoutContext);
  if (!ctx) throw new Error("useWorkouts must be used inside <WorkoutProvider>");
  return ctx;
}
