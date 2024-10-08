import { Outlet } from 'react-router-dom';
import Header from './components/common/Header';

function App() {
  return (
    <div className='min-w-screen min-h-screen flex flex-col'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
