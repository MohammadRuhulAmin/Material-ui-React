import React from 'react';
import './App.css';
import MuiButton from './Components/MuiButton';
import { MuiInputField } from './Components/MuiInputField';
import MuiSelect from './Components/MuiSelect';
import MuiTypography from './Components/MuiTypography';
import MyForm from './Components/MyForm';
import PMuiButton from './Components/Practise/PMuiButton';
import PMuiErrorState from './Components/Practise/PMuiErrorState';
import PMuiSelect from './Components/Practise/PMuiSelect';
import PMuiTypography from './Components/Practise/PMuiTypography';
import PTextField from './Components/Practise/PTextField';

function App() {
  return (
    <div className="App">
        <MyForm/>
      {/* <PMuiSelect/> */}
      {/* <PMuiErrorState/>
      <PTextField />
      <PMuiButton/>
      <PMuiTypography/>
        <MuiSelect/>
        <MuiTypography/>
        <MuiButton/>
        <MuiInputField/> */}
        
    </div>
  );
}

export default App;
