import React from "react";

const ThankYou = props => {
  let finalResults = [];
  for (let i = 0; i < props.resultArray.length - 1; i++) {
    finalResults.push(props.resultArray[i + 1] - props.resultArray[i]);
  }
  console.log(finalResults);

  const listData = finalResults.map(element => (
    <li key={finalResults.indexOf(element) + 1}>
      <p>
        Время ответа на вопрос {finalResults.indexOf(element) + 1}: {element} мс
      </p>
    </li>
  ));
  return <ul>{listData}</ul>;
};

export default ThankYou;
