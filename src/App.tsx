import React from 'react';
import './App.css';
import MuiButton from './Components/MuiButton';
import { MuiInputField } from './Components/MuiInputField';
import MuiSelect from './Components/MuiSelect';
import MuiTypography from './Components/MuiTypography';

function App() {
  return (
    <div className="App">
        <MuiSelect/>
        <MuiTypography/>
        <MuiButton/>
        <MuiInputField/>
        
    </div>
  );
}

export default App;
