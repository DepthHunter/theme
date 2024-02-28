// App.js
import React from 'react';
import { UserSettingsProvider } from './UserSettingsContext';
import Display from './Display';
import SettingsPage from './SettingsPage';
import TimeTracker from './TimeTracker'; 


const DisplayWithTimeTracker = TimeTracker(Display); 
const SettingsPageWithTimeTracker = TimeTracker(SettingsPage); 

function App() {
  return (
    <UserSettingsProvider>
      <div className="App">
        <DisplayWithTimeTracker />
        <SettingsPageWithTimeTracker />
      </div>
    </UserSettingsProvider>
  );
}

export default App;
