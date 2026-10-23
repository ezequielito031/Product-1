// Run with: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { clearLogs, EMPTY_STATE, logWorkout, parseDuration, restoreState } from "../lib/workouts.js";
import { EXERCISES, getExercisesByCategory, getExerciseById } from "../lib/exercises.js";

test("parseDuration accepts positive whole numbers only", () => {
  assert.equal(parseDuration("15"), 15);
  assert.equal(parseDuration(" 7 "), 7);
  assert.equal(parseDuration("0"), null);
  assert.equal(parseDuration("-3"), null);
  assert.equal(parseDuration("2.5"), null);
  assert.equal(parseDuration("abc"), null);
  assert.equal(parseDuration(""), null);
});

test("logWorkout adds newest first and updates totals", () => {
  let s = logWorkout(EMPTY_STATE, "Burpees", 10);
  s = logWorkout(s, "Cobra Stretch", 5);
  assert.equal(s.totalWorkouts, 2);
  assert.equal(s.totalMinutes, 15);
  assert.equal(s.workoutHistory[0].exerciseName, "Cobra Stretch");
  assert.equal(s.workoutHistory[0].id, 2);
  assert.equal(s.nextWorkoutId, 3);
});

test("logWorkout rejects invalid durations", () => {
  assert.throws(() => logWorkout(EMPTY_STATE, "Burpees", 0));
});

test("clearLogs resets everything", () => {
  const s = clearLogs(logWorkout(EMPTY_STATE, "Burpees", 10));
  assert.deepEqual(s, { ...EMPTY_STATE, workoutHistory: [] });
});

test("restoreState survives corrupted storage", () => {
  assert.equal(restoreState("not json").totalWorkouts, 0);
  assert.equal(restoreState('{"foo":1}').workoutHistory.length, 0);
});

test("exercise catalog matches the Android app", () => {
  assert.equal(EXERCISES.length, 12);
  for (const c of ["Strength", "Cardio", "Flexibility", "HIIT"]) {
    assert.equal(getExercisesByCategory(c).length, 3);
  }
  assert.equal(getExercisesByCategory("cardio").length, 3); // case-insensitive URLs
  assert.equal(getExerciseById("10").name, "Burpees");
});
