import styles from './styles.module.scss';
import {BsTwitter} from 'react-icons/bs'

export default function Footer() {
  function handleRedirect(url: string) {
      window.open(url);
  }
;
  function handleScrollTop() {
      window.scroll({
          top: 0,
          behavior: 'smooth'
      })
  }

  return (
      <footer className={styles.footer}>
          <div className={styles.container}>

              <button type="button" onClick={handleScrollTop}>
                  voltar ao topo
              </button>

              <section>
            
              </section>

          </div>
      </footer>
  )
  };