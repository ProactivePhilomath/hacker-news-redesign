import React from 'react'

import type { Story } from '../../../types'
import { Story as StoryComponent } from './story/Story'
import './Stories.css'

export interface StoriesProps {
    emptyMessage?: string
    onSaveClicked: (id: number) => void
    stories: Array<Story>,
    savedStoryIds: Array<number>
}

export const Stories: React.FunctionComponent<StoriesProps> = ({
    emptyMessage,
    onSaveClicked,
    stories,
    savedStoryIds
}) => {
    if (emptyMessage && stories.length === 0) {
        return <p className="Stories-emptymessage">{emptyMessage}</p>
    }

    return (
        <ol className="Stories">
                {stories
                    .sort(({ created: createdA }, { created: createdB }) => createdB - createdA)
                    .map(({ id, author, created, numberOfComments, score, source, title }, index) => (
                        <React.Fragment key={id}>
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
                        </React.Fragment>
                    ))
                }
            </ol>
    )
}