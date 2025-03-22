// components/Header.jsx
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <a href="/" className="font-bold text-xl flex items-center gap-2">
          <span className="text-primary">🎨</span> 
          <span>ThemeSwitch</span>
        </a>
      </div>
      <div className="flex-none">
        <ThemeSwitcher />
      </div>
    </header>
  );
}