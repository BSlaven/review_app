import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import classes from './Card.module.css';
import reviews from '../../data';

const Card = () => {

  const [ people, setPeople ] = useState(reviews);
  const [ reviewNumber, setReviewNumber ] = useState(0);
  const [ currentReview, setCurrentReview ] = useState({})

  useEffect(() => {
    setCurrentReview(people[reviewNumber]);
  }, [reviewNumber])

  const nextReview = () => {
    setReviewNumber(prev => prev + 1);
  }

  const prevReview = () => {
    if(reviewNumber === 0) return;
    setReviewNumber(prev => prev - 1);
  }
  
  return (
    <div className={classes.card}>
      <FaQuoteLeft className={classes.quote} />
      <div className={classes.user}>
        <img 
          className={classes.image}
          src={currentReview.image} 
          alt={`image of ${currentReview.name}`} />
        <p className={classes.name}>{currentReview.name}</p>
      </div>
      <div className={classes.body}>{currentReview.text}</div>
      <div className={classes.commands}>
        <span>prev</span>
        <span>next</span>
      </div>
      <button className={classes.randomBtn}>show random</button>
    </div>
  )
}

export default Card