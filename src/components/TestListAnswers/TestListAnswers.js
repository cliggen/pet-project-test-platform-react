import React from "react";
import TestListAnswersItem from "../TestListAnswersItem/TestListAnswersItem";

const TestListAnswers = ({ singleAnswer, answers, question }) => {
    return(
        <TestListAnswersItem singleAnswer={singleAnswer} answers = {answers} question ={question}/>

    )
}

export default TestListAnswers;