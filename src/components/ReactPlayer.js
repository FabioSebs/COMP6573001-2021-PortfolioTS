import React from 'react'
import ReactPlayer from 'react-player'
import '../styles/reactplayer.scss'

export const ResponsivePlayer = ({ url }) => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={url}
                controls={true}
                width='100%'
                height='100%'
            />
        </div>
    )
}