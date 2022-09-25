import React from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectStoryIds } from '../../store/slices/storyIds/selector'
import { requestStoryIds } from '../../store/slices/storyIds/slice'
import { selectStories } from '../../store/slices/stories/selector'
import { requestStory } from '../../store/slices/stories/slice'

const INITIAL_NUMBER_OF_STORIES_TO_LOAD = 12

export function Stories() {
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

    return (
        <div>
            {Object.values(stories)
                .sort(({ created: createdA }, { created: createdB }) => createdB - createdA)
                .map(({ id, title }) => <p key={id}>{title}</p>)
            }
        </div>
    )
}