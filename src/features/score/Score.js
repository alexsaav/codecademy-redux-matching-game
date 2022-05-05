import React from 'react';
import { useSelector } from 'react-redux';
import { selectMatchedIDs } from '../board/boardSlice';

export const Score = () => {
  //Gets the number of values in the array of IDs and set the score.
  const cardsMatched = useSelector(selectMatchedIDs);
  

    return (
        <div className="score-container">Matched: {cardsMatched.length}</div>
    );
};