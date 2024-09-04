import FrequentlyAskeQuestion from "../FAQSection/FrequentlyAskeQuestion";

const Career = () => {
  return (
    <section className='  relative'>
      {/* Testimonial */}

      <div className='w-full relative z-1006'>
        <img src='/assets/images/join_us.jpg' alt='' />
      </div>

      <div className='absolute top-52  grid md:grid-cols-2 z-1 w-full  '>
        <div className=' background-blur'></div>
        <div className='relative p-4 pl-5'>
          <video className='h-full w-full rounded-lg' controls>
            <source
              src='https://mentoons-website.s3.ap-northeast-1.amazonaws.com/experience+video/Abhishek+Testimonial.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='relative p-4 pt-0 pl-5'>
          <video className='h-full w-full rounded-lg' controls>
            <source
              src='https://mentoons-website.s3.ap-northeast-1.amazonaws.com/experience+video/Ayushi+Testimonial.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* open position is acorrdian */}
        <div className='absolute top-[105%] left-1/2 -translate-x-1/2'>
          <div className=' relative'>
            <img
              src='/assets/images/open-position-bg.svg'
              alt=''
              className='w-full '
            />
            <h1 className=' absolute  top-[30%] left-1/2 -translate-x-1/2 text-[28px] font-bold whitespace-nowrap'>
              Open position
            </h1>
          </div>
        </div>

        <div className='absolute top-[125%]'>
          <FrequentlyAskeQuestion />
        </div>
      </div>
    </section>
  );
};

export default Career;
