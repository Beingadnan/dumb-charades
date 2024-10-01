import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { movies } from '../const';
import styles from './WelcomePage.module.css'

export default function WelcomePage({ name }) {
    const navigate = useNavigate();
    const [ans, setAns] = useState('');
    const [index, setIndex] = useState(0); 
    const [hintIndex, setHintIndex] = useState(0); 
    const [currentHint, setCurrentHint] = useState('');

    useEffect(() => {
        if (movies && movies.length > 0 && movies[index]?.hints) {
            setCurrentHint(movies[index].hints[hintIndex]);
        } 
    }, [index, hintIndex]);

    const handleSubmit = () => {

        if (ans.toLowerCase() === movies[index]?.title.toLowerCase()) {
            alert("You are correct!");
            navigate('/final'); 
        } else {
           
            if (hintIndex < (movies[index]?.hints.length - 1)) {
                setHintIndex(hintIndex + 1);
                setAns('');
            } else {
                alert("No more hints available. Try again!");
            }
        }
    };

    function handleAns(e) {
        setAns(e.target.value); 
    }

    return (
        <div className={styles.c}>
            <h1>Welcome,<span>{name}</span>!</h1>
            <h2>Guess the Movie: {currentHint}</h2>
            <h2>
                Answer: <input value={ans} onChange={handleAns} type="text" />
            </h2>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}





