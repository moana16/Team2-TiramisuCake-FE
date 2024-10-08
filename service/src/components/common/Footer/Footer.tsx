import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8 font-sans'>
      <div className='max-w-6xl mx-auto px-4 text-center text-gray-500'>
        <img
          src='/svg/hyundai_logo_white.svg'
          alt='Hyundai logo'
          width={96}
          height={50}
          className=' mx-auto mb-6'
        />
        <nav className='mb-6 flex justify-center items-center space-x-3'>
          <Link
            to='https://www.hyundai.com/kr/ko/app-download'
            className='text-sm hover:underline'
          >
            모바일 App
          </Link>
          <span className='text-gray-500'>|</span>
          <Link
            to='https://www.hyundai.com/kr/ko/copyright'
            className='text-sm mx-3 hover:underline'
          >
            저작권안내
          </Link>
          <span className='text-gray-500'>|</span>
          <Link
            to='https://privacy.hyundai.com/overview/full-policy'
            className='text-sm mx-3 hover:underline'
          >
            개인정보 처리방침
          </Link>
          <span className='text-gray-500'>|</span>
          <Link
            to='https://www.hyundai.com/kr/ko/agreements'
            className='text-sm mx-3 hover:underline'
          >
            이용약관
          </Link>
          <span className='text-gray-500'>|</span>
          <Link
            to='https://privacy.hyundai.com/'
            className='text-sm mx-3 hover:underline'
          >
            프라이버시 센터
          </Link>
        </nav>
        <p className='text-sm mb-4'>고객센터 : 080-600-6000</p>
        <p className='text-xs'>
          COPYRIGHT © HYUNDAI MOTOR COMPANY. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
