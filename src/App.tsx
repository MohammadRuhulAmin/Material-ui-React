
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
import MuiAutoComplete from './MuiAutoComplete';
import MuiLayout from './Components/MuiLayout';
import MuiCard from './Components/MuiCard';
import MuiAccordion from './Components/MuiAccordion';
import PMuiAccordion from './Components/Practise/PMuiAccordion';
import MuiImageList from './Components/MuiImageList';

function App() {
  return (
    <div className="App">
      <MuiImageList/>
      <PMuiAccordion/>
      <MuiCard/>
      {/* <MuiLayout/> */}
      {/* <MuiAutoComplete/> */}
        {/* <MyForm/> */}
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
