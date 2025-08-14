'use client';

import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/components/ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="bg-gray-200 dark:bg-gray-700"
      />
      {theme === 'light' ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-blue-400" />
      )}
    </div>
  );
}
