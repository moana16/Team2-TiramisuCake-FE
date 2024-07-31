import Button from '@/components/common/Button/Button';
import Attendance from '@/components/LotteryLounge/Attendance';
import LotteryCanvas from '@/components/LotteryLounge/LotteryCanvas';

const backgroundImage = '/Lottery.png';
const sample = () => {
  console.log('아직 api 연결 x');
};

const linkcount = 2;
const todayleft = 3;

const LotteryLoungePage = () => {
  return (
    <div>
      <div
        className='bg-cover bg-center bg-no-repeat min-h-screen min-w-screen flex items-center justify-center'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='flex w-[49rem] flex-col items-center gap-8'>
          <div className='self-stretch items-center justify-center flex-col flex gap-4'>
            <Button
              type='square'
              text={`내가 초대한 친구 ${linkcount}회 | 오늘의 복권 기회 ${todayleft}회`}
              handleClick={sample}
            />
            <div className='text-center'>
              <div className='font-semibold text-h-s mb-2'>
                복권을 통해 <span className='text-primary'>나의 경품</span>을
                확인하세요!
              </div>
              <div className='text-gray-600 text-b-m'>
                같은 모양이 연달아 3개 나올 시 랜덤으로 경품에 당첨돼요
              </div>
            </div>
          </div>
          <LotteryCanvas />
          <Attendance />
        </div>
      </div>
    </div>
  );
};
export default LotteryLoungePage;
