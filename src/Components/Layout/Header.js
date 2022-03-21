import React, { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Foos App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img
          src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
          alt="table fool of delistions food"
        />
      </div>
    </Fragment>
  );
};
export default Header;
