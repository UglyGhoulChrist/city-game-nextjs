import { Player, IMove } from '@/type-interface/type-interface'

// Счётчик
let id: number = 9

/** Функция приводит имя города в вид:
 * первые буквы имени переводит в верхний регистр
 */

function normalizeNameCity(city: string): string {
    return city.replace(/( |^|-)[а-яёa-z]/g, function (x) { return x.toUpperCase() })
}

/** Функция приводит имя города в вид:
 * удаляет пробелы в начале и в конце названия,
 * несколько пробелов между словами заменяет на один,
 * заменяет букву ё на е,
 * переводит в нижний регистр
 */
function lowerCaseTrimReplaceNameCity(city: string): string {
    return city.replace(/^\s+|\s+$/g, '').toLowerCase().replace('ё', 'е')
}

// Функция достаёт последнюю букву, если её нет возвращает ''
function getLastChar(city: string): string {
    const wrongChar: string[] = ['ъ', 'ь', 'ы', 'й']
    const reverseArrayCity: string[] = city.toLowerCase().split('').reverse()
    const lastChar = reverseArrayCity.find(elem => !wrongChar.includes(elem)) || ''
    return lastChar
}

// Функция получения результата хода
function getResultMove(player: Player, message: string): IMove {

    id = id + 1
    const result: IMove = {
        id,
        player,
        message
    }

    return result
}

export { normalizeNameCity, lowerCaseTrimReplaceNameCity, getLastChar, getResultMove }