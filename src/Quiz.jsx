import React, { useState } from 'react';
import './App.css';
import Lottie from "lottie-react";
import animationData from "./assets/floating-laptop-animation.json";

function Quiz() {
    const questions = [
        { // question 1
            question: 'What is the output of the following Python code?\nprint(2 + 3 * 4)',
            options: [
                { answer: '14', value: 'correct' },
                { answer: '20', value: 'incorrect' },
                { answer: '24', value: 'incorrect' },
                { answer: '10', value: 'incorrect' }
            ],
            correctAnswer: 'correct'
        },
        { // question 2
            question: 'Which of the following is used to define a function in Python?',
            options: [
                { answer: 'func', value: 'incorrect' },
                { answer: 'def', value: 'correct' },
                { answer: 'function', value: 'incorrect' },
                { answer: 'define', value: 'incorrect' }
            ],
            correctAnswer: 'correct'
        },
        { // question 3
            question: 'What is the correct HTML element for inserting a line break?',
            options: [
                { answer: '<lb>', value: 'incorrect' },
                { answer: '<br>', value: 'correct' },
                { answer: '<break>', value: 'incorrect' },
                { answer: '<hr>', value: 'incorrect' }
            ],
            correctAnswer: 'correct'
        },
        { // question 4
            question: 'Which CSS property is used to change the text color of an element?',
            options: [
                { answer: 'font-color', value: 'incorrect' },
                { answer: 'text-color', value: 'incorrect' },
                { answer: 'color', value: 'correct' },
                { answer: 'background-color', value: 'incorrect' }
            ],
            correctAnswer: 'correct'
        },
        { // question 5
            question: 'In Python, how do you start a for loop?',
            options: [
                { answer: 'for x in y', value: 'correct' },
                { answer: 'for (x in y)', value: 'incorrect' },
                { answer: 'foreach x in y', value: 'incorrect' },
                { answer: 'for x to y', value: 'incorrect' }
            ],
            correctAnswer: 'correct'
        },
        { // question 6
            question: 'Which JavaScript keyword is used to declare a variable?',
            options: [
                { answer: 'var', value: 'correct' },
                { answer: 'dim', value: 'incorrect' },
                { answer: 'string', value: 'incorrect' },
                { answer: 'myVar', value: 'incorrect' }
            ],
            correctAnswer: 'correct'
        },
        { // question 7
            question: 'What is the result of the following SQL query?\nSELECT * FROM users WHERE age > 30',
            options: [
                { answer: 'Only the name column from users table where age is greater than 30', value: 'incorrect' },
                { answer: 'All columns from users table where age is less than 30', value: 'incorrect' },
                { answer: 'Only the age column from users table where age is greater than 30', value: 'incorrect' },
                { answer: 'All columns from users table where age is greater than 30', value: 'correct' }
            ],
            correctAnswer: 'correct'
        },
        { // question 8
            question: 'What is the main purpose of the git commit command?',
            options: [
                { answer: 'Save changes to a remote repository', value: 'incorrect' },
                { answer: 'Initialize a new Git repository', value: 'incorrect' },
                { answer: 'Record changes to the local repository', value: 'correct' },
                { answer: 'Switch branches in a repository', value: 'incorrect' }
            ],
            correctAnswer: 'correct'
        },
        { // question 9
            question: 'What does the term “inheritance” mean in object-oriented programming?',
            options: [
                { answer: 'Creating a new module from an existing module', value: 'incorrect' },
                { answer: 'Creating a new variable from an existing variable', value: 'incorrect' },
                { answer: 'Creating a new function from an existing function', value: 'incorrect' },
                { answer: 'Creating a new class from an existing class', value: 'correct' }
            ],
            correctAnswer: 'correct'
        },
        { // question 10
            question: 'Which HTTP method is used to update data on a server?',
            options: [
                { answer: 'GET', value: 'incorrect' },
                { answer: 'POST', value: 'incorrect' },
                { answer: 'PUT', value: 'correct' },
                { answer: 'DELETE', value: 'incorrect' }
            ],
            correctAnswer: 'correct'
        },
    ];
    const beginnerCourses = [
        { name: 'Introduction to Programming', url: 'https://www.youtube.com/watch?v=rfscVS0vtbw' },
        { name: 'Basics of Web Development', url: 'https://www.youtube.com/watch?v=UB1O30fR-EE' }
    ];

    const intermediateCourses = [
        { name: 'Intermediate Python Programming', url: 'https://www.youtube.com/watch?v=HGOBQPFzWKo' },
        { name: 'Web Development with HTML, CSS, and JavaScript', url: 'https://www.youtube.com/watch?v=mU6anWqZJcc' }
    ];

    const advancedCourses = [
        { name: 'Advanced Algorithms and Data Structures', url: 'https://www.youtube.com/watch?v=RBSGKlAvoiM' },
        { name: 'Full-Stack Web Development with React and Node.js', url: 'https://www.youtube.com/watch?v=DLX62G4lc44' }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizComplete, setQuizComplete] = useState(false);

    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        // Move to the next question or end the quiz
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizComplete(true);
        }
    };
    const getCourses = () => {
        if (score <= 3) {
            return beginnerCourses;
        } else if (score <= 7) {
            return intermediateCourses;
        } else {
            return advancedCourses;
        }
    };

    const renderQuiz = () => {
        if (quizComplete) {
            const courses = getCourses();
            return (
                <div className="quiz-container text-center p-4">
                    <h1 className="text-3xl font-bold mb-4 text-blue-950">Quiz Complete!</h1>
                    <p className="text-xl text-blue-950">Your score is: {score}</p>
                    <h2 className="text-2xl font-bold mt-4 text-blue-950">Click on Your Recommended Courses:</h2>
                    <ul className="list-disc list-inside mt-4">
                        {courses.map((course, index) => (
                            <li key={index} className="text-lg">
                                <a href={course.url} target="_blank" rel="noopener noreferrer"
                                   className="text-blue-950 hover:underline">
                                    {course.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

        return (
            <div className="quiz-container flex flex-col justify-center items-center">
                <h1 className="text-2xl text-blue-950 font-bold mb-4 drop-shadow rounded-lg p-2 w-full
                text-center">Question {currentQuestion + 1}</h1>
                <p className="text-lg text-blue-950 drop-shadow mb-4 w-full text-center">{questions[currentQuestion].question}</p>
                <div className="CardGrid w-full h-full p-4 flex flex-col justify-center items-center gap-4">
                    <div className="CardGrid p-4 flex flex-wrap justify-center items-center gap-4">
                        {questions[currentQuestion].options.map((option, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-48 p-4 bg-blue-950 rounded-lg flex justify-center items-center
                                cursor-pointer hover:bg-transparent duration-300"
                                onClick={() => handleAnswer(option.value)}
                            >
                                <div className="TextHeading text-purple-50 font-bold text-center">
                                    {option.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        <Lottie animationData={animationData} style={{width: 300, height: 300}}/>
                    </div>
                </div>
            </div>

        );
    };

    return (
        <div className="flex quiz-container gradient-bg items-center justify-center h-[80vh]">
        {renderQuiz()}
        </div>
    );
}

export default Quiz;
