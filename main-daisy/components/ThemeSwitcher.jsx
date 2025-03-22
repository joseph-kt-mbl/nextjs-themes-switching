// components/ThemeSwitcher.jsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function ThemeSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentTheme, setCurrentTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Organize themes by categories
  const themeCategories = {
    "Standard": ['light', 'dark'],
    "Colorful": ['cupcake', 'bumblebee', 'emerald', 'valentine', 'pastel', 'fantasy', 'cmyk', 'autumn', 'acid', 'lemonade'],
    "Professional": ['corporate', 'business', 'luxury', 'winter', 'coffee'],
    "Stylized": ['synthwave', 'retro', 'cyberpunk', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'wireframe', 'black', 'dracula', 'night']
  };

  // Filter themes based on search query
  const filteredThemes = searchQuery 
    ? Object.values(themeCategories).flat().filter(theme => 
        theme.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  // Initialize theme from document attribute on client side
  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme') || 'light';
    setCurrentTheme(theme);
  }, []);

  // Handle theme change
  const handleThemeChange = async (theme) => {
    // Update UI immediately
    document.documentElement.setAttribute('data-theme', theme);
    setCurrentTheme(theme);
    setIsDropdownOpen(false);

    // Submit the form to change the theme server-side
    const formData = new FormData();
    formData.append('theme', theme);
    formData.append('redirectTo', pathname);

    await fetch('/api/set-theme', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <div className="dropdown dropdown-end">
      <button 
        className="btn btn-primary btn-sm m-1"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span>Current: {currentTheme}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="dropdown-content bg-base-200 rounded-box w-72 max-h-96 overflow-y-auto shadow-xl p-4 z-50">
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Search themes..." 
              className="input input-bordered w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {searchQuery ? (
            <div className="space-y-1">
              {filteredThemes.map(theme => (
                <button 
                  key={theme}
                  className={`btn btn-sm w-full justify-start ${currentTheme === theme ? 'btn-accent' : 'btn-ghost'}`}
                  onClick={() => handleThemeChange(theme)}
                >
                  {theme}
                </button>
              ))}
            </div>
          ) : (
            Object.entries(themeCategories).map(([category, themes]) => (
              <div key={category} className="mb-4">
                <h3 className="font-medium opacity-70 mb-2 text-sm uppercase tracking-wide">{category}</h3>
                <div className="grid grid-cols-2 gap-1">
                  {themes.map(theme => (
                    <button 
                      key={theme}
                      className={`btn btn-sm ${currentTheme === theme ? 'btn-accent' : 'btn-ghost'} justify-start`}
                      onClick={() => handleThemeChange(theme)}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}