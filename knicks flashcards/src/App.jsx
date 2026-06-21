import "./App.css";
import { useState } from "react";

import firstcardImage from "./assets/ogFirstCard.jpg";
import secondcardImage from "./assets/patrickEwingSecoundCard.jpg";
import thirdcardImage from "./assets/1970KnickTeamThridCard.jpg";
import fourthcardImage from "./assets/1973KnickTeamFourCard.jpg";
import fifthcardImage from "./assets/msgFirthCard.jpg";
import sixthcardImage from "./assets/new-york-knicks-willis-reed-dick-raphael.jpg";
import seventhcardImage from "./assets/jeremylin.jpg";
import eighthcardImage from "./assets/times-square-new-york-city-area-hotels.jpg";
import ninthcardImage from "./assets/patrick-ewing-rebounds.jpg";
import tenthcardImage from "./assets/newyorkjeresy.jpg";
import eleventhcardImage from "./assets/redholzman.jpg";

const flashcards = [
  {
    question: "Click the Next button to start the flashcards!",
    answer:
      "Welcome to the Knicks Flashcards! Test your knowledge of the New York Knicks with these fun and informative flashcards. Click the Next button to get started and see how much you know about this iconic NBA team!",
    image: firstcardImage,
  },
  {
    question: "Who is the all-time leading scorer for the New York Knicks?",
    answer: "Patrick Ewing",
    image: secondcardImage,
  },
  {
    question: "What year did the Knicks win their first NBA Championship?",
    answer: "1970",
    image: thirdcardImage,
  },
  {
    question: "What year did the Knicks win their second NBA Championship?",
    answer: "1973",
    image: fourthcardImage,
  },
  {
    question: "What arena do the New York Knicks play in?",
    answer: "Madison Square Garden",
    image: fifthcardImage,
  },
  {
    question: "Who was the captain of the Knicks' 1970 championship team?",
    answer: "Willis Reed",
    image: sixthcardImage,
  },
  {
    question: "Which Knicks player is famous for the phrase 'Linsanity'?",
    answer: "Jeremy Lin",
    image: seventhcardImage,
  },
  {
    question: "What city do the New York Knicks represent?",
    answer: "New York City",
    image: eighthcardImage,
  },
  {
    question: "Who is the Knicks' all-time leader in rebounds?",
    answer: "Patrick Ewing",
    image: ninthcardImage,
  },
  {
    question: "What are the official colors of the New York Knicks?",
    answer: "Blue, Orange, and White",
    image: tenthcardImage,
  },
  {
    question:
      "Which Hall of Fame coach led the Knicks to both of their NBA Championships?",
    answer: "Red Holzman",
    image: eleventhcardImage,
  },
];

const App = () => {
  const [currentCard, SetCurrentCard] = useState(0);
  const [isFlipped, SetIsFlipped] = useState(false);
  const [userAnswer, SetUserAnswer] = useState("");
  const [correctAnswers, SetCorrectAnswers] = useState(0);
  const [incorrectAnswers, SetIncorrectAnswers] = useState(0);

  const handleNext = () => {
    if (currentCard === flashcards.length - 1) {
      SetCurrentCard(0);
    }

    SetCurrentCard(currentCard + 1);
    SetIsFlipped(true);
  };

  const handleBack = () => {
    if (currentCard === 0) {
      SetCurrentCard(flashcards.length - 1);
    }

    SetCurrentCard(currentCard - 1);
    SetIsFlipped(true);
  };

  const handleFlip = () => {
    SetIsFlipped(!isFlipped);
  };

  const handleInput = (e) => {
    SetUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userAnswer.trim() === "") {
      return;
    }

    if (
      userAnswer.trim().toLowerCase() ===
      flashcards[currentCard].answer.toLowerCase()
    ) {
      SetCorrectAnswers(correctAnswers + 1);
    } else {
      SetIncorrectAnswers(incorrectAnswers + 1);
    }

    SetUserAnswer("");
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Knicks Flashcards</h1>
        <p>Test your knowledge of the New York Knicks with these flashcards!</p>
        <p>number of flashcards: {flashcards.length}</p>
        <h4>
          User Correct Answers : {correctAnswers} <br /> User Incorrect Answers
          : {incorrectAnswers}
        </h4>
      </div>

      <input
        type="text"
        placeholder="Type your answer here..."
        value={userAnswer}
        onChange={handleInput}
      />
      <br />
      <input type="submit" onClick={handleSubmit} />

      <div className="flashcards" onClick={handleFlip}>
        {!isFlipped && (
          <img
            src={flashcards[currentCard].image}
            alt="flashcard"
            className="card-image"
          />
        )}

        <h3>
          {isFlipped
            ? flashcards[currentCard].question
            : flashcards[currentCard].answer}
        </h3>
      </div>
      <h2>
        {currentCard + 1} of {flashcards.length}
      </h2>

      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default App;
