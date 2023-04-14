import Login from "./pages/login"
import Home from "./pages/home"
import {useNavigate} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar"

function App() {
  const navigate = useNavigate()

    const logar = (email, senha) =>{
      console.log(email, senha)
      localStorage.setItem("dados", JSON.stringify({ login: email, senha: senha }))
      if (email != "" && senha != "") {
        navigate("/home")
      } else {
        alert("Preencha todos os campos")}
    }
  return (
    
    <>
    <NavBar/>
    <Routes>
      {/* <Route path='/' element={<NavBar/>}/> */}
      <Route path='/login' element={<Login  onClick={logar} />} />
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
