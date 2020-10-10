import TestHeader from "../TestHeader";
import TestList from "../TestList";
import TestSubmitButton from "../TestSubmitButton";
import React from "react";

const questionList = [
    {
        question: 'Will you study React?!',
        answers: ['Yes', 'No'],
        rightAnswer: 'Yes',
        singleAnswer: true
    },

    {
        question: 'What is your age?',
        answers: ['Less than 18', 'More than 18'],
        rightAnswer: 'More than 18',
        singleAnswer: true
    },
    {
        question: 'What technologies do you use?',
        answers: ['HTML', 'CSS', 'JS', 'React JS'],
        rightAnswer: 'JS',
        singleAnswer: false
    }
]

const App = () => {
    return(
        <div>
            <TestHeader />
            <TestList questions = {questionList} />
            <TestSubmitButton />
        </div>
    )
}
export default App;