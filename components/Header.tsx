import styles from '@/components/Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>Игра в города России</h1>
            <button className={styles.button}>Правила</button>
            <button className={styles.button}>Новая игра</button>
        </header>
    )
}

export default Header