import "./globals.css";
import { WorkoutProvider } from "@/components/WorkoutProvider";

export const metadata = {
  title: "FitTrack",
  description: "Track your workouts and progress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WorkoutProvider>
          <div className="app">{children}</div>
        </WorkoutProvider>
      </body>
    </html>
  );
}
