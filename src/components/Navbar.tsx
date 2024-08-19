// import { useMediaQuery } from "react-responsive";
// import { LEFT_NAVLINKS, RIGHT_NAVLINKS } from "../constant";
// const Navbar = () => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   return (
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

//     !isMobile ? (
//       <div className=' bg-[#EC9601]'>
//         <nav className='flex items-center justify-center py-8 gap-56 text-white relative  '>
//           <ul className='flex items-center justify-center gap-12 text-xl poppins-medium whitespace-nowrap'>
//             {LEFT_NAVLINKS.map((linkItem) => {
//               return (
//                 <li key={linkItem.id} className=''>
//                   {linkItem.label}
//                 </li>
//               );
//             })}
//           </ul>
//           <ul className='flex items-center justify-center text-xl gap-12 poppins-medium whitespace-nowrap'>
//             {RIGHT_NAVLINKS.map((linkItem) => {
//               return (
//                 <li key={linkItem.id} className='hover:bg-orange'>
//                   {linkItem.label}
//                 </li>
//               );
//             })}
//           </ul>
//           <div className='w-40  h-30   bg-[#EC9601]  rounded-br-full rounded-bl-full absolute top-0  left-1/2 -translate-x-1/2 inline-flex items-center py-8 '>
//             <img
//               src='/assets/images/mentoons-logo.png'
//               alt='logo'
//               className='w-full object-cover '
//             />
//           </div>
//         </nav>
//       </div>
//     ) : (
//       <div className=' bg-[#EC9601]'>
//         <nav className='flex items-cneter justify-between  text-white relative  '>
//           <div className='w-40 bg-[#EC9601]  rounded-br-full rounded-bl-full  -flex items-start   '>
//             <img
//               src='/assets/images/mentoons-logo.png'
//               alt='logo'
//               className='w-full object-cover '
//             />
//           </div>
//           <div>
//             <img src='/assets/images/menu' alt='' />
//           </div>
//         </nav>
//       </div>
//     )
//   );
// };

// export default Navbar;

// import LogoMini from "@/assets/imgs/logo mini.png";
// import Logo from "@/assets/imgs/logo.png";
// import { RootState } from "@/redux/store";
// import React, { useEffect, useState } from "react";
// import { FaBookmark } from "react-icons/fa6";
// import { IoCart } from "react-icons/io5";
// // import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// // import DropdownMenu from "./DropdownMenu";
// // import Sidebar, { MiniSidebar } from "./Sidebar";

// const Navbar: React.FC = () => {
//   const [showShadow, setShowShadow] = useState<boolean>(false);
//   // const cartItems = useSelector((store: RootState) => store.comics.cart);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setShowShadow(true);
//       } else {
//         setShowShadow(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       {/* for desktop & big devices */}
//       <div
//         className={` sticky top-0 ${
//           showShadow && "shadow"
//         }  hidden bg-[#EC9600] lg:flex items-center justify-between text-black bg-primary  transition-all duration-1000 ease-in-out z-[9999] w-full `}
//       >
//         <Link
//           to='/'
//           className='absolute bg-[#EC9600] hover:bg-red-500 rounded-b-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] pb-4 pt-8 px-10  '
//         >
//           <img
//             className='w-32 cursor-pointer'
//             src='/assets/mentoons-logo.png'
//           />
//         </Link>
//         <div className='w-[40%] pl-8 flex items-center justify-between'>
//           <ul className='w-[35%] flex items-center justify-between'>
//             <li className='text-white hover:bg-red-500 hover:text-white h-full py-6 px-6 transition-all ease-in-out duration-300 cursor-pointer'>
//               About
//             </li>
//             <li className='text-white hover:bg-red-500 hover:text-white h-full py-6 px-6 transition-all ease-in-out duration-300 cursor-pointer'>
//               Contest
//             </li>
//           </ul>
//           <div className='hidden custom:flex items-center justify-between gap-3 bg-white rounded-full py-3 px-6'>
//             <Link to='/wishlist'>
//               <FaBookmark className='text-lg cursor-pointer text-gray-500 hover:text-black transition-all duration-300 ease-in-out' />
//             </Link>
//             <Link to='/cart'>
//               <div className='relative group'>
//                 <IoCart className='text-2xl cursor-pointer text-gray-500 group-hover:text-black transition-all duration-300 ease-in-out' />
//                 <span className='absolute top-[-0.5rem] left-[-4px] text-white text-sm bg-red-500 rounded-full px-[6px]'>
//                   {/* {cartItems?.length} */}
//                 </span>
//               </div>
//             </Link>
//           </div>
//           {/* <Sidebar className='hidden md:block' />
//           <MiniSidebar className='block md:hidden' /> */}
//         </div>
//       </div>

//       {/* for small devices */}
//       <div
//         className={`sticky top-0 ${
//           showShadow && "shadow"
//         } container flex lg:hidden items-center justify-between text-black bg-primary py-6 transition-all duration-1000 ease-in-out z-50`}
//       >
//         <div className='w-[65%] lg:w-[60%] flex items-center justify-between gap-4 lg:gap-8'>
//           <Link to='/'>
//             <h2 className='text-xl font-extrabold cursor-pointer'>
//               <img className='w-32 cursor-pointer' src='{LogoMini} ' />
//             </h2>
//           </Link>
//         </div>
//         <div className='w-[35%] lg:w-[40%] flex items-center justify-end gap-2 lg:gap-8'>
//           {/* <MiniSidebar className='block' /> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
