import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleIDs, flipCard, selectMatchedIDs, resetCards } from '../../boardSlice';

let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
    const visibleIDs = useSelector(selectVisibleIDs);
    const matchedIDs = useSelector(selectMatchedIDs);
    const dispatch = useDispatch();
  
    // FLIP CARD ACTION
    const flipHandler = (id) => {
        dispatch(flipCard(id));
    };

    //RESET THE FLIPPED CARDS
    const tryAgainHandler = () => {
        dispatch(resetCards());
    };

    let cardStyle = 'resting'
    let click = () => flipHandler(id);
    
    let cardText = (
        <img src={cardLogo} className="logo-placeholder" alt="Card option" />
    );

    // 1st if statement
    /*Each card can show its contents if it is one of the visible cards or remain hidden otherwise.*/
    if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
        cardText = contents;
        click = () => {};
    }

    // 2nd if statement 
    //Changes cardStyle to "matched" if cards are matched.
    if (matchedIDs.includes(id)) {
        cardStyle = 'matched';
    }

    // 3rd if statement 
    //Limits the number of visible cards at a time to 2.
    if (visibleIDs.length === 2) { 
        //Reset the unmatched cards by clicking any card. 
        click = tryAgainHandler;
    }

    //4th if statement 
    /*Sets cardStyle to "no match" if two cards are visible and the cards don't match */
    if(visibleIDs.length === 2 && !matchedIDs.includes(id)) {
        cardStyle = 'no-match';
    }

    return (
        <button onClick={click} className={`card ${cardStyle}`}>
            {cardText}
        </button>
    );
};
