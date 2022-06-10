import { useState } from "react";
import toast from "react-hot-toast";
import { sendContactMail } from "../../service/SendMail";

import styles from "./styles.module.scss"

export default function Form(event) {

    const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [mensagem, setMensagem] = useState('');

const [loading, setLoading] = useState(false);

async function handleSubmit(event) {
    event.preventDefault();

    if (!nome || !email || !mensagem) {
        toast('Preencha todos os campos', {
        style: {
            background: '#141412',
            color: '#fff'
        }
        })
        return;
    }

try {
    setLoading(true);
await sendContactMail(nome, email, mensagem);
setNome('');
setEmail('');
setMensagem('');

toast("Feedback enviado"), {
    style: {
        background: '#f4f4f8',
        color: 'black'
    }
}
} catch (error) {
    toast("Ocorrou um erro ao enviar sua mensagem. Tente de novo."), {
        style: {
            background: 'red',
            color: '#fff'
        }
    }
} finally {
    setLoading(false);
}
}

    return (
        
        <form className={styles.FormContainer} onSubmit={handleSubmit}>
            <h1>Ajude-nos a melhorar, envie seu feedback.</h1>
            <div className={styles.FormBox}>
<input className={styles.Input} value={nome} onChange={({target}) => setNome(target.value)} placeholder="Nome"/>
<input className={styles.Input} placeholder="E-mail" type="email" value={email} onChange={({target}) => setEmail(target.value)} />
<textarea className={styles.TextArea} placeholder="Mande o seu feedback" value={mensagem} onChange={({target}) => setMensagem(target.value)} />
    <button type="submit">Enviar</button>
    </div>
        </form>
    )
}

