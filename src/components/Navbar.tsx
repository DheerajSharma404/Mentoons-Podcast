import { useMediaQuery } from "react-responsive";
import { LEFT_NAVLINKS, RIGHT_NAVLINKS } from "../constant";
const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    //   <nav
    //     className='flex
    //  items-start md:items-center justify-start gap-12  text-white'
    //   >
    //     <ul className='flex items-center gap-12 text-font-14'>
    //       <li className='hover:text-white cursor-pointer border border-transparent hover:border hover:border-white/10 px-4 py-1 rounded-full hover:bg-white/30 transition-all duration-300 ease-ou'>
    //         Home
    //       </li>
    //       <li className='hover:text-white cursor-pointer border border-transparent hover:border hover:border-white/10 px-4 py-1 rounded-full hover:bg-white/30 transition-all duration-300 ease-ou'>
    //         PodCast
    //       </li>
    //     </ul>
    //     <div className='w-28 p-2 '>
    //       <img
    //         src='/assets/images/mentoons-logo.png'
    //         alt='Logo'
    //         className='w-full object-cover'
    //       />
    //     </div>
    //     <ul className='flex items-center gap-12 whitespace-nowrap text-font-14'>
    //       <li className='hover:text-white cursor-pointer border border-transparent hover:border hover:border-white/10 px-4 py-1 rounded-full hover:bg-white/30 transition-all duration-300 ease-out '>
    //         How it works
    //       </li>
    //       <li className='hover:text-white cursor-pointer border border-transparent hover:border hover:border-white/10 px-4 py-1 rounded-full hover:bg-white/30 transition-all duration-300 ease-ou'>
    //         Contact Us
    //       </li>
    //     </ul>
    //     :(
    //     <ul className='flex items-center gap-12 text-font-14'>
    //       <li className='hover:text-white cursor-pointer border border-transparent hover:border hover:border-white/10 px-4 py-1 rounded-full hover:bg-white/30 transition-all duration-300 ease-ou'>
    //         Home
    //       </li>
    //       <li className='hover:text-white cursor-pointer border border-transparent hover:border hover:border-white/10 px-4 py-1 rounded-full hover:bg-white/30 transition-all duration-300 ease-ou'>
    //         PodCast
    //       </li>
    //       <li className='hover:text-white cursor-pointer border border-transparent hover:border hover:border-white/10 px-4 py-1 rounded-full hover:bg-white/30 transition-all duration-300 ease-out '>
    //         How it works
    //       </li>
    //       <li className='hover:text-white cursor-pointer border border-transparent hover:border hover:border-white/10 px-4 py-1 rounded-full hover:bg-white/30 transition-all duration-300 ease-ou'>
    //         Contact Us
    //       </li>
    //     </ul>
    //     )
    //   </nav>

    !isMobile ? (
      <div className=' bg-[#EC9601]'>
        <nav className='flex items-center justify-center py-8 gap-56 text-white relative  '>
          <ul className='flex items-center justify-center gap-12 text-xl poppins-medium whitespace-nowrap'>
            {LEFT_NAVLINKS.map((linkItem) => {
              return (
                <li key={linkItem.id} className=''>
                  {linkItem.label}
                </li>
              );
            })}
          </ul>
          <ul className='flex items-center justify-center text-xl gap-12 poppins-medium whitespace-nowrap'>
            {RIGHT_NAVLINKS.map((linkItem) => {
              return (
                <li key={linkItem.id} className='hover:bg-orange'>
                  {linkItem.label}
                </li>
              );
            })}
          </ul>
          <div className='w-40  h-30   bg-[#EC9601]  rounded-br-full rounded-bl-full absolute top-0  left-1/2 -translate-x-1/2 inline-flex items-center py-8 '>
            <img
              src='/assets/images/mentoons-logo.png'
              alt='logo'
              className='w-full object-cover '
            />
          </div>
        </nav>
      </div>
    ) : (
      <div className=' bg-[#EC9601]'>
        <nav className='flex items-cneter justify-between  text-white relative  '>
          <div className='w-40 bg-[#EC9601]  rounded-br-full rounded-bl-full  -flex items-start   '>
            <img
              src='/assets/images/mentoons-logo.png'
              alt='logo'
              className='w-full object-cover '
            />
          </div>
          <div>
            <img src='/assets/images/menu' alt='' />
          </div>
        </nav>
      </div>
    )
  );
};

export default Navbar;
