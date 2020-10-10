import React from 'react';
import ReactDOM from 'react-dom';
import TestHeader from "./components/TestHeader/TestHeader";
import TestList from "./components/TestList/TestList";
import TestSubmitButton from "./components/TestSubmitButton/TestSubmitButton";

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

ReactDOM.render(<App />, document.getElementById('root'));