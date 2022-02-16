import { useState, useEffect } from 'react';
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import classes from './Card.module.css';
import reviews from '../../data';

const Card = () => {

  const [ people, setPeople ] = useState(reviews);
  const [ reviewNumber, setReviewNumber ] = useState(0);
  const [ currentReview, setCurrentReview ] = useState({})

  useEffect(() => {
    setCurrentReview(people[reviewNumber]);
  }, [reviewNumber]);

  useEffect(() => {
    console.log(reviewNumber);
  }, [reviewNumber]);

  const nextReview = () => {
    if(reviewNumber + 1 === people.length) return;
    setReviewNumber(prev => prev + 1);
  }

  const prevReview = () => {
    if(reviewNumber === 0) return;
    setReviewNumber(prev => prev - 1);
  }

  const showRandomReview = () => {
    const randomNumber = Math.floor(Math.random() * people.length);
    setReviewNumber(randomNumber);
  }
  
  return (
    <div className={classes.card}>
      <FaQuoteRight className={classes.quote} />
      <div className={classes.user}>
        <img 
          className={classes.image}
          src={currentReview.image} 
          alt={`image of ${currentReview.name}`} />
        <p className={classes.name}>{currentReview.name}</p>
      </div>
      <div className={classes.body}>{currentReview.text}</div>
      <div className={classes.commands}>
        <span onClick={prevReview} className={classes.moveIcon}>
          <FaChevronLeft className={classes.iconPrev} />
        </span>
        <span onClick={nextReview} className={classes.moveIcon}>
          <FaChevronRight className={classes.iconNext} />
        </span>
      </div>
      <button 
        onClick={showRandomReview}
        className={classes.randomBtn}>
        show random
      </button>
    </div>
  )
}

export default Card