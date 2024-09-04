import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { ModalContext } from "../../contexts/ModalContext";
const FAQCard = () => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
  const { toggleModal } = React.useContext(ModalContext);
  const handleIsExpanded = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div
      className={` ${
        isExpanded ? "max-h-full" : "max-h-16"
      } border border-amber-100 rounded-xl flex flex-col items-center justify-between overflow-hidden transition-all duration-300  bg-amber-600 `}
    >
      <div className=' w-full flex items-center justify-between p-4 text-white'>
        <span className='text-2xl font-bold'>Full-stack Developer</span>
        <span
          className={`p-1 rounded-full border border-amber-100 flex items-center transition-all duration-300  ${
            isExpanded && "rotate-180"
          }`}
          onClick={handleIsExpanded}
        >
          <IoChevronDown color='white' />
        </span>
      </div>
      <span className='p-4 text-white'>
        <h1 className='text-xl font-bold'>Job Description</h1>
        We have an amazing technology team (20+ and growing quickly) developing
        our platform and we are looking for Senior Fullstack Engineers (MERN) to
        help us in the next stage of our journey which includes mobile, scaling,
        containerisation and feature innovation. The successful candidate will
        join a growing UK and India Development team as reporting to the Project
        Manager and VP of Engineering. The UK and India Development Team
        consists of several competencies including UX, QA, Developers and BAs.
        Our current technologies include Azure, Node.js, React, Redux, Firebase
        & Typescript; we will build out our future stack from these (not
        immutable) core foundations, so in-depth experience and knowledge of all
        of these technologies is a pre-requisite.
        <h1 className='text-xl font-bold pt-4'>Requirement</h1>
        <ol className='list-disc list-inside'>
          <li className='pl-4'>
            Experience working as a Full stack Engineer on product(s) with 1
            million+ users across web and mobile applications{" "}
          </li>
          <li className='pl-4'>
            Experience with React/Node; including: MySQL/MySQL, Express, React,
            Redux, Node.js, TypeScript and hands on experience of developing
            with Google Firebase
          </li>
          <li className='pl-4'>
            An exceptional understanding of secure and scalable application
            development, including the full lifecycle of API microservices
            services, including authentication, API gateways and versioning
          </li>
          <li className='pl-4'>
            Strong enthusiasm for technology, you enjoy developing code in your
            own time and are up to date with current tools and best practices
            around development, DevOps and software management{" "}
          </li>
          <li className='pl-4'>
            Detailed, hands-on knowledge of CI/CD pipelines to automate builds
            and quality checks – ideally using Azure DevOps{" "}
          </li>
        </ol>
        <h1 className='text-xl font-bold pt-4'>Skills</h1>
        <div>
          <ul className='flex items-center justify-start gap-2 flex-wrap '>
            <li className='px-3 py-1 rounded-full bg-amber-500 text-sm'>
              HTML
            </li>
            <li className='px-3 py-1 rounded-full bg-amber-500 text-sm'>CSS</li>
            <li className='px-3 py-1 rounded-full bg-amber-500 text-sm'>
              JavaScript
            </li>
            <li className='px-3 py-1 rounded-full bg-amber-500 text-sm'>
              React
            </li>
            <li className='px-3 py-1 rounded-full bg-amber-500 text-sm'>
              {" "}
              Node.js
            </li>
            <li className='px-3 py-1 rounded-full bg-amber-500 text-sm'>
              Express.js
            </li>
            <li className='px-3 py-1 rounded-full bg-amber-500 text-sm'>
              MongoDB
            </li>
            <li className='px-3 py-1 rounded-full bg-amber-500 text-sm'>
              MySQL
            </li>
          </ul>
        </div>
      </span>
      <div className=' w-full px-4 '>
        <button
          className='text-white font-bold px-5 py-2 w-full border  border-amber-100 hover:bg-amber-500 mb-4 rounded-md  transition-all duration-300'
          onClick={toggleModal}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default FAQCard;
