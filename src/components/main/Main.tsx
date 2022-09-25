import React from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectStoryIds } from '../../store/slices/storyIds/selector'
import { requestStoryIds } from '../../store/slices/storyIds/slice'
import { selectStories } from '../../store/slices/stories/selector'
import { requestStory } from '../../store/slices/stories/slice'
import { Story } from './story/Story'
import './Main.css'

const INITIAL_NUMBER_OF_STORIES_TO_LOAD = 12
const NUMBER_OF_STORIES_INCREMENT = 4

export function Main() {
    const dispatch = useAppDispatch()
    const storyIds = useAppSelector(selectStoryIds)
    const stories = useAppSelector(selectStories)

    const [numberOfStories, setNumberOfStories] = React.useState(INITIAL_NUMBER_OF_STORIES_TO_LOAD) // eslint-disable-line @typescript-eslint/no-unused-vars

    React.useEffect(() => {
        dispatch(requestStoryIds())
    }, [dispatch])

    const numberOfLoadedStories = Object.keys(stories).length
    React.useEffect(() => {
        if (numberOfStories > numberOfLoadedStories && numberOfStories <= storyIds.length) {
            dispatch(requestStory(storyIds[numberOfLoadedStories]))
        }
    }, [dispatch, numberOfStories, numberOfLoadedStories, storyIds])

    const increaseNumberOfStories = React.useCallback(() => {
        setNumberOfStories(numberOfStories + NUMBER_OF_STORIES_INCREMENT)
    }, [numberOfStories])

    return (
        <main>
            <ol className="Main-stories">
                {Object.values(stories)
                    .sort(({ created: createdA }, { created: createdB }) => createdB - createdA)
                    .map(({ id, author, created, numberOfComments, score, source, title }, index) => (
                        <Story
                            id={id}
                            author={author}
                            created={created}
                            index={index + 1}
                            numberOfComments={numberOfComments}
                            score={score}
                            source={source}
                            title={title}
                        />
                    ))
                }
            </ol>

            <button className="Main-showMore-button" onClick={increaseNumberOfStories}>show more</button>
        </main>
    )
}