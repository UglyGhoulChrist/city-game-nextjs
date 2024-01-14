'use client'

import styles from '@/components/Header.module.css'
import RulesGames from '@/components/RulesGames'
import { useState } from 'react'

function Header() {

    const [showRules, setShowRules] = useState(false)

    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>Игра в города России</h1>
            <button onClick={() => setShowRules(true)} className={styles.button}>Правила</button>
            <button onClick={() => alert('Ещё не сделал')} className={styles.button}>Новая игра</button>
            {showRules && <RulesGames handleButton={() => setShowRules(false)} />}
        </header>
    )
}

export default Header