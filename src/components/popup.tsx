import React, { FC } from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose?: React.MouseEventHandler;
  children?: React.ReactNode;
}

const Popup: FC<PopupProps> = ({ isOpen, onClose, children }) => {
  const preference = {
    popupOverlay: isOpen
      ? "fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      : "hidden",
    popupContent: isOpen
      ? "bg-white p-4 rounded-md shadow-md grid justify-items-center z-51 overflow-auto max-h-screen"
      : "hidden",
  };
  
  return (
    <div className={preference.popupOverlay}>
      <div className={preference.popupContent}>
        <div onClick={onClose} className="flex justify-end text-end w-full relative">
          <div className='absolute top-0'>
            <i className="fa-solid fa-xmark text-red-300 hover:text-red-600"></i>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup;