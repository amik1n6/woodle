import React, { useState , useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Posts from './Posts';
import Message from './Message';
import Notifications from './Notifications';
import Profile from './Profile';
import Intresting from './Intresting';
import Local from './Local';

function Timer(){
  const [count, setCount] = useState(0);

  useEffect(()=>{
      setTimeout(() => {
          setCount((count) => count + 1)
      }, 1000);
  });
  return <h1>Вы находитесь на этом сайте {count} секунд</h1>
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        {Timer()}
        <div className='main-menu'>
          <Routes>
            <Route path='/' element={<Posts />} />
            <Route path='/Message' element={<Message />} />
            <Route path='/Notifications' element={<Notifications />} />
            <Route path='/Intresting' element={<Intresting />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Addpost' element={<Local />}></Route>
          </Routes>
        </div>
        <hr />
        
      </div>
    </BrowserRouter>
  );
}
export default App;
