import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div>
      <section id="home" className="h-[75vh] md:h-screen md:w-screen">
        <div
          id="video-blocker"
          className="absolute h-full w-full opacity-0"
        ></div>
        <ReactPlayer
          id="video"
          playing
          height={"100%"}
          width={"100%"}
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
