import React, { createContext, ReactNode, useState } from "react";

interface ModalContextProps {
  isModalOpen: boolean;
  toggleModal: () => void;
  actionType: string;
  setActionType: (type: string) => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  toggleModal: () => {},
  actionType: "create",
  setActionType: () => {},
});

const ModalContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState("create");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, toggleModal, actionType, setActionType }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
