import React, { useState } from 'react';
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
//https://www.youtube.com/watch?v=08oWSkFQUF0
const voiceCommands = (props) => {
    // On start
    recognition.onstart = () => {
        console.log('Voice is actived');
    }

    // Do something when we get a result
    recognition.onresult = (e) => {
        let current = e.resultIndex;

        let transcript = e.results[current][0].transcript;
        // let mobileRepeatBug = (current === 1 && transcript === e.results[0][0].transcript);

        // if (!mobileRepeatBug) {
        //     if (transcript === 'next' || transcript === ' next') {
        //         setCount(count + 1);
        //     }

        //     if (transcript === 'back' || transcript === ' back') {
        //         setCount(count - 1);
        //     }
        // }

        setTimeout(() => {
            recognition.start();
        }, 50);
    }

    recognition.onspeechend = () => {
        recognition.stop();
        console.log('voice stopped');
    }
}