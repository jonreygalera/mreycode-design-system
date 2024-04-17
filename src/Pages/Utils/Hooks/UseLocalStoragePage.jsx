
import PageLayout from '../../../Layouts/PageLayout';
import { Typography }  from '@mreycode/system';
import React from 'react'
import { useLocalStorage } from '@mreycode/utils';

const UseLocalStoragePage = () => {
  const [appTheme, setAppTheme] = useLocalStorage('theme', 'dark');

  return (
    <PageLayout title='Use Local Storage'>
      <Typography variant='body1'>Check dev tools - local storage</Typography>
      <button onClick={() => setAppTheme(prev => prev === 'light' ? 'dark' : 'light')}>
        <Typography variant='button'>Click ME : {appTheme}</Typography>
      </button>
    </PageLayout>
  )
}

export default UseLocalStoragePage