import { ROUTER_PATH } from '@/lib/constants';
import { useUserContext } from '@/store/context/useUserContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  const handleMainTabClick = () => {
    navigate(ROUTER_PATH.MAIN);
  };
  const handlEventManageTabClick = () => {
    navigate(ROUTER_PATH.EVENT_MANAGE);
  };

  const handleWinManageTabClick = () => {
    navigate(ROUTER_PATH.WIN_MANAGE);
  };
  return (
    <div className='w-screen h-[87px] flex justify-between bg-[#F3F5F7] items-center py-4 px-56 z-50 '>
      <div
        className='flex gap-4 items-end cursor-pointer'
        onClick={handleMainTabClick}
      >
        <img src='/svg/logo.svg' alt='Logo' />
        <span className='text-xs'>[The new IONIQ 5와 그린라이트]</span>
      </div>
      <div className='flex gap-[8.5rem] text-lg font-bold '>
        <div className='flex gap-5 cursor-pointer'>
          <span className='px-[14px]' onClick={handlEventManageTabClick}>
            이벤트 관리
          </span>
          <span className='px-[14px]' onClick={handleWinManageTabClick}>
            당첨 관리
          </span>
        </div>
        <div className='text-[#3A8BA0] font-bold cursor-pointer'>
          {user.isLoggedIn ? 'ADMIN' : '로그인 필요'}
        </div>
      </div>
    </div>
  );
};

export default Header;
