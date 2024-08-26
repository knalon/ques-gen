const Specifics = ({ setQuesSpecifics, quesSpecifics, generateQuestion }) => {
  const quesName = ["trueFalse", "fillBlank", "mcq", "matching"];
  const title = ["title", "month", "year"];

  const handleChapterChange = (event) => {
    const { name, checked } = event.target;
    setQuesSpecifics(() => ({
      ...quesSpecifics,
      [name]: checked,
    }));
  };

  const handleTypeChange = (event) => {
    const { name, checked } = event.target;
    setQuesSpecifics(() => ({ ...quesSpecifics, [name]: checked }));
  };

  const handleDifficultyChange = (event) => {
    const { name, value } = event.target;
    setQuesSpecifics(() => ({ ...quesSpecifics, [name]: value }));
  };

  const handleNumOfQuesChange = (event) => {
    const { name, value } = event.target;
    setQuesSpecifics(() => ({ ...quesSpecifics, [name]: value }));
  };

  const handleRepeatChange = (event) => {
    const { name, checked } = event.target;
    setQuesSpecifics(() => ({ ...quesSpecifics, [name]: checked }));
  };

  return (
    <>
      <h3 className="title">Choose the specifics of the question paper</h3>

      {title.map((name, index) => (
        <div key={index}>
          <label>{`${name}`} : </label>
          <input
            type="text"
            className="choice"
            onChange={(event) => {
              setQuesSpecifics(() => ({
                ...quesSpecifics,
                [`${name}`]: event.target.value,
              }));
            }}
          />
        </div>
      ))}

      <section className="five-grid">
        {/* Chapter Selection */}
        <div>
          <ul className="choice">
            <li>
              <h3>Chapter</h3>
              <hr />
            </li>

            {["c1", "c2", "c3", "c4"].map((name, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  name={`${name}Chapter`}
                  checked={quesSpecifics[`${name}Chapter`]}
                  onChange={handleChapterChange}
                />
                <label> Chapter {index + 1}</label>
              </li>
            ))}
          </ul>
        </div>
        {/* Question Type Selection */}
        <div>
          <ul className="choice">
            <li>
              <h3>Type</h3>
              <hr />
            </li>
            {quesName.map((type, key) => (
              <li key={key}>
                <input
                  type="checkbox"
                  name={`${type}Type`}
                  checked={quesSpecifics[`$[type]Type`]}
                  onChange={handleTypeChange}
                />
                <label>{type}</label>
              </li>
            ))}
          </ul>
        </div>
        {/* Difficulty Level Selection */}

        <div>
          <ul className="choice">
            <li>
              <h3>Difficulty</h3>
              <hr />
            </li>
            {quesName.map((diff, index) => (
              <li key={index}>
                <select
                  className="dropdown-box"
                  name={`${diff}Difficulty`}
                  value={quesSpecifics[`${diff}Difficulty`]}
                  onChange={handleDifficultyChange}
                >
                  <option value="easy">easy</option>
                  <option value="normal">normal</option>
                  <option value="hard">hard</option>
                  <option value="demanding">demanding</option>
                </select>
              </li>
            ))}
          </ul>
        </div>
        {/* Number Of Question Selection */}
        <div>
          <ul className="choice">
            <li>
              <h3>No Of Quesitons</h3>
              <hr />
            </li>
            {quesName.map((num, index) => (
              <li key={index}>
                <input
                  type="number"
                  name={`${num}NoOfQuestions`}
                  value={quesSpecifics[`${num}NoOfQues`]}
                  onChange={handleNumOfQuesChange}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Label Reat Selection */}
        <div>
          <ul className="choice">
            <li>
              <h3>Repeat Label</h3>
              <hr />
            </li>
            {quesName.map((label, index) => {
              return (
                <li key={index}>
                  <input
                    type="checkbox"
                    name={`${label}Repeat`}
                    checked={quesSpecifics[`${label}Repeat`]}
                    onChange={handleRepeatChange}
                  />
                  <label>{`${label}`}</label>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <div className="flex-center">
        <button className="button-generate" onClick={generateQuestion}>
          Generate Question
        </button>
      </div>
    </>
  );
};

export default Specifics;
