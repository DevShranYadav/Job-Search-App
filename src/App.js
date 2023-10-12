
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login/Login';
import SignUp from './component/sign-up/SignUp';
import Main from './component/job-pages/main-page/Main';
import Apply from './component/job-pages/display/Apply';
import DisplayData from './component/job-pages/display/DisplayData';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import Discription from './component/job-pages/discription/Discription';


function App() {
  return (
   <>
   <Provider store={store}>
   <Routes>
   <Route path='/' element={<Login/>} />
   <Route path='/signup' element={<SignUp/>} />
   <Route path='/default' element={<Main/>} />
   <Route path='/details' element={<DisplayData/>} />
   <Route path='/apply' element={<Apply/>} />
   <Route path='/job-details' element={<Discription/>} />

   </Routes>
   </Provider>

   </>
  );
}

export default App;
