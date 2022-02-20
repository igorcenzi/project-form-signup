import './App.css';
import {useState} from 'react'
import Cadastro from './components/pages/Cadastro';
import CardUsuario from './components/pages/CardUsuário';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [logged, setLogged] = useState(false)
  const [data, setData] = useState({})

  const addUser = (data) => {
    setData(data)
    setLogged(true)
  }

  const logout = () => {
    setLogged(false)
  }

  return(
    <>
    <ToastContainer />
    <div className='App'>
      {!logged ? <Cadastro addUser={addUser}/> : <CardUsuario usuario={data} logout={logout}/>}
      </div>
    </>
  )
  
}

export default App;
