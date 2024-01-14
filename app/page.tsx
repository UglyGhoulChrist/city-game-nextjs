'use client'

import styles from '@/app/page.module.css'
import ListMovies from '@/components/ListMovies'
import Form from '@/components/Form'
import { useState } from 'react'

import { startMovies, move } from '@/engine/engine'

import { IMove } from '@/type-interface/type-interface'

const arrayMovies: IMove[] = startMovies()

function Game() {

    const [listMovies, setListMovies] = useState(arrayMovies)

    function handleInputCity(inputCity: string): void {

        // Ход
        const answerMove = move(inputCity)
        setListMovies([...listMovies.concat(answerMove)])
    }

    return (
        <main className={styles.main}>
            <ListMovies listMovies={listMovies} />
            <Form handleForm={handleInputCity} />
        </main>
    )
}

export default Game