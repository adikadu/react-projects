import classes from "./App.module.css";
import Card from "./components/UI/Card";
import { useState } from "react";

const questions = [
  {
    question: "Do I have to allow the use of cookes?",
    answer:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    question: "How do I change my My Page password?",
    answer:
      "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    question: "What is BankID?",
    answer:
      "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    question: "Whose birth number can I use?",
    answer:
      "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
  {
    question: "When do I recieve a password ordered by letter?",
    answer:
      "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan",
  },
];

function App() {
  const [isExpanded, setIsExpanded] = useState(
    new Array(questions.length).fill(false)
  );

  const expandBtnHandler = (event) => {
    const idx = +event.target.dataset.idx;
    setIsExpanded((prev) => {
      prev[idx] = !prev[idx];
      return [...prev];
    });
  };

  return (
    <main className={classes["centering"]}>
      <Card>
        <h3 className={classes["heading"]}>
          Questions And Answers
          <br />
          About Login
        </h3>
        <div className={classes["questions"]}>
          {questions.map((que, idx) => (
            <Card key={idx}>
              <p>{que.question}</p>
              <button
                data-idx={idx}
                onClick={expandBtnHandler}
                className={classes["btn--expand"]}
              >
                {isExpanded[idx] ? "-" : "+"}
              </button>
              {isExpanded[idx] && (
                <p className={classes["answer"]}>{que.answer}</p>
              )}
            </Card>
          ))}
        </div>
      </Card>
    </main>
  );
}

export default App;
