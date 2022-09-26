import React from 'react'
import classnames from 'classnames'

import { ReactComponent as StarIcon } from './starIcon.svg'
import { extractDomainFromUrl, formatUnixTimestamp } from '../../../../utils'
import './Story.css'

export interface StoryProps {
    id: number
    author: string
    created: number
    index: number
    numberOfComments: number
    onSave: (id: number) => void
    saved: boolean
    score: number
    source: string
    title: string
}

export const Story: React.FunctionComponent<StoryProps> = ({
    id,
    author,
    created,
    index,
    numberOfComments,
    onSave,
    saved,
    score,
    source,
    title
}) => {
    const formattedSource = extractDomainFromUrl(source)
    const formattedCreationDate = formatUnixTimestamp(created)

    const onSaveButtonClicked = React.useCallback(() => {
        onSave(id)
    }, [id, onSave])

    const starIconClassNames = classnames('Story-second-line-save-icon', {
        'Story-second-line-save-icon-saved': saved
    })

    return (
        <li className="Story">
            <div className="Story-index">
                <span>{`${index}.`}</span>
            </div>
            <div>
                <p className="Story-first-line">
                    <span className="Story-first-line-title">
                        {source ? (<a href={source}>{title}</a>) : title}
                    </span>
                    {formattedSource && <span className="Story-first-line-source">{`(${formattedSource})`}</span>}
                </p>
                <p className="Story-second-line">
                    {`${score} points by ${author} ${formattedCreationDate}}`}
                    {' | '}
                    {`${numberOfComments} ${numberOfComments === 1 ? 'comment' : 'comments'}`}
                    {' | '}
                    <span className={starIconClassNames} onClick={onSaveButtonClicked}><StarIcon /></span>
                    {` ${saved ? 'saved' : 'save'}`}
                </p>
            </div>
        </li>
    )
}