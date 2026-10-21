import "./globals.css";
import { WorkoutProvider } from "@/components/WorkoutProvider";

export const metadata = {
  title: "FitTrack",
  description: "Track your workouts and progress",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2F6BFF",
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
