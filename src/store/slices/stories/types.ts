import type { UnixMilliseconds } from "../../types"

export interface Story {
    id: number
    author: string
    created: UnixMilliseconds
    numberOfComments: number
    score: number
    title: string
}