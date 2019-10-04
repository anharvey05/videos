import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    //Loops through each video, returns a list of VideoItem objects
    //Saved to renderedList
    const renderedList = videos.map((video) => {
        return <VideoItem video={video} />;
    });

    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;