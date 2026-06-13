import "./App.css";

const flashcards = [
  {
    question: "Click the Next button to start the flashcards!",
    answer: "Click the Next button to start the flashcards!",
  },
  {
    question: "Who is the all-time leading scorer for the New York Knicks?",
    answer: "Patrick Ewing",
  },
  {
    question: "What year did the Knicks win their first NBA Championship?",
    answer: "1970",
  },
  {
    question: "What year did the Knicks win their second NBA Championship?",
    answer: "1973",
  },
  {
    question: "What arena do the New York Knicks play in?",
    answer: "Madison Square Garden",
  },
  {
    question: "Who was the captain of the Knicks' 1970 championship team?",
    answer: "Willis Reed",
  },
  {
    question: "Which Knicks player is famous for the phrase 'Linsanity'?",
    answer: "Jeremy Lin",
  },
  {
    question: "What city do the New York Knicks represent?",
    answer: "New York City",
  },
  {
    question: "Who is the Knicks' all-time leader in rebounds?",
    answer: "Patrick Ewing",
  },
  {
    question: "What are the official colors of the New York Knicks?",
    answer: "Blue, Orange, and White",
  },
  {
    question:
      "Which Hall of Fame coach led the Knicks to both of their NBA Championships?",
    answer: "Red Holzman",
  },
];

const App = () => {
  return (
    <div ClassName="App">
      <div ClassName="header">
        <h1>Knicks Flashcards</h1>
        <p>Test your knowledge of the New York Knicks with these flashcards!</p>
        <p>number of flashcards: {flashcards.length}</p>
      </div>

      <div ClassName="flashcards">
        <h3>{flashcards[0].question}</h3>
      </div>
    </div>
  );
};

export default App;
