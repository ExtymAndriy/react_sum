import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <div className="app">
    <Sum titleOne={2} titleTwo={3} />
    <Sum titleOne={-5} titleTwo={5} />
    <Sum titleOne={10} titleTwo={0} />
    <Sum titleOne={0} titleTwo={5} />
    <Sum />
  </div>
);
