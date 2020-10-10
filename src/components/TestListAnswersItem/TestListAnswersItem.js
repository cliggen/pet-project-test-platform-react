import React from "react";
import "../TestListAnswersItem/TestListAnswersItem.css";
const TestListAnswersItem = ({singleAnswer, answers, question}) => {
const answerName = question;

    const answerListRadio = answers.map((answerItem)=>{
        return (
            <li className="question-list-item"><input name={answerName} type="radio" value = {answerItem}/>{answerItem}</li>
        )
    })

    const answerListCheckbox = answers.map((answerItem)=>{
        return(
            <li><input name={answerName} type="checkbox" value={answerItem}/>{answerItem}</li>
        )
    })
if (singleAnswer) {
    return (
        <div>
            {answerListRadio}
        </div>
    )
} else {
    return (
        <div>
            {answerListCheckbox}
        </div>
    )
}
}
export default TestListAnswersItem;