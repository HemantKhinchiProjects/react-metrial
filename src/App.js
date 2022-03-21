import React, { Fragment } from 'react';
import './style.css';

import Header from './Components/Layout/Header';
import MealSummary from './Components/Meals/MealsSummary';
export default function App() {
  return (
    <Fragment>
      <Header />
      <MealSummary />
    </Fragment>
  );
}
