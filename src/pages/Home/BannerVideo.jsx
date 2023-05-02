import React from 'react';
import YouTube from 'react-youtube';


import BannerText from './BannerText'


const BannerVideo = ({ videoId }) => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      loop: 1,
      playlist: videoId,
    },
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <YouTube
          id="video-player"
          className="absolute top-0 left-0 w-full h-full"
          videoId={videoId}
          opts={opts}
        />
      </div>
      <div className="absolute inset-0 bg-gray-700 opacity-35"></div>


     <div className="absolute inset-0 flex items-center justify-center">
          <BannerText />
      </div>
    </div>
  );
};

export default BannerVideo;
