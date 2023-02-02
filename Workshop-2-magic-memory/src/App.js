import React, { useState, useEffect } from 'react';
import './App.css'
import SingleCard from './components/SingleCard';

const cardImages = [
    { "src": "/img/helmet-1.png", like: false },
    { "src": "/img/potion-1.png", like: false },
    { "src": "/img/ring-1.png", like: false },
    { "src": "/img/scroll-1.png", like: false },
    { "src": "/img/shield-1.png", like: false },
    { "src": "/img/sword-1.png", like: false },
]

function App() {
    const [disabled, setDisabled] = useState(false);
    const [choicecardOne, setChoicecardOne] = useState(null);
    const [choicecardTwo, setChoicecardTwo] = useState(null);
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);


    /* handle */
    const Choice = (card) => {
        choicecardOne ? setChoicecardTwo(card) : setChoicecardOne(card);
    };

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .map((card) => ({...card, id: Math.random() }))
            .sort(() => Math.random() - 0.100);

        setChoicecardOne(null);
        setChoicecardTwo(null);
        setCards(shuffledCards);
        setTurns(0);
    };

    console.log(cards, turns)



    /* Compare cards */

    useEffect(() => {
        if (choicecardOne && choicecardTwo) {
            if (choicecardOne.src === choicecardTwo.src) {
                setCards((Card) => {
                    return Card.map((card) => {
                        if (card.src === choicecardOne.src) {
                            return {...card, like: true };
                        } else {
                            return card;
                        }
                    });
                });

                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 800);
            }
        }
    }, [choicecardOne, choicecardTwo]);


    /* Reset */
    const resetTurn = () => {
        setDisabled(false);
        setTurns((Turns) => Turns + 1);
        setChoicecardOne(null);
        setChoicecardTwo(null);
    };


    /* Start game */
    useEffect(() => {
        shuffleCards();
    }, []);

    return ( <
        div className = "App" >
        <
        h2 > Hector, Nimer, Yordi < /h2> <
        h1 > Magic Match < /h1> <
        button onClick = { shuffleCards } > New Game < /button> <
        p > Turn: { turns } < /p> <
        div className = 'card-grid' > {
            cards.map((card) => ( <
                SingleCard card = { card }
                Choice = { Choice }
                fli = { card === choicecardOne || card === choicecardTwo || card.like }
                disab = { disabled }

                />
            ))
        } <
        /div>

        <
        /div>
    );
}

export default App