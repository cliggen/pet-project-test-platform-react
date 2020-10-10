import React from "react";
import TestListQuestion from "../TestListQuestion/TestListQuestion";
import TestListAnswers from "../TestListAnswers/TestListAnswers";

const TestList = ({questions}) => {
    const elements = questions.map((item) => {
        return (
            <li className="list-group-item"> <TestListQuestion question={item.question}/>
            <ul>
                <TestListAnswers question={item.question} singleAnswer={item.singleAnswer}  answers={item.answers}/>
            </ul>
        </li>
        )
    })


    return(
        <ol className="list-group">
            {elements}
        </ol>
    )
}

export default TestList;