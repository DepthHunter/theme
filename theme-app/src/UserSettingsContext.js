import React, { createContext, useContext, useState } from 'react';

const UserSettingsContext = createContext();

export const UserSettingsProvider = ({ children }) => {
  const [userSettings, setUserSettings] = useState({
    theme: 'light',
  });

  const updateUserSettings = (newSettings) => {
    setUserSettings({ ...userSettings, ...newSettings });
  };

  return (
    <UserSettingsContext.Provider value={{ userSettings, updateUserSettings }}>
      {children}
    </UserSettingsContext.Provider>
  );
};

export const useUserSettings = () => useContext(UserSettingsContext);
