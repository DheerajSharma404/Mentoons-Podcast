import React from "react";
import {
  FaAlignCenter,
  FaBell,
  FaCirclePause,
  FaCirclePlay,
} from "react-icons/fa6";
interface IPODCAST {
  id: number;
  topic: string;
  description: string;
  audioPodcastSampleSrc: string;
  audioPodcastSrc: string;
  thumbnail: string;
  categroy: string;
  age: string;
  author: string;
  duration: string;
}

const PodcastCardExp = ({
  podcast,
  currentlyPlaying,
  setCurrentlyPlaying,
  isSubscribed,
  setIsSubscribed,
}: {
  podcast: IPODCAST;
  currentlyPlaying: HTMLAudioElement | null;
  setCurrentlyPlaying: React.Dispatch<
    React.SetStateAction<HTMLAudioElement | null>
  >;
  isSubscribed: boolean;
  setIsSubscribed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);

  const handleSamplePlay = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    if (currentlyPlaying && currentlyPlaying !== audioRef.current) {
      setIsPlaying(false);
      currentlyPlaying.pause();
      currentlyPlaying.currentTime = 0;
    }
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
        setCurrentlyPlaying(null);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        setCurrentlyPlaying(audioRef.current);
      }
    }
  };

  const handleIsSubscribed = () => {
    setIsSubscribed(!isSubscribed);
  };
  React.useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      const handleEnded = () => {
        setIsPlaying(false);
        audioElement.currentTime = 0;
        setCurrentlyPlaying(null);
      };
      audioElement.addEventListener("ended", handleEnded);
      return () => {
        audioElement.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  React.useEffect(() => {
    const handleClickOutside = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setCurrentlyPlaying(null);
        setIsPlaying(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setCurrentlyPlaying]);
  return (
    <div className='relative  w-full border border-black-100/10 rounded-3xl backdrop-blur-3xl overflow-hidden p-6 transition-all text-black  hover:scale-105  duration-300'>
      <div className=' absolute h-full w-full top-0 left-0 bg-[#ffffff76] opacity-0  transition-all duration-300 hover:opacity-100 hover:backdrop-blur-3xl '>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   text-sm font-semibold text-center flex gap-4 items-center justify-center '>
          <button
            onClick={handleSamplePlay}
            className=' bg-amber-500  rounded-full px-4 py-2 text-white  flex gap-2 items-center justify-center whitespace-nowrap'
          >
            Play Now
            {isPlaying ? <FaCirclePause /> : <FaCirclePlay />}
            <audio
              ref={audioRef}
              src={
                isSubscribed
                  ? podcast?.audioPodcastSrc
                  : podcast?.audioPodcastSampleSrc
              }
            ></audio>
          </button>
          {!isSubscribed && (
            <button
              className=' bg-rose-600 rounded-full px-4 py-2 text-white flex items-center justify-center gap-2 whitespace-nowrap'
              onClick={handleIsSubscribed}
            >
              Subscribe
              <FaBell />
            </button>
          )}
        </div>
      </div>
      <p className='text-xl font-bold text-black mb-4 flex gap-2'>
        {podcast.topic}
        {isPlaying && (
          <span className='px-2 py-1 text-xs text-white bg-red-500 leading-tight font-medium flex gap-2 items-center justify-between rounded-full'>
            Currently Playing
            <div className='rotate-90'>
              <FaAlignCenter />
            </div>
          </span>
        )}
      </p>
      <p className='text-sm text-black mb-4 '>{podcast.description}</p>
      <div className='h-48 overflow-hidden rounded-[12px] '>
        <img
          src={podcast.thumbnail}
          alt='Podcast thumbnail'
          className='w-full object-cover'
        />
      </div>
    </div>
  );
};

export default PodcastCardExp;
