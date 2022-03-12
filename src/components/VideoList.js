import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  //   get the list of videos from the app component and mapp through every video and pass the video to
  //   the videoItem component as a props
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
    // the videoList component passes every video object gotten from the app component to the videoItem
    // component, displaying them differently
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
