import { useState } from 'react'
import PicPay from "./assets/logo.png"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Principal */}
      <div className='titleMain'>
          <h1>Entre</h1><p/>
          <h3>Encontre agora sua Solução</h3><img src={PicPay} alt="logo"/>
      </div><p/>
      {/*Formulário */}
      <div className='form'>
        <form action=''>
          <input type='email' placeholder='Email' required='required' id='input'/><p/>
          <input type='password' placeholder='Senha' required='required' id='input'/><p/>
          <h5><input type="checkbox"/>Lembre-me<span>Esqueceu a senha?</span></h5><p/>
          <button type='submit'>Login</button>
        </form>
      </div>
    </>
  )
}

export default App
