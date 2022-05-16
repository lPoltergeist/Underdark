import {Chat} from 'phosphor-react';
import { useState } from 'react';
import { db } from '../../service/firebase';

import styles from './styles.module.scss'


export default function Widget() {
const [isWidgetOpen, setIsWidgetOpen] = useState(false);
const [isFeedbackSend, setFeedbackSend] = useState(true);
const [textareaValue, setTextAreaValue] = useState("Como podemos subir de nível?")
const [textValue, setTextValue] = useState();

const saveFeedback = (event) => {
    event.preventDefault();

    const elementsArray = [...event.target.elements];

    console.log(elementsArray);

    const formData = elementsArray.reduce((accumulator, currentValue) => {
    if (currentValue.id === "") {
        setTextAreaValue("precisa escrever algo para enviar.");
        return;
    } else {
        accumulator[currentValue.id] = currentValue.value;

    }

    return accumulator;
    }, {});

    console.log({formData});

    if (formData === undefined){
        console.log("is empty")
        return;
    } else {
        console.log("sending")
        db.collection("Feedback").add(formData);
        setFeedbackSend(true);
    }
   
    
}

function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen)
}

function toggleFeedbackSendButton() {
    setFeedbackSend(!isFeedbackSend)
}

return (
<div className={styles.container} >
{isWidgetOpen && 
<form onSubmit={saveFeedback} className={styles.feedbackinput}>
   <textarea value={textValue} id="answer" placeholder={textareaValue} />
   {isFeedbackSend ? <button onClick={toggleFeedbackSendButton}>Enviar feedback</button> : <button onClick={toggleFeedbackSendButton} >Feedback enviado</button> }
    </form>}

    <button onClick={toggleWidgetVisibility}> <Chat/> feedback</button>
</div>
)
}