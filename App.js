import "./App.css";

import Header from "./pages/Header";
import Specifics from "./pages/Specifics";
import Layout from "./pages/Layout";
import Questions from "./pages/Questions";

import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [c1Chapter, setC1Chapter] = useState(false);
  const [c2Chapter, setC2Chapter] = useState(false);
  const [c3Chapter, setC3Chapter] = useState(false);
  const [c4Chapter, setC4Chapter] = useState(false);

  const [trueFalseType, setTrueFalseType] = useState(false);
  const [fillBlankType, setFillBlankType] = useState(false);
  const [mcqType, setMcqType] = useState(false);
  const [matchingType, setMatchingType] = useState(false);

  const [truefalseDifficulty, setTrueFalseDifficulty] = useState("easy");
  const [fillBlankDifficulty, setfillBlankDifficulty] = useState("easy");
  const [mcqDifficulty, setMcqDifficulty] = useState("easy");
  const [matchingDifficulty, setMaatchingDifficulty] = useState("easy");

  const [trueFalseNoOfQuestions, setTrueFalseNoOfQuestions] = useState(0);
  const [fillBlankNoOfQuestions, setFillBlankNoOfQuestions] = useState(0);
  const [mcqNoOfQuestions, setMcqNoOfQuestoins] = useState(0);
  const [matchingNoOfQuestions, setMatchingNoOfQuestions] = useState(0);

  const [trueFalseRepeat, setTrueFalseRepeat] = useState(false);
  const [fillBlankRepeat, setFillBlankRepeat] = useState(false);
  const [mcqRepeat, setMcqRepeat] = useState(false);
  const [matchingRepeat, setMatchingRepeat] = useState(false);

  const [questions, setQuestions] = useState("");
  const [quesSpecifics, setQuesSpecifics] = useState({
    title: title,
    month: month,
    year: year,

    c1Chapter: c1Chapter,
    c2Chapter: c2Chapter,
    c3Chapter: c3Chapter,
    c4Chapter: c4Chapter,

    trueFalseType: trueFalseType,
    fillBlankType: fillBlankType,
    mcqType: mcqType,
    matchingType: matchingType,

    trueFalseDifficulty: truefalseDifficulty,
    fillBlankDifficulty: fillBlankDifficulty,
    mcqDifficulty: mcqDifficulty,
    matchingDifficulty: matchingDifficulty,

    trueFalseNoOfQuestions: trueFalseNoOfQuestions,
    fillBlankNoOfQuestions: fillBlankNoOfQuestions,
    mcqNoOfQuestions: mcqNoOfQuestions,
    matchingNoOfQuestions: matchingNoOfQuestions,

    trueFalseRepeat: trueFalseRepeat,
    fillBlankRepeat: fillBlankRepeat,
    mcqRepeat: mcqRepeat,
    matchingRepeat: matchingRepeat,
  });
  const generateQuestion = () => {
    fetch("http://localhost:8080/paper/create_omni_paper", {
      method: "POST",
      body: JSON.stringify(quesSpecifics),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.stringify(data));
        setQuestions(data.questions); // Access the questions array
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log(JSON.stringify(quesSpecifics));
  };

  // const generateQuestion = () => {
  //   fetch("http://localhost:8080/paper/create_omni_paper", {
  //     method: "POST",
  //     body: JSON.stringify(quesSpecifics),
  //     headers: { "Content-type": "application/json; charset=UTF-8" },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setQuestions(data);
  //       console.log(questions);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  //   console.log(JSON.stringify(quesSpecifics));
  // };

  return (
    <div className="App">
      <Header />
      <Specifics
        setQuesSpecifics={setQuesSpecifics}
        quesSpecifics={quesSpecifics}
        generateQuestion={generateQuestion}
      />
      <Layout quesSpecifics={quesSpecifics} />
      <Questions questions={questions} />
    </div>
  );
}

export default App;
