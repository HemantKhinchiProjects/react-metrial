import React from 'react';
import classes from './MealsSummary.module.css';
const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food Delivred to you</h2>
      <p>
        {' '}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.{' '}
      </p>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.{' '}
      </p>
    </section>
  );
};
export default MealSummary;
