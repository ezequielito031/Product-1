// API layer: GET /api/exercises            -> all exercises
//            GET /api/exercises?category=cardio -> filtered by category
// Gives other clients (a mobile app, CLI, or chat/LLM tool) the same data the web UI uses.
import { EXERCISES, getCategory, getExercisesByCategory } from "@/lib/exercises";

export function GET(request) {
  const category = new URL(request.url).searchParams.get("category");
  if (!category) return Response.json({ exercises: EXERCISES });

  if (!getCategory(category)) {
    return Response.json({ error: `Unknown category: ${category}` }, { status: 404 });
  }
  return Response.json({ exercises: getExercisesByCategory(category) });
}
