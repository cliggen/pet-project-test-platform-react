import React from "react";
import TestListAnswersItem from "../TestListAnswersItem/TestListAnswersItem";

const TestListAnswers = ({ singleAnswer, answers }) => {

    return(
        <TestListAnswersItem singleAnswer={singleAnswer} answers = {answers}/>

    )
}

export default TestListAnswers;