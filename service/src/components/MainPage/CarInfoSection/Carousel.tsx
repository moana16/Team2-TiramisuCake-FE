import Header from './Header';
import './Carousel.css';
import VideoPlayer from './VideoPlayer';
import CarouselBar from './CarouselBar';
import Button from '@/components/common/Button/Button';
import CarDetailInfo from './CarDetailInfo';
import { useCarInfoContext } from '@/store/context/useCarInfoContext';
import CarouselBg from './CarouselBg';
import { motion } from 'framer-motion';
import { FLOATING_CAROUSEL } from '@/constants/animation';
import { CarInfoList } from '@/types/main/type';
import { getTransformClass } from '@/utils/main/getTransformClass';
import { getVisibleItems } from '@/utils/main/getVisibleItems';

interface CarouselProps {
  carInfoList: CarInfoList[];
}

const Carousel = ({ carInfoList }: CarouselProps) => {
  const { state, openCarDetail, selectCurrentIndex } = useCarInfoContext();

  const handleSlideClick = (index: number) => {
    if (index >= 0 && index < carInfoList.length) {
      selectCurrentIndex({ index: index });
    }
  };

  const visibleItems = getVisibleItems(state.currentIndex, carInfoList);

  return (
    <div className='snap-center carousel-container'>
      <CarouselBg currentIdx={state.currentIndex} />
      <div className='flex gap-4 z-10 items-center'>
        {visibleItems.map((item) => {
          const isActive = item.id === carInfoList[state.currentIndex].id;
          const isDiffTwo = Math.abs(state.currentIndex - (item.id - 1)) === 2;

          return (
            <div
              key={item.id}
              className={`carousel-item  ${isActive ? 'active bg-transparent ' : `transform ${getTransformClass(state.currentIndex + 1)} adjacent bg-gradient-light-gray backdrop-blur-blur-40`} ${isDiffTwo ? 'shorter' : ''}`}
              onClick={() => handleSlideClick(item.id - 1)}
            >
              <div className='carousel-item-content'>
                {isActive && (
                  <>
                    <Header title={item.title} subTitle={item.subTitle} />
                    {item.id === 1 ? (
                      <VideoPlayer videoUrl={item.imgUrl} />
                    ) : (
                      <motion.div
                        className='h-[422px] relative transform duration-200'
                        style={{
                          width: '784px',
                          transform: `translateX(${-(item.id - 3) * 50}px)`,
                          animation: 'expandWidth 0.5s ease forwards',
                        }}
                      >
                        <img
                          src={item.imgUrl}
                          alt={item.title}
                          className='w-full h-full object-cover transform duration-200'
                        />
                        <div className='w-full h-full absolute top-0 left-0 bg-gradient-bottom-gray' />
                        <motion.div
                          className={`absolute top-12 right-12 `}
                          {...FLOATING_CAROUSEL}
                        >
                          <Button
                            type='square'
                            text='자세히 보기'
                            handleClick={openCarDetail}
                          />
                        </motion.div>
                        <motion.div
                          className='flex flex-col gap-4 absolute bottom-12 left-12 text-white'
                          {...FLOATING_CAROUSEL}
                        >
                          <h3 className='text-h-s font-semibold'>
                            {item.imgTitle}
                          </h3>
                          <p className='text-b-l max-w-[694px]'>
                            {item.imgContent}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <CarouselBar />
      {state.isCarDetailOpen && (
        <CarDetailInfo
          carDetailInfoList={carInfoList[state.currentIndex].carDetailInfoList}
        />
      )}
    </div>
  );
};

export default Carousel;
