
import Form from "./form";

import styles from './styles.module.scss';

function Feedback() {
    return (
        <section className={styles.Container}>
            
                <Form/>
                <div className={styles.border} />
        </section>
    );
};

export default Feedback;