import styles from '@/components/Move.module.css'

import { IMove } from '@/type-interface/type-interface'

import { clsx } from 'clsx'

function Move({ id, player, message }: IMove) {

    const classes = `item_${player}`

    return (
        <li className={
            clsx(styles.item, styles[classes])
        }>
            <span className={styles.counter}>{id}</span>
            &emsp;
            <span className={styles.player}>{player}</span>
            &emsp;
            <span className={styles.city}>{message}</span>
        </li>
    )
}

export default Move