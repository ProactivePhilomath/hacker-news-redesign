const MINUTE = 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

export const formatUnixTimestamp = (unixTimestamp: number): string => {
    const secondsAgo = Math.round((new Date().valueOf() - unixTimestamp) / 1000)

    if (secondsAgo > 1 * DAY) {
        const daysAgo = Math.round(secondsAgo / DAY)
        return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago` 
    } else if (secondsAgo > 1 * HOUR) {
        const hoursAgo = Math.round(secondsAgo / HOUR)
        return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago` 
    } else if (secondsAgo > 1 * MINUTE) {
        const minutesAgo = Math.round(secondsAgo / MINUTE)
        return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago` 
    } else {
        return `${secondsAgo} ${secondsAgo === 1 ? 'second' : 'seconds'} ago`
    }
}

export const extractDomainFromUrl = (url: string | undefined): string | undefined => url?.replace(/.+\/\/|www.|\/.+/g, '')
