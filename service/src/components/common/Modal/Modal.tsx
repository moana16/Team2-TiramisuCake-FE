import useScrollLock from '@/hooks/common/useScrollLock';
import { useModalContext } from '@/store/context/useModalContext';
import { PropsWithChildren } from 'react';

interface ModalProps {
  handleClose: () => void;
}

const Modal = ({ handleClose, children }: PropsWithChildren<ModalProps>) => {
  const { isOpen } = useModalContext();

  useScrollLock(isOpen);
  return (
    <div className='fixed inset-0 w-screen flex items-center justify-center z-[99] backdrop-blur-blur-20 bg-modal-bg'>
      <div className='bg-white flex flex-col items-center gap-10 relative'>
        <img
          src='/svg/closeIcon.svg'
          alt='close icon'
          width={40}
          height={40}
          onClick={handleClose}
          className='cursor-pointer absolute top-[-4rem] right-0'
        />
        {children}
      </div>
    </div>
  );
};
export default Modal;
