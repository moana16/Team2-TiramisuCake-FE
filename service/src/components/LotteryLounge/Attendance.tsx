const texts = ['I', 'O', 'N', 'I', 'Q', '5', 'Y'];

const Attendance = () => {
  const counts = 3;

  const defaultStyle = {
    background: 'rgba(255, 255, 255, 0.8)', // 흰색의 투명도 조절
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    strokeWidth: '1px',
    stroke: '#FFFFFF',
    backdropFilter: 'blur(20px)',
  };

  return (
    <div className='flex flex-col items-center gap-4 self-stretch'>
      <div className='text-center text-gray-800 font-normal text-b-m line-height-[1.125rem]'>
        연속 7일 응모하면 특별한 선물을 드려요! (1인 1회 한정)
      </div>
      <div className='flex items-center gap-4'>
        {texts.map((text, index) => {
          const degree = index * 60;

          const dynamicStyle = {
            width: '5rem',
            height: '5rem',
            borderRadius: '50%',
            background: `conic-gradient(from ${degree}deg, #FFFFFF 0%, #BBE0E6 100%)`,
            animation: `rotateCircle 1s linear 1`,
          };

          const textColorClass =
            index < counts ? 'text-primary' : 'text-gray-300';

          const attendanceClass = index < counts ? dynamicStyle : defaultStyle;

          return (
            <div
              key={index}
              className='items-center text-center justify-center'
            >
              <div className='relative flex items-center justify-center'>
                <div className='self-stretch' style={attendanceClass}></div>
                {index < counts ? (
                  <div className='bg-gradient-attend bg-clip-text text-transparent absolute text-h-l font-bold'>
                    {text}
                  </div>
                ) : (
                  <div className='absolute text-h-l font-bold text-gray-400'>
                    {text}
                  </div>
                )}
              </div>
              <div className={`mt-2 text-d-m ${textColorClass}`}>
                {index + 1}일차
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Attendance;
