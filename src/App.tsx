import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import ThemeChanger from './components/blocks/ThemeChanger'
import { useTheme } from './components/blocks/ThemeChanger'
import { HugeiconsIcon } from '@hugeicons/react'
import { Sun02Icon, Moon02Icon } from '@hugeicons/core-free-icons'

function AppRoutes() {
  const { theme, setTheme } = useTheme();
  
  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <>
      <button onClick={handleThemeChange} className='absolute top-2 right-2'>
        { theme === 'light' ? (<HugeiconsIcon icon={Sun02Icon} size={30} />) : (<HugeiconsIcon icon={Moon02Icon} size={30} />) }
      </button>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeChanger defaultTheme="system" storageKey="vite-ui-theme">
        <AppRoutes />
      </ThemeChanger>
    </BrowserRouter>
  )
}