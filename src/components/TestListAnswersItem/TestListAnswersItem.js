import React from "react";

const TestListAnswersItem = ({singleAnswer, answers}) => {
    const answerListRadio = answers.map((answerItem)=>{
        return (
            <li><input name='answer1' type="radio"/>{answerItem}</li>
        )
    })

    const answerListCheckbox = answers.map((answerItem)=>{
        return(
            <li><input name='answer1' type="checkbox"/>{answerItem}</li>
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