import React from "react";
import { IoMenu } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
const HeroSection = () => {
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handleIntroPlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  const handleIntroPause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Optional: reset audio to the beginning
    }
  };

  return (
    <section className=' relative bg-amber-500'>
      <nav className='flex justify-between items-start p-2'>
        <div className='w-28 sm:w-40 md:w-60 lg:w-72'>
          <img
            src='/assets/mentoons-logo.png'
            alt='Mentoons Logo'
            className='w-full object-cover'
          />
        </div>
        <div className='flex items-center justify-center gap-3'>
          <div className=' text-white items-center justify-center gap-2 text-xs sm:text-sm md:text-base  md:flex  animate-blink'>
            <span className='flex items-center justify-center gap-1 whitespace-nowrap'>
              <LuPhoneCall fill='white' />
              Call us <a href='tel:7892858593'>7892858593</a>
            </span>
            <span className='flex items-center justify-center gap-1 '>
              <MdEmail />
              <a href='mailto:metalmahesh@gmail.com'>metalmahesh@gmail.com</a>
            </span>
          </div>
          <div className='text-lg sm:text-2xl border-[1.5px] border-white rounded-[4px] hover:scale-110 transition-all duration-300 mt-1 mr-1  '>
            <IoMenu color='white' />
          </div>
        </div>
      </nav>
      <audio autoPlay>
        <source src='mentoons-intro-audio.mp3' />
      </audio>
      {/* Hero Section */}
      <div className='relative '>
        <div className='absolute  left-1/2 -translate-x-1/2 top-2 w-28  min-w-[180px] md:w-80 lg:w-[600px] '>
          <img src='/assets/podcast-logo.png' alt='Podcast logo' />
        </div>

        {/* Play button */}
        <div className='  absolute bottom-4 left-1/2   -translate-x-1/2 w-20  flex gap-2 md:w-24   md:bottom-8 z-50 lg:w-48 lg:bottom-10'>
          <div
            className=' hover:scale-110 transition-all duration-300'
            onClick={handleIntroPlay}
          >
            <img
              src='/assets/play.png'
              alt='Play Button'
              className='w-full object-cover'
            />{" "}
            <audio
              ref={audioRef}
              src='/assets/audios/mentoons-intro-audio.mp3'
            ></audio>
          </div>
          <div
            className='hover:scale-110 transition-all duration-300'
            onClick={handleIntroPause}
          >
            <img
              src='/assets/pause.png'
              alt='Pasue Button'
              className='w-full object-cover'
            />
            <audio
              ref={audioRef}
              src='/assets/audios/mentoons-intro-audio.mp3'
            ></audio>
          </div>
        </div>

        {/* Hero Image */}
        <div className='relative'>
          <img
            src='/assets/podcast-hero.png'
            alt='Podcast hero Image'
            className='w-full object-cover  '
          />

          {/* Radio */}
          <div className=' absolute w-20 md:w-32 bottom-4 left-4  md:left-10 md:bottom-6 z-50 lg:w-60 '>
            <img
              src='/assets/radio.png'
              alt='Radio Illustration'
              className='w-full object-cover '
            />
            <div className='absolute bottom-8 sm:bottom-8 left-2 '>
              {/* Music Note Div */}
              <div className='flex sm:gap-8 justify-end '>
                <div className=' w-4 rotate-12  md:w-12  '>
                  <img src='/assets/music-note-3.png' alt='Music Notes' />
                </div>
                <div className=' w-4  md:w-9 flex items-center  '>
                  <img src='/assets/music-note-2.png' alt='Music Notes' />
                </div>
                <div className=' w-4 flex items-end  md:w-6 '>
                  <img
                    src='/assets/music-note-1.png'
                    alt='Music Notes'
                    className='w-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
