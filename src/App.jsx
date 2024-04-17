import './App.css'

import TypographyPage from './Pages/BaseSystem/Typography/TypographyPage';
import UseScreentTypePage from './Pages/Utils/Hooks/UseScreentTypePage';
import UseLocalStoragePage from './Pages/Utils/Hooks/UseLocalStoragePage';
import PageLayout from './Layouts/PageLayout';

function App() {  
  return (
    <PageLayout title='MrEYCode' variant='h1'>
      <div className="card">
        <TypographyPage/>
        <UseScreentTypePage/>
        <UseLocalStoragePage/>
      </div>
    </PageLayout>
  )
}

export default App
