// SCREEN 3 — Exercise detail (gui/ExerciseDetailScreen.kt)
import { notFound } from "next/navigation";
import TopBar from "@/components/TopBar";
import DifficultyBadge from "@/components/DifficultyBadge";
import LogWorkoutForm from "./LogWorkoutForm";
import { EXERCISES, getExerciseById } from "@/lib/exercises";

export function generateStaticParams() {
  return EXERCISES.map((e) => ({ id: String(e.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const ex = getExerciseById(id);
  return { title: ex ? `${ex.name} · FitTrack` : "FitTrack" };
}

export default async function ExerciseDetailPage({ params }) {
  const { id } = await params;
  const exercise = getExerciseById(id);
  if (!exercise) notFound();

  return (
    <>
      <TopBar title={exercise.name} subtitle={exercise.category} showBack />
      <main className="content">
        <section className="card hero">
          <h2 className="hero-title">{exercise.name}</h2>
          <div className="row-wrap">
            <DifficultyBadge difficulty={exercise.difficulty} />
            <span className="pill pill-secondary">
              {exercise.recommendedDuration} min recommended
            </span>
          </div>
        </section>

        <h2 className="section-title">How to Perform</h2>
        <section className="card padded">
          <p className="instructions">{exercise.instructions}</p>
        </section>

        <h2 className="section-title">Log Your Workout</h2>
        <LogWorkoutForm exerciseName={exercise.name} />
      </main>
    </>
  );
}
