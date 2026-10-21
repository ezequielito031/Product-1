// Workout log logic — ported from viewmodel/WorkoutViewModel.kt.
// Pure functions (no React, no browser APIs) so they are easy to unit test.

export const EMPTY_STATE = Object.freeze({
  totalWorkouts: 0,
  totalMinutes: 0,
  workoutHistory: [],
  nextWorkoutId: 1,
});

/** Returns a positive whole number of minutes, or null if the input is invalid. */
export function parseDuration(text) {
  const trimmed = String(text ?? "").trim();
  if (!/^\d+$/.test(trimmed)) return null;
  const n = Number(trimmed);
  return n > 0 ? n : null;
}

/** Adds a workout to the front of the history and updates the totals. */
export function logWorkout(state, exerciseName, durationMinutes) {
  if (!Number.isInteger(durationMinutes) || durationMinutes <= 0) {
    throw new Error("durationMinutes must be a positive integer");
  }
  const newWorkout = {
    id: state.nextWorkoutId,
    exerciseName,
    durationMinutes,
  };
  return {
    totalWorkouts: state.totalWorkouts + 1,
    totalMinutes: state.totalMinutes + durationMinutes,
    workoutHistory: [newWorkout, ...state.workoutHistory],
    nextWorkoutId: state.nextWorkoutId + 1,
  };
}

/** Resets everything, like clearLogs() in the Android ViewModel. */
export function clearLogs() {
  return { ...EMPTY_STATE, workoutHistory: [] };
}

/** Validates data read back from storage so bad data can't break the app. */
export function restoreState(raw) {
  try {
    const data = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (!data || !Array.isArray(data.workoutHistory)) return clearLogs();
    return {
      totalWorkouts: Number(data.totalWorkouts) || 0,
      totalMinutes: Number(data.totalMinutes) || 0,
      workoutHistory: data.workoutHistory,
      nextWorkoutId: Number(data.nextWorkoutId) || data.workoutHistory.length + 1,
    };
  } catch {
    return clearLogs();
  }
}
