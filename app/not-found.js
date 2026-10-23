import Link from "next/link";
import TopBar from "@/components/TopBar";

export default function NotFound() {
  return (
    <>
      <TopBar title="FitTrack" subtitle="Page not found" />
      <main className="content">
        <div className="card empty">
          <h3 className="empty-title">We couldn&apos;t find that page.</h3>
          <Link href="/" className="btn btn-primary">
            Back to dashboard
          </Link>
        </div>
      </main>
    </>
  );
}
