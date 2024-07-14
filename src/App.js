import React from 'react';
import Layout from './Layout';
import CourseRecommender from './CourseRecommender';
import Quiz from './Quiz';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<CourseRecommender />} />
                    <Route path="/quiz" element={<Quiz />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
