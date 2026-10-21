"use client";

import { useState } from "react";
import Dialog from "@/components/Dialog";
import { useWorkouts } from "@/components/WorkoutProvider";
import { parseDuration } from "@/lib/workouts";

export default function LogWorkoutForm({ exerciseName }) {
  const { logWorkout } = useWorkouts();
  const [durationText, setDurationText] = useState("");
  const [touched, setTouched] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const duration = parseDuration(durationText);
  const isValid = duration !== null;
  const showError = touched && !isValid;

  function handleSubmit(e) {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    logWorkout(exerciseName, duration);
    setDurationText("");
    setTouched(false);
    setShowSuccess(true);
  }

  return (
    <>
      <form className="card padded stack" onSubmit={handleSubmit} noValidate>
        <p className="muted">Enter how many minutes you completed.</p>
        <label className="field">
          <span className="field-label">Duration (Minutes)</span>
          <input
            className={`input ${showError ? "input-error" : ""}`}
            type="text"
            inputMode="numeric"
            placeholder="Example: 15"
            value={durationText}
            onChange={(e) => {
              setDurationText(e.target.value);
              setTouched(true);
            }}
            aria-invalid={showError}
            aria-describedby="duration-error"
          />
          <span id="duration-error" className="field-error" role="alert">
            {showError ? "Enter a valid number greater than 0." : ""}
          </span>
        </label>
        <button type="submit" className="btn btn-primary btn-block" disabled={!isValid}>
          Log Completed Workout
        </button>
      </form>

      <Dialog
        open={showSuccess}
        title="Workout Completed!"
        onClose={() => setShowSuccess(false)}
        actions={
          <button type="button" className="btn btn-primary" onClick={() => setShowSuccess(false)}>
            Done
          </button>
        }
      >
        {exerciseName} has been added to your workout history.
      </Dialog>
    </>
  );
}
