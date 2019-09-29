import React from "react";

const ThankYou = props => {
  let finalResults = [];
  for (let i = 0; i < props.resultArray.length - 1; i++) {
    finalResults.push(props.resultArray[i + 1] - props.resultArray[i]);
  }
  console.log(finalResults);
  return finalResults.map(element => (
    <ul>
      <li>
        <p>
          Время ответа на вопрос {finalResults.indexOf(element) + 1}: {element}{" "}
          мс
        </p>
      </li>
    </ul>
  ));
};

export default ThankYou;
