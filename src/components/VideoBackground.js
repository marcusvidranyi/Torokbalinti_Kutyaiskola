import { useState, useRef } from "react";

const VideoBackground = ({dogVideo, placeHolderPicture, categoryTitle}) => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);
  const [videoStarted, setVideoStarted] = useState(false);

  console.log(window.innerWidth)

  const handleMouseEnter = () => {
    setIsHovering(true);
    setVideoStarted(true);
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '33.33333333333333333333333333vw',
        height: '100%',
        overflow: 'hidden',
        border: "none",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {videoStarted && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${placeHolderPicture})`,
            backgroundSize: 'cover',
            backgroundPosition: "center",
            opacity: "0.54",
            
          }}
        ></div>
      )}
      <video
        ref={videoRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isHovering ? 1 : 0,
        }}
        loop
        muted
        onCanPlayThrough={() => setVideoStarted(true)}
      >
        <source src={dogVideo} type="video/mp4" />
      </video>
      <h1
        style={{
          fontSize: "2vw",
          position: 'absolute',
          bottom: '5%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          opacity: 1,
          zIndex: 1,
        }}
      >
      {categoryTitle}
      </h1>
    </div>
  );
}

export default VideoBackground