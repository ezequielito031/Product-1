"use client";

// SCREEN 1: Dashboard
import Link from "next/link";
import { useWorkouts } from "@/components/WorkoutProvider";
import { CATEGORIES } from "@/lib/exercises";

export default function DashboardPage() {
  const { history, totalWorkouts, totalMinutes } = useWorkouts();

  return (
    <main>
      <h1>FitTrack</h1>
      <p className="muted">Track your workouts and progress</p>

      <h2>Your Progress</h2>
      <div className="grid">
        <div className="card stat">
          <strong>{totalWorkouts}</strong> Workouts
        </div>
        <div className="card stat">
          <strong>{totalMinutes}</strong> Minutes
        </div>
      </div>

      <h2>Workout Categories</h2>
      <div className="grid">
        {CATEGORIES.map((c) => (
          <Link key={c.name} href={`/category/${c.name.toLowerCase()}`} className="card">
            <strong>{c.name}</strong>
            <p className="muted">{c.subtitle}</p>
          </Link>
        ))}
      </div>

      <h2>Recent Activity</h2>
      {history.length === 0 ? (
        <p className="muted">No workouts yet. Choose a category above to log your first one.</p>
      ) : (
        <ul>
          {history.map((w) => (
            <li key={w.id} className="card row">
              <span>
                {w.exerciseName} <span className="muted">(Session #{w.id})</span>
              </span>
              <strong>{w.durationMinutes} min</strong>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
