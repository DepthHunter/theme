import React from 'react';
import { useUserSettings } from './UserSettingsContext';

const SettingsPage = ({ timeSpent }) => {
  const { userSettings, updateUserSettings } = useUserSettings();

  const handleChangeTheme = () => {
    const newTheme = userSettings.theme === 'light' ? 'dark' : 'light';
    updateUserSettings({ theme: newTheme });
    updateThemeVariables(newTheme);
  };

  const updateThemeVariables = (theme) => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--primary-color', '#ffffff');
      root.style.setProperty('--background-color', '#333333');
    } else {
      root.style.setProperty('--primary-color', '#000');
      root.style.setProperty('--background-color', '#ffffff');
    }
  };

  return (
    <div>
        <button onClick={handleChangeTheme}>Change Theme</button>
    </div>
  );
};

export default SettingsPage;
