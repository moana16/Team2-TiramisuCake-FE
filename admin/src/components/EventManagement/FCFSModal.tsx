import { useState } from 'react';
import { Calendar } from '../ui/calendar';
import { TimePicker } from '@/components/ui/datetime-picker';
import Modal from '@/components/common/Modal';

interface FCFSModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSave: () => void;
}

const FCFSModal = ({ isOpen, handleClose, handleSave }: FCFSModalProps) => {
  const [startFCFSTime, setstartFCFSTime] = useState<Date | undefined>(
    undefined
  );
  const [endFCFSTime, setEndFCFSTime] = useState<Date | undefined>(undefined);

  const [date, setDate] = useState<Date | undefined>(undefined);
  /*
  const [selectedRange, setSelectedRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: undefined, to: undefined });

  const handleRangeChange = (range: {
    from: Date | undefined;
    to: Date | undefined;
  }) => {
    setSelectedRange(range);
  }; */

  if (!isOpen) return null;

  return (
    <div className='top-[270px] left-[780px] flex fixed inset-0 w-fit h-fit flex-row'>
      <Modal handleCloseClick={handleClose} handleButtonClick={handleSave}>
        <div className='flex flex-row mx-4 '>
          <div className='space-y-2 space-x-2'>
            <Calendar
              mode='single'
              selected={date}
              onSelect={setDate}
              className='rounded-md border'
            />{' '}
          </div>
          <div className='flex flex-col'>
            <div className='space-y-2 ml-4 my-auto'>
              <p>오픈 시간</p>
              <TimePicker date={startFCFSTime} onChange={setstartFCFSTime} />
            </div>
            <div className='space-y-2 ml-4 my-auto'>
              <p>종료 시간</p>
              <TimePicker date={endFCFSTime} onChange={setEndFCFSTime} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FCFSModal;
