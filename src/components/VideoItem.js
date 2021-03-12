import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video }) => {
    console.log(video);

    return (
        <div className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.id.videoId} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;