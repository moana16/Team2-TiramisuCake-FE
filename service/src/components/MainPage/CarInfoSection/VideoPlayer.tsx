import useVideoMetadata from '@/hooks/MainPage/useVideoMetaData';
import { useCarInfoContext } from '@/store/context/useCarInfoContext';
import React, { useRef, useState } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  const { state, enterFullScreen, exitFullScreen } = useCarInfoContext();

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const duration = useVideoMetadata(videoRef);

  const handlePlayPause = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleMuteUnMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const newProgress = (offsetX / rect.width) * videoRef.current.duration;
      videoRef.current.currentTime = newProgress;
      setProgress(newProgress);
    }
  };

  return (
    <>
      <div
        className={`w-screen min-h-screen absolute top-0 cursor-pointer flex justify-center  ${state.isFullScreen ? 'bg-[#00000033] items-center -mr-[200px]' : 'bg-transparent'}`}
      >
        <div
          className={`z-20  ${state.isFullScreen ? 'absolute w-[1184px] h-[638px] mx-auto left-1/2 -translate-x-1/2' : 'translate-x-custom-1 transform w-[784px] h-[422px] mt-[313px] '}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video
            ref={videoRef}
            src={videoUrl}
            typeof='video/mp4'
            className='w-full h-full object-fill'
            autoPlay
            muted
            loop
            onTimeUpdate={() => {
              if (videoRef.current) {
                setProgress(videoRef.current.currentTime);
              }
            }}
          />
          {state.isFullScreen ? (
            <img
              src='/svg/closeIcon.svg'
              className='absolute top-[-64px] right-0 z-30 cursor-pointer'
              onClick={exitFullScreen}
              alt='close fullscreen button'
            />
          ) : (
            <div className='flex gap-2 absolute top-12 right-12 z-30'>
              <img
                onClick={handleMuteUnMute}
                alt='sound on-off button'
                src={isMuted ? 'svg/sound-off.svg' : 'svg/sound-on.svg'}
                width={32}
                height={33}
              />
              <img
                onClick={enterFullScreen}
                src='svg/full.svg'
                alt='full screen button'
                width={32}
                height={33}
              />
            </div>
          )}
          {isHovered && (
            <>
              <img
                onClick={handlePlayPause}
                alt='play-pause button'
                src={isPlaying ? '/svg/stop.svg' : '/svg/play.svg'}
                className='absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-[56px] h-[76px]'
              />
              {state.isFullScreen && (
                <>
                  <div className='absolute w-full bottom-[-8px] z-30 flex flex-col gap-2 items-end text-white'>
                    <div className='flex justify-between w-full px-6'>
                      <div className='flex'>
                        <span>
                          {Math.floor(progress / 60)}:
                          {Math.floor(progress % 60)
                            .toString()
                            .padStart(2, '0')}
                        </span>
                        <span className='mx-1'> / </span>
                        <span>
                          {Math.floor(duration / 60)}:
                          {Math.floor(duration % 60)
                            .toString()
                            .padStart(2, '0')}
                        </span>
                      </div>
                      <img
                        onClick={handleMuteUnMute}
                        alt='sound on-off button'
                        src={
                          isMuted
                            ? '/svg/sound-off-icon.svg'
                            : '/svg/sound-on-icon.svg'
                        }
                      />
                    </div>

                    <div className='w-full flex items-center'>
                      <div
                        className='relative w-full h-2 bg-white cursor-pointer'
                        onClick={handleProgressClick}
                      >
                        <div
                          className='absolute top-0 left-0 h-full bg-primary'
                          style={{ width: `${(progress / duration) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
