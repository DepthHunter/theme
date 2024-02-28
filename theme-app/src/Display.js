import React from 'react';
import { useUserSettings } from './UserSettingsContext';


const Display = ({ timeSpent }) => {
  const { userSettings } = useUserSettings();

  return (
    <div>
      <h2>Display Settings</h2>
      <p>Time Spent: {timeSpent} seconds</p>
      <p>Theme: {userSettings.theme}</p>
    
     
    </div>
  );
};

export default Display;
