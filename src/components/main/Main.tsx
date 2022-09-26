import React from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectRecentStoryIds, selectSavedStoryIds } from '../../store/slices/storyIds/selector'
import { requestStoryIds, toggleSaveId } from '../../store/slices/storyIds/slice'
import { selectStories } from '../../store/slices/stories/selector'
import { requestStory } from '../../store/slices/stories/slice'

import './Main.css'
import { Stories } from './stories/Stories'

const INITIAL_NUMBER_OF_STORIES_TO_LOAD = 10
const NUMBER_OF_STORIES_INCREMENT = 5

export function Main() {
    const dispatch = useAppDispatch()
    const recentStoryIds = useAppSelector(selectRecentStoryIds)
    const savedStoryIds = useAppSelector(selectSavedStoryIds)
    const stories = useAppSelector(selectStories)

    const [numberOfStories, setNumberOfStories] = React.useState(INITIAL_NUMBER_OF_STORIES_TO_LOAD)

    React.useEffect(() => {
        dispatch(requestStoryIds())
    }, [dispatch])

    const numberOfLoadedStories = Object.keys(stories).length
    React.useEffect(() => {
        if (numberOfStories > numberOfLoadedStories && numberOfStories <= recentStoryIds.length) {
            dispatch(requestStory(recentStoryIds[numberOfLoadedStories]))
        }
    }, [dispatch, numberOfStories, numberOfLoadedStories, recentStoryIds])

    const increaseNumberOfStories = React.useCallback(() => {
        setNumberOfStories(numberOfStories + NUMBER_OF_STORIES_INCREMENT)
    }, [numberOfStories])

    const onSaveClicked = React.useCallback((id: number) => {
        dispatch(toggleSaveId(id))
    }, [dispatch])

    return (
        <main>
            <Stories
                onSaveClicked={onSaveClicked}
                stories={Object.values(stories)}
                savedStoryIds={savedStoryIds}
            />
            <button className="Main-showMore-button" onClick={increaseNumberOfStories}>show more</button>
        </main>
    )
}