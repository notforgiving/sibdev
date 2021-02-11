import LoginPage from './pages/Login/Login'
import style from './generalStyle.module.css'
import './theme.css'
import 'antd/dist/antd.css';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className={style.container}>
      {/* <LoginPage/> */}
      <Main/>
    </div>
  );
}

export default App;
