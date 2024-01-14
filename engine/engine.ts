import listCities from '@/engine/cities.json'
import { normalizeNameCity, lowerCaseTrimReplaceNameCity, getLastChar, getResultMove } from '@/engine/function'
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
    { id: 9, player: 'service', message: 'Это пример игры!!!', },
]

// Функция получения стартовых результатов ходов
function startMovies(): IMove[] {
    return arrayMovies
}


// Функция поиска города компьютером на нужную букву
function findCity(char: string): string {

    let randomCity: string

    for (let index = 0; index < 50; index++) {
        randomCity = listCities[Math.floor(Math.random() * listCities.length)]
        if (randomCity[0].toLowerCase() === char.toLowerCase()) return randomCity
    }
    return ''
}

// Список всех городов
const arrayCities: string[] = listCities.map(city => lowerCaseTrimReplaceNameCity(city))

// Список названных городов
const arrayNamedCities: string[] = []

// Список оставшихся городов
const arrayRemainingCities: string[] = structuredClone(arrayCities)

// Стартовая буква
let char: string

function move(city: string): IMove[] {

    // Ход User
    const userCity = lowerCaseTrimReplaceNameCity(city)

    const resultUser = getResultMove('user', normalizeNameCity(userCity))

    // Город не начинается на нужную букву
    if (char && userCity[0] !== char) {
        const resultService = getResultMove('service', `Город должен начинаться с ${char.toUpperCase()}`)
        return [resultUser, resultService]
    }

    // Города такого нет
    if (!arrayCities.includes(userCity)) {
        const resultService = getResultMove('service', 'Я такой город не знаю')
        return [resultUser, resultService]
    }

    // Город уже называли
    if (arrayNamedCities.includes(userCity)) {
        const resultService = getResultMove('service', 'Этот город уже назвали')
        return [resultUser, resultService]
    }

    // Город пользователя зачтён !!! Добавляю город в список названных городов
    arrayNamedCities.push(userCity)

    // Убираю город из списка оставшихся городов
    const indexUserCity = arrayRemainingCities.findIndex((el) => el === userCity)
    arrayRemainingCities.splice(indexUserCity, 1)

    // Получаю последнюю букву
    char = getLastChar(userCity)
    if (!char) {
        const resultService = getResultMove('service', 'В последнем городе нет букв отличных от ъ, Ъ, ь, Ь, ы, Ы, й, Й')
        return [resultUser, resultService]
    }

    // Ход Computer 
    const computerCity: string = lowerCaseTrimReplaceNameCity(findCity(char))

    if (!computerCity) {
        const resultService = getResultMove('service', 'Computer сдаётся. Вы выиграли!')
        return [resultUser, resultService]
    }

    // Город компьютером найден !!! Добавляю город в список названных городов
    arrayNamedCities.push(computerCity)

    // Убираю город из списка оставшихся городов
    const indexComputerCity = arrayRemainingCities.findIndex((el) => el === computerCity)
    arrayRemainingCities.splice(indexComputerCity, 1)

    // Получаю последнюю букву
    char = getLastChar(computerCity)
    if (!char) {
        const resultService = getResultMove('service', 'В последнем городе нет букв отличных от ъ, Ъ, ь, Ь, ы, Ы, й, Й')
        return [resultUser, resultService]
    }

    const resultComputer = getResultMove('computer', normalizeNameCity(computerCity))

    return [resultUser, resultComputer]
}

export { startMovies, move }