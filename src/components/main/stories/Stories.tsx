import React from 'react'

import type { Story } from '../../../store/slices/stories/types'
import { Story as StoryComponent } from './story/Story'
import './Stories.css'

export interface StoriesProps {
    onSaveClicked: (id: number) => void
    stories: Array<Story>,
    savedStoryIds: Array<number>
}

export const Stories: React.FunctionComponent<StoriesProps> = ({
    onSaveClicked,
    stories,
    savedStoryIds
}) => {
    return (
        <ol className="Stories">
                {stories
                    .sort(({ created: createdA }, { created: createdB }) => createdB - createdA)
                    .map(({ id, author, created, numberOfComments, score, source, title }, index) => (
                        <StoryComponent
                            id={id}
                            author={author}
                            created={created}
                            index={index + 1}
                            numberOfComments={numberOfComments}
                            onSave={onSaveClicked}
                            saved={savedStoryIds.includes(id)}
                            score={score}
                            source={source}
                            title={title}
                        />
                    ))
                }
            </ol>
    )
}