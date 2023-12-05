import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Caracteristicas from './components/Caracteristicas'
import img from './components/img/banner.png'
import Paginacao from './components/Paginacao'
import Filtros from './components/Filtros'
import Nome from './components/Filtro_categoria/Nome'


// Api Externa: https://rickandmortyapi.com/api/character


function App ()  {

  let [character, setCharacter] = useState([])
  let [pageNumber, setPageNumber] = useState(1)
  let [status, setStatus] = useState('')
  let [genero, setGenero] = useState('')

  let [info, setInfo] = useState([])
  let [filter, setFilter] = useState('')




  let urlapi = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&status=${status}&gender=${genero}`;

  const fetchCharacter = (url) => {
    fetch(url)
      .then(resposta => resposta.json())
      .then(data => {
        setCharacter(data.results)
        setInfo(data.info)
       
      })


  }  

  useEffect(() => {

    fetchCharacter(urlapi)

  }, [urlapi])


   /*Variaveis para o componente de paginação  */
  
   const antes = () => {
    fetchCharacter(info.prev)

  }
  const depois = () => {
    fetchCharacter(info.next)
  }
  

	const personagemFiltrado = character.filter((character) =>
  character.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))



  return (
    <>
    
      <Navbar brand='Rick and Morty' img={img} /> 
      <Nome filter={filter} setFilter={setFilter}/>
      <Filtros setGenero={setGenero} setStatus={setStatus} setPageNumber={setPageNumber}/>
      <div className='container mt-5'>
        <Paginacao prev={info.prev} next={info.next} antes={antes} depois={depois} />
        <Caracteristicas character={personagemFiltrado} filter={filter}/>
        <Paginacao prev={info.prev} next={info.next} antes={antes} depois={depois}/>
       
      </div>
    </>
  )
}



export default App
