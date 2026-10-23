# Changelog

## v3.0: API, tests and polish
- New API: `GET /api/exercises` and `GET /api/exercises?category=hiit`
- Unit tests with `npm test` (6 tests on the workout logic and catalog)
- Dark mode that follows the device setting
- Custom 404 page for unknown categories and exercises
- Date shown on each logged workout
- Favicon

## v2.0: Full design + saved history
- Redesigned UI that matches the Android app: colored category cards, Material icons, difficulty badges, top bar with back button
- Popup dialogs: "Workout Completed!" and a "Clear Workout History?" confirmation
- Clear workout history
- Clearer validation message under the minutes field
- Workout history is **saved in the browser (localStorage)**, so it survives a page refresh
- Workout logic moved into `lib/workouts.js` (pure functions)

## v1.0: Skateboard (MVP)
- Dashboard with total workouts, total minutes and recent activity
- 4 categories with 12 exercises (ported from the Android app)
- Exercise detail with instructions and a "log minutes" form (whole numbers > 0 only)
- Basic styling
- Workouts are kept in memory, so they reset on page refresh (same as the Android version)
