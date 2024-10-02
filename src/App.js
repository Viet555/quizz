import './App.scss';
import AppRoutes from './Routes/AppRoutes';
import Header from './component/Header/Header';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  // const [isShownav, setisShownav] = useState(true)
  // const handClickHide = () => {
  //   setisShownav(false)
  // }
  return (
    <>
      <header className="App-container">

        <div className='Header-container'>
          <Header />
        </div>
        <div className='Main-container'>
          <div className='sidenav-container'></div>
        </div>
        <div className='App-content'>
          <AppRoutes />
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </header>
    </>

  );
}

export default App;
