import { BASE_API_URL } from '../../../const'

export const fetchNewStoryIds = async (): Promise<Array<number>> => {
    const url = `${BASE_API_URL}/newstories.json`
    const response = await fetch(url)
    const json = await response.json()
    const newStoryIds = Array.from<number>(json)
    return newStoryIds
}
