// SCREEN 2: Exercise list
import Link from "next/link";
import { getExercisesByCategory } from "@/lib/exercises";

export default async function ExerciseListPage({ params }) {
  const { category } = await params;
  const exercises = getExercisesByCategory(category);
  const title = exercises[0]?.category ?? category;

  return (
    <main>
      <Link href="/">← Back</Link>
      <h1>{title}</h1>
      <p className="muted">{exercises.length} exercises</p>

      <ul>
        {exercises.map((ex) => (
          <li key={ex.id}>
            <Link href={`/exercise/${ex.id}`} className="card">
              <div className="row">
                <strong>{ex.name}</strong>
                <span className="muted">{ex.difficulty}</span>
              </div>
              <p>{ex.preview}</p>
              <p className="muted">Recommended: {ex.recommendedDuration} min</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
