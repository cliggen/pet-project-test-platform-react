import React from "react";
import TestListQuestion from "../TestListQuestion/TestListQuestion";
import TestListAnswers from "../TestListAnswers/TestListAnswers";

const TestList = ({questions}) => {
    const elements = questions.map((item) => {
        return (
            <li> <TestListQuestion question={item.question}/>
            <ul>
                <TestListAnswers singleAnswer={item.singleAnswer}  answers={item.answers}/>
            </ul>
        </li>
        )
    })


    return(
        <ol>
            {elements}
        </ol>
    )
}

export default TestList;