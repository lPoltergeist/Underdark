import Link from 'next/link'
import { useRouter } from 'next/router'
import { ActiveLink } from '../ActiveLink'

import styles from './styles.module.scss'

export function Header() {


    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h1>underdark</h1>

                <nav>
                   <ActiveLink activeClassName={styles.active} prefetch href="/">
                   <a  className={styles.active}>Home</a>
                   </ActiveLink>
                   <ActiveLink activeClassName={styles.active} prefetch href="/posts">
                   <a  >Posts</a>
                   </ActiveLink>
                </nav>
            </div>
        </header>
    )
}