import React from 'react';
import Home from './src/components/Home';
import loadContextProvider from './src/components/Context';

export default function App() {

  return (
      <loadContextProvider>
        <Home/>
      </loadContextProvider>
  );

};



