import React from 'react'

import { formatUnixTimestamp } from '../../../utils'
import './Story.css'

export interface StoryProps {
    id: number
    author: string
    created: number
    index: number
    numberOfComments: number
    score: number
    source: string
    title: string
}

// TODO: Starring
export const Story: React.FunctionComponent<StoryProps> = ({
    id,
    author,
    created,
    index,
    numberOfComments,
    score,
    source,
    title
}) => {
    const formattedSource = source?.replace(/.+\/\/|www.|\/.+/g, '')
    const formattedCreationDate = formatUnixTimestamp(created)

    return (
        <li className="Story"key={id}>
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
                    {`${score} points by ${author} ${formattedCreationDate} | ${numberOfComments} ${numberOfComments === 1 ? 'comment' : 'comments'}`}
                </p>
            </div>
        </li>
    )
}