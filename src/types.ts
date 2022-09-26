export type Theme = 'light' | 'dark'

export type Id = number

export type UnixMilliseconds = number

export interface Story {
    id: number
    author: string
    created: UnixMilliseconds
    numberOfComments: number
    score: number
    source: string
    title: string
}
