import styles from '@/components/RulesGames.module.css'

function RulesGames({ handleButton }: any) {
    return (
        <section className={styles.rules}>
            <h3>Правила игры:</h3>
            <p>
                Пользователь и компьютер поочерёдно называют город в России, название которого начинается на ту букву,
                которой оканчивается название предыдущего города.
                Исключения составляют названия, оканчивающиеся на «Ъ», «Ь», «Ы» и «Й»:
                в таких случаях участник называет город на предпоследнюю букву.
                Ранее названные города употреблять нельзя.
                Таймера нет, регистр ввода букв не важен, буквы «Е» и «Ё» считаются одинаковыми.
            </p>
            <h4>
                Пользователь:
            </h4>
            <p>
                Начинает игру, называя любой город. Передаёт ход компьютеру.
            </p>
            <h4>
                Компьютер:
            </h4>
            <p>
                Выбирает случайный город из списка городов и передаёт ход пользователю.
            </p>
            <button onClick={handleButton} className={styles.button}>Всё ясно</button>
        </section>
    )
}

export default RulesGames