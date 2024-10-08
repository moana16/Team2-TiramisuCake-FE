import { motion } from 'framer-motion';
import { SCROLL_MOTION } from '@/constants/animation';
import { memo } from 'react';

interface FcfsInfoContainerProps {
  title: string;
  text: string;
}

const FcfsInfoContainer = ({ title, text }: FcfsInfoContainerProps) => {
  return (
    <motion.div
      {...SCROLL_MOTION}
      className='flex-1 flex flex-col w-full max-w-[650px] items-center gap-4 bg-gradient-to-b from-white/20 to-white/10 shadow-custom backdrop-blur-custom  px-16 py-12'
    >
      <div className='text-h-m font-bold text-hyundai'>{title}</div>
      <div className='flex gap-5 w-full justify-evenly mt-10 items-center'>
        <div className='flex flex-col items-center gap-6'>
          <img
            src='/word.png'
            alt='낱말 게임 아이콘'
            width={100}
            height={100}
          />
          <p className='text-b-xl font-semibold text-white whitespace-nowrap text-center'>
            {text}
            <br /> 선착순 퀴즈
          </p>
        </div>
        <img
          src='/svg/right_arrow.svg'
          alt='right arrow'
          width={55}
          height={70}
        />

        <div className='flex flex-col items-center gap-6'>
          <img
            src='/surprise-box.png'
            alt='선물 박스 아이콘'
            width={100}
            height={100}
          />
          <p className='text-b-xl font-semibold text-white whitespace-nowrap '>
            단어 맞추고 선물 받기
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(FcfsInfoContainer);
