// SCREEN 2 — Exercise list (gui/ExerciseListScreen.kt)
import Link from "next/link";
import { notFound } from "next/navigation";
import TopBar from "@/components/TopBar";
import Icon from "@/components/Icon";
import DifficultyBadge from "@/components/DifficultyBadge";
import { CATEGORIES, categorySlug, getCategory, getExercisesByCategory } from "@/lib/exercises";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: categorySlug(c.name) }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = getCategory(category);
  return { title: cat ? `${cat.name} · FitTrack` : "FitTrack" };
}

export default async function ExerciseListPage({ params }) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();
  const exercises = getExercisesByCategory(cat.name);

  return (
    <>
      <TopBar title={cat.name} subtitle={`${exercises.length} exercises`} showBack />
      <main className="content">
        <h2 className="section-title">Choose an Exercise</h2>
        <ul className="exercise-list">
          {exercises.map((ex) => (
            <li key={ex.id}>
              <Link href={`/exercise/${ex.id}`} className="card card-click exercise-card">
                <span className={`exercise-icon cat-${categorySlug(ex.category)}`}>
                  <Icon category={ex.category} label={ex.category} />
                </span>
                <div className="grow stack-sm">
                  <div className="row-between">
                    <span className="exercise-name">{ex.name}</span>
                    <DifficultyBadge difficulty={ex.difficulty} />
                  </div>
                  <p className="muted">{ex.preview}</p>
                  <p className="recommended">Recommended: {ex.recommendedDuration} min</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
