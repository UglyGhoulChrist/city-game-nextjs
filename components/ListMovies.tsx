import styles from '@/components/ListMovies.module.css'
import Move from '@/components/Move'
import { IMove } from '@/type-interface/type-interface'

type Props = {
    listMovies: IMove[]
}

function ListMovies({ listMovies }: Props) {

    return (
        <>
            <h2>Список ходов:</h2>
            <ul className={styles.list}>
                {listMovies.map((move) => (
                    <Move key={move.id} {...move} />
                ))}
            </ul>
        </>
    )
}

export default ListMovies