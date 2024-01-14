type Player = 'computer' | 'user' | 'service'

interface IMove {
    id: number,
    player: Player,
    message: string
}

export type { Player, IMove }