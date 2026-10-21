"use client";

// Equivalent of gui/FitTrackTopBar.kt
import { useRouter } from "next/navigation";
import Icon from "./Icon";

export default function TopBar({ title, subtitle, showBack = false }) {
  const router = useRouter();
  return (
    <header className="topbar">
      {showBack && (
        <button
          type="button"
          className="icon-btn"
          aria-label="Back"
          onClick={() => (window.history.length > 1 ? router.back() : router.push("/"))}
        >
          <Icon name="back" />
        </button>
      )}
      <div>
        <h1 className="topbar-title">{title}</h1>
        {subtitle && <p className="topbar-subtitle">{subtitle}</p>}
      </div>
    </header>
  );
}
