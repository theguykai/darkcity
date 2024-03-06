import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div>
      <section id="home-section">
        <div
          id="video-blocker"
          className="absolute h-screen w-screen opacity-0"
        ></div>
        <ReactPlayer
          id="video"
          height="100vh"
          width="100vw"
          playing
          volume={"0"}
          muted={"true"}
          loop={"true"}
          previewTabIndex={"0"}
          url="https://youtu.be/GFLGUMX6rOo?si=b4ZkrJfFvkIjmwY2"
          config={{
            youtube: {
              playerVars: {
                controls: 0,
                disablekb: 1,
                fs: 0,
                start: 5,
                end: 63,
              },
            },
          }}
        ></ReactPlayer>
      </section>
    </div>
  );
};
export default Video;
