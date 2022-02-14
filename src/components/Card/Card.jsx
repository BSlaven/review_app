import { useState } from 'react';

import classes from './Card.module.css';
import reviews from '../../data';

const Card = () => {

  const [ people, setPeople ] = useState(reviews);
  const [ reviewNumber, setReviewNumber ] = useState(0);

  const nextReview = () => {
    setReviewNumber(prev => prev + 1);
  }

  const prevReview = () => {
    if(reviewNumber === 0) return;
    setReviewNumber(prev => prev - 1);
  }
  
  return (
    <div className={classes.card}>
      <div className={classes.user}>
        <img src="" alt="" />
        <p className={classes.name}>Slaven Buijevac</p>
      </div>
      <div className={classes.body}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugit nam repellat, doloremque obcaecati itaque nostrum vitae eum natus eveniet?
      </div>
      <div className={classes.commands}>
        <span>prev</span>
        <span>next</span>
      </div>
      <button className={classes.randomBtn}>show random</button>
    </div>
  )
}

export default Card