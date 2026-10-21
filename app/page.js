"use client";

// SCREEN 1 — Dashboard (gui/DashboardScreen.kt)
import Link from "next/link";
import { useState } from "react";
import TopBar from "@/components/TopBar";
import Icon from "@/components/Icon";
import Dialog from "@/components/Dialog";
import { useWorkouts } from "@/components/WorkoutProvider";
import { CATEGORIES, categorySlug } from "@/lib/exercises";

export default function DashboardPage() {
  const { totalWorkouts, totalMinutes, workoutHistory, clearLogs, loaded } = useWorkouts();
  const [showClear, setShowClear] = useState(false);
  const hasHistory = workoutHistory.length > 0;

  return (
    <>
      <TopBar title="FitTrack" subtitle="Track your workouts and progress" />
      <main className="content">
        <h2 className="section-title">Your Progress</h2>
        <div className="grid-2">
          <StatCard title="Workouts" value={totalWorkouts} />
          <StatCard title="Minutes" value={totalMinutes} />
        </div>

        <h2 className="section-title">Workout Categories</h2>
        <div className="grid-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.name}
              href={`/category/${categorySlug(c.name)}`}
              className="card card-click category-card"
            >
              <span className={`category-icon cat-${categorySlug(c.name)}`}>
                <Icon name={c.icon} label={c.name} />
              </span>
              <span className="category-name">{c.name}</span>
              <span className="muted small">{c.subtitle}</span>
            </Link>
          ))}
        </div>

        <div className="row-between">
          <h2 className="section-title">Recent Activity</h2>
          {hasHistory && (
            <span className="pill pill-secondary">
              {totalWorkouts} sessions • {totalMinutes} min
            </span>
          )}
        </div>

        {!loaded ? null : hasHistory ? (
          <ul className="history">
            {workoutHistory.map((w) => (
              <li key={w.id} className="card history-item">
                <span className="history-check">
                  <Icon name="check" label="Completed workout" />
                </span>
                <div className="grow">
                  <div className="history-name">{w.exerciseName}</div>
                  <div className="muted small">Session #{w.id}</div>
                </div>
                <span className="pill pill-primary">{w.durationMinutes} min</span>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyWorkoutState />
        )}

        <button
          type="button"
          className="btn btn-outline btn-block"
          disabled={!hasHistory}
          onClick={() => setShowClear(true)}
        >
          <Icon name="history" size={20} /> Clear Workout History
        </button>
      </main>

      <Dialog
        open={showClear}
        title="Clear Workout History?"
        onClose={() => setShowClear(false)}
        actions={
          <>
            <button type="button" className="btn btn-outline" onClick={() => setShowClear(false)}>
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                clearLogs();
                setShowClear(false);
              }}
            >
              Clear
            </button>
          </>
        }
      >
        This will remove all logged workouts and reset your workout totals.
      </Dialog>
    </>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="card stat-card">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{title}</div>
    </div>
  );
}

function EmptyWorkoutState() {
  return (
    <div className="card empty">
      <span className="empty-icon">
        <Icon name="fitness" />
      </span>
      <h3 className="empty-title">Ready for your first workout?</h3>
      <p className="muted">
        Choose one of the categories above and log your first completed workout.
      </p>
    </div>
  );
}

