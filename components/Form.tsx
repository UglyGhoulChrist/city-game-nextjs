'use client'

import styles from '@/components/Form.module.css'
import { useState } from 'react'

function Form({ handleForm }: any) {

    const [text, setText] = useState('')

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        // Отменяю действие формы по умолчанию
        event.preventDefault()
        // Отправляю текст формы в page.tsx
        handleForm(text)
        // Очищаю input
        setText('')
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}
            autoComplete='off'>
            <input
                className={styles.input}
                placeholder='Введите город'
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                name='input'
            />
        </form>
    )
}

export default Form