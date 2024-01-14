import { IMove } from '@/type-interface/type-interface'

const arrayMovies: IMove[] = [
    { id: 0, player: 'service', message: 'Назовите город на любую букву', },
    { id: 1, player: 'user', message: 'Москва', },
    { id: 2, player: 'computer', message: 'Анапа', },
    { id: 3, player: 'user', message: 'Анапа', },
    { id: 4, player: 'service', message: 'Такой город уже называли', },
    { id: 5, player: 'user', message: 'Сыктывкар', },
    { id: 6, player: 'service', message: 'Город должен начинаться с А', },
    { id: 7, player: 'user', message: 'Арзамас', },
    { id: 8, player: 'computer', message: 'Севастополь', },
]

// Функция получения фейковых результатов ходов
function move(city: string): IMove[] {
    return arrayMovies
}

export { move }
