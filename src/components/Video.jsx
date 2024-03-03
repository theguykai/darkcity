import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div>
      <section>
        <ReactPlayer
          id="video"
          height="100vh"
          width="100vw"
          playing
          muted={"true"}
          loop={"true"}
          previewTabIndex={"0"}
          // wrapper={"true"}
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
