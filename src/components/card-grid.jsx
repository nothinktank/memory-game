import { useState, useEffect } from "react";
import { Card, createPokemonCards } from "./card";
import ScoreBoard from "./scoreboard";
// import Game from "../data/game-data";

//initialize a new Game
// let game = new Game();

export default function CardGrid() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [score, setScore] = useState({current:0, high: 0})
    // const [gameStatus, setGameStatus] = useState(game);
    // const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            async function loadCards() {
            try {
                const cardDeck = await createPokemonCards();
                setCards(cardDeck);
                console.log('Card deck loaded:', cardDeck);
            } catch (error) {
                console.error('Error loading cards:', error);
            } finally {
                setLoading(false);
            }
        }
        loadCards();
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <div className="container">Loading cards...</div>;
    }

    function handleClick (pokemonName) {
        console.log(`${pokemonName} is clicked`);
        let newCardArray = shuffle(cards);
        // console.log(newCardArray)
        setCards([...newCardArray]);
    }

    function shuffle (array) {
        let currentIndex = array.length;

        while (currentIndex !== 0){
            //pick a random index
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            //swap it with the current element
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        // console.log(array)
        return array;
    }

    function resetAllClickCount (){
        const countResetCardDeck = cards.map(card => ({
            ...card,
            clickCount: 0
        }));

        setCards([...countResetCardDeck]);
    }

    // useEffect(() => {
    //     const highScore = currentScore;
    //     //ca
    //     const currentScore = cards.reduce((total, card) => {
    //         return total = total + card.clickCount;
    //     }, 0)


    // }, [score])

    return (
        <>
        <ScoreBoard 
        scoreCard={score}
        />
            <div className="container">
            {cards.map((card, index) => (
                <Card 
                    key={index}
                    imgLink={card.img}
                    desc={card.desc}
                    onClick={() => {
                        handleClick(card.desc);
                        if (card.clickCount < 1){
                            const updatedCards = cards.map(c => 
                                c.desc === card.desc ? {...c, clickCount: c.clickCount + 1 } : c
                            )
                            setCards(updatedCards);
                            // card.clickCount++;
                            setScore(prevScore => ({...prevScore, current: prevScore.current + 1}))
                        }else{
                            resetAllClickCount();
                            setScore(prevScore => {
                                const newHigh = prevScore.current > prevScore.high ? prevScore.current : prevScore.high;
                                return {current: 0, high: newHigh}
                            })
                            // card.clickCount = 1;
                        }
                        
                        console.log(cards)
                        // console.log(`current score is ${score.current}`)
                        // console.log(`highest score is ${score.high}`)
                    }}
                />
            ))}</div>
        </>
    );
}

//the current score is 0
//initial highest score is 0

//if current score is 0, then a click on a card starts a game 

//each card object has a card id and a click count

//when a card is clicked,
    //the card count should increase by 1
    //the card deck should be re-shuffled

//when a card count hits 2
    //the round ends
    //compare the score with the highest score, if it's higher, then replace the score
    //reset the current score to 0

