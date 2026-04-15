import React from 'react';
import logo from './logo.svg';
import { Application } from './Components/Application/Application';
import { AppProviders } from './Providers/app-provider';
import MuiMode from './Components/mui/mui-mode';

function App() {
  return (
    <AppProviders>
      <div className='App'>
       <MuiMode/>
      </div>
    </AppProviders>
  );
}

export default App;
