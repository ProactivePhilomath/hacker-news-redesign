import { BASE_API_URL } from '../../../const'
import type { Id, UnixMilliseconds } from '../../../types'
import type { Story } from '../../../types'

interface ApiStory {
    id: Id
    by: string
    descendants: number
    kids?: Array<Id>
    score: number
    time: UnixMilliseconds
    title: string
    type: 'story'
    url: string
}

const mapApiStoryToStory = ({ id, by, time, kids, score, title, url }: ApiStory): Story => ({
    id,
    author: by,
    created: time * 1000,
    numberOfComments: kids?.length ?? 0,
    score,
    title,
    source: url
})

export const fetchStory = async (id: number): Promise<Story> => {
    const url = `${BASE_API_URL}/item/${id}.json`
    const response = await fetch(url)
    const json = await response.json() as ApiStory
    return mapApiStoryToStory(json)
}