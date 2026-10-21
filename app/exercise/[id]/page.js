// SCREEN 3: Exercise detail
import Link from "next/link";
import LogWorkoutForm from "./LogWorkoutForm";
import { getExerciseById } from "@/lib/exercises";

export default async function ExerciseDetailPage({ params }) {
  const { id } = await params;
  const exercise = getExerciseById(id);

  if (!exercise) {
    return (
      <main>
        <Link href="/">← Back</Link>
        <p>Exercise not found.</p>
      </main>
    );
  }

  return (
    <main>
      <Link href={`/category/${exercise.category.toLowerCase()}`}>← Back</Link>
      <h1>{exercise.name}</h1>
      <p className="muted">
        {exercise.category} · {exercise.difficulty} · {exercise.recommendedDuration} min recommended
      </p>

      <h2>How to Perform</h2>
      <p className="card">{exercise.instructions}</p>

      <h2>Log Your Workout</h2>
      <LogWorkoutForm exerciseName={exercise.name} />
    </main>
  );
}
