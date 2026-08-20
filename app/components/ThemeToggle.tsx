import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  return <button
    className="theme-toggle"
    type="button"
    data-theme-toggle=""
    aria-label="Ativar modo escuro"
    aria-pressed="false"
    title="Ativar modo escuro"
    suppressHydrationWarning
  >
    <Moon className="theme-icon theme-icon-moon" aria-hidden="true" />
    <Sun className="theme-icon theme-icon-sun" aria-hidden="true" />
  </button>;
}
