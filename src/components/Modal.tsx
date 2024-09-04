import { IoIosCloseCircleOutline } from "react-icons/io";
import JobApplicationForm from "./CareerPage/JobApplicationForm";

interface ModalProps {
  toggleModal: () => void;
  actionType: string;
  action?: (name: string, color: string) => void;
}

const Modal: React.FC<ModalProps> = ({ toggleModal }) => {
  return (
    <div className='absolute bg-black inset-0 border border-red-600 backdrop:blur-2xl '>
      <div className='bg-white p-6 rounded-lg relative w-11/12 max-w-lg'>
        <button
          onClick={toggleModal}
          className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
        >
          <IoIosCloseCircleOutline size={24} />
        </button>
        <JobApplicationForm />
      </div>
    </div>
  );
};

export default Modal;
