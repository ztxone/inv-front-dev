import { getStrapiMedia } from "lib/media";
import React, { useRef, useState } from "react";

export const VideoPlayer = ({ poster, videofile, small = false }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div onClick={handlePlay} className="w-full h-full">
      <video
        ref={videoRef}
        poster={getStrapiMedia(poster)}
        controls
        className={small ? "w-[266px] h-[151px]" : "w-full h-full"}
      >
        <source src={getStrapiMedia(videofile)} type="video/mp4" />
        <p>
          Ваш браузер не поддерживает встроенные видео. Попробуйте скачать его
          по
          <a href="#">этой ссылке</a>.
        </p>
      </video>
      {small ? (
        <div
          className={`absolute top-1/2 left-1/2 -translate-y-5 -translate-x-2
          ${small ? "" : "md:-translate-y-10 md:-translate-x-5"}
        `}
        >
          <svg
            viewBox="0 0 36 43"
            className={`w-[36px] h-[43px] cursor-pointer ${
              small ? "" : "md:w-[86px] md:h-[86px]"
            } `}
          >
            <path
              d="M33.4217 17.2697C36.5342 19.231 36.5342 23.7688 33.4217 25.7301L7.85702 41.8395C4.52747 43.9376 0.191389 41.5448 0.191389 37.6093L0.19139 5.39047C0.191391 1.45501 4.52746 -0.937803 7.85701 1.16029L33.4217 17.2697Z"
              fill="white"
            />
          </svg>
        </div>
      ) : (
        !isPlaying && (
          <div
            className={`absolute top-1/2 left-1/2 -translate-y-5 -translate-x-2
          ${small ? "" : "md:-translate-y-10 md:-translate-x-5"}
        `}
          >
            <svg
              viewBox="0 0 36 43"
              className={`w-[36px] h-[43px] cursor-pointer ${
                small ? "" : "md:w-[86px] md:h-[86px]"
              } `}
            >
              <path
                d="M33.4217 17.2697C36.5342 19.231 36.5342 23.7688 33.4217 25.7301L7.85702 41.8395C4.52747 43.9376 0.191389 41.5448 0.191389 37.6093L0.19139 5.39047C0.191391 1.45501 4.52746 -0.937803 7.85701 1.16029L33.4217 17.2697Z"
                fill="white"
              />
            </svg>
          </div>
        )
      )}
    </div>
  );
};
