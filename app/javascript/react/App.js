import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './components/Index';

const App = props => {
  return(
    <BrowserRouter>
      <Route exact path='/' component={Index} />
    </BrowserRouter>
  )
}

export default App
