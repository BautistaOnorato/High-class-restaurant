import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Home from './routes/Home'
import Menu from './routes/Menu'
import Layout from './layout/Layout'
import './App.css'

const App = () => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/menu' element={<Menu />} /> 
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </LocalizationProvider>
)

export default App
