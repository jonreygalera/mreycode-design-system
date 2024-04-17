import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Typography } from '@mreycode/system';
import { stringJSON, useLocalStorage, useScreenType  } from '@mreycode/utils';
import TypographyPage from './Pages/BaseSystem/Typography/TypographyPage';

function App() {
  const [count, setCount] = useState(0)
  const [appTheme, setAppTheme] = useLocalStorage('theme', 'dark');
  const screentType = useScreenType();
  console.log(screentType);
  
  // console.log(stringJSON('{"name": "MrEYCode"}', 'country', 'Philippines'));
  
  return (
    <>
      <div>
        <Typography variant='h1'>{'<MrEYCode/>'}</Typography>
      </div>
      <div className="card">
      <TypographyPage/>


        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setAppTheme(prev => prev === 'light' ? 'dark' : 'light')}>
          App Theme: {appTheme}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
