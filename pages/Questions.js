const Questions = ({ questions }) => {
  // Check if questions is an array before mapping
  if (!Array.isArray(questions)) {
    return <p>No questions available.</p>;
  }

  return (
    <>
      {questions.map((question, index) => (
        <p key={index}>
          {index + 1} : {question.chemQuestionContent}
        </p>
      ))}
    </>
  );
};

export default Questions;
