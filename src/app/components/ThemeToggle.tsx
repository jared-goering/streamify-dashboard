// src/components/ThemeToggle.tsx
'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Switch } from "@/components/ui/switch"
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center">
      <Sun className="h-5 w-5 text-yellow-500" />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        className="mx-2"
      />
      <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
    </div>
  );
}