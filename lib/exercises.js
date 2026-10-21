// Exercise catalog, ported from model/ExerciseData.kt in the Android app.

export const CATEGORIES = [
  { name: "Strength", subtitle: "Build muscle" },
  { name: "Cardio", subtitle: "Boost endurance" },
  { name: "Flexibility", subtitle: "Improve mobility" },
  { name: "HIIT", subtitle: "Train intensely" },
];

export const EXERCISES = [
  {
    id: 1,
    name: "Classic Push-ups",
    category: "Strength",
    difficulty: "Beginner",
    preview: "Build upper-body strength with a classic push-up.",
    instructions:
      "Start in a plank position. Lower your chest toward the floor while keeping your body straight. Push back up to the starting position.",
    recommendedDuration: 10,
  },
  {
    id: 2,
    name: "Bodyweight Squats",
    category: "Strength",
    difficulty: "Beginner",
    preview: "Strengthen your legs and glutes.",
    instructions:
      "Stand with your feet shoulder-width apart. Lower your hips as if sitting into a chair. Keep your chest upright, then return to standing.",
    recommendedDuration: 12,
  },
  {
    id: 3,
    name: "Forward Lunges",
    category: "Strength",
    difficulty: "Intermediate",
    preview: "Improve leg strength and balance.",
    instructions:
      "Step forward with one leg and lower your hips until both knees are bent. Push through the front foot to return to the starting position.",
    recommendedDuration: 10,
  },
  {
    id: 4,
    name: "Jumping Jacks",
    category: "Cardio",
    difficulty: "Beginner",
    preview: "A simple full-body cardio exercise.",
    instructions:
      "Stand with your feet together and arms at your sides. Jump while spreading your legs and raising your arms overhead. Jump back to the starting position.",
    recommendedDuration: 8,
  },
  {
    id: 5,
    name: "High Knees",
    category: "Cardio",
    difficulty: "Intermediate",
    preview: "Raise your heart rate with fast knee drives.",
    instructions:
      "Run in place while lifting each knee toward your chest. Keep your core tight and maintain a quick pace.",
    recommendedDuration: 10,
  },
  {
    id: 6,
    name: "Mountain Climbers",
    category: "Cardio",
    difficulty: "Advanced",
    preview: "A fast-paced cardio and core exercise.",
    instructions:
      "Start in a plank position. Drive one knee toward your chest, then quickly switch legs while keeping your hips stable.",
    recommendedDuration: 8,
  },
  {
    id: 7,
    name: "Hamstring Stretch",
    category: "Flexibility",
    difficulty: "Beginner",
    preview: "Stretch the muscles along the back of your legs.",
    instructions:
      "Sit with one leg extended. Reach toward your toes while keeping your back straight. Hold the stretch gently.",
    recommendedDuration: 5,
  },
  {
    id: 8,
    name: "Cobra Stretch",
    category: "Flexibility",
    difficulty: "Beginner",
    preview: "Stretch your chest, abdomen, and lower back.",
    instructions:
      "Lie face down. Place your hands under your shoulders and gently press your upper body upward while keeping your hips on the floor.",
    recommendedDuration: 5,
  },
  {
    id: 9,
    name: "Butterfly Stretch",
    category: "Flexibility",
    difficulty: "Beginner",
    preview: "Improve hip and inner-thigh flexibility.",
    instructions:
      "Sit with the soles of your feet together. Hold your feet and gently press your knees toward the floor.",
    recommendedDuration: 5,
  },
  {
    id: 10,
    name: "Burpees",
    category: "HIIT",
    difficulty: "Advanced",
    preview: "A high-intensity full-body exercise.",
    instructions:
      "Squat down, place your hands on the floor, jump your feet back into a plank, return to the squat position, then jump upward.",
    recommendedDuration: 10,
  },
  {
    id: 11,
    name: "Jump Squats",
    category: "HIIT",
    difficulty: "Intermediate",
    preview: "Combine squats with explosive jumps.",
    instructions:
      "Lower into a squat, then jump upward explosively. Land softly and immediately lower into the next squat.",
    recommendedDuration: 8,
  },
  {
    id: 12,
    name: "Plank Jacks",
    category: "HIIT",
    difficulty: "Intermediate",
    preview: "Combine plank stability with cardio movement.",
    instructions:
      "Start in a plank position. Jump your feet apart and then back together while keeping your upper body stable.",
    recommendedDuration: 8,
  },
];

export function getExercisesByCategory(name) {
  return EXERCISES.filter((e) => e.category.toLowerCase() === String(name).toLowerCase());
}

export function getExerciseById(id) {
  return EXERCISES.find((e) => e.id === Number(id));
}
