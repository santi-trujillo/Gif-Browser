import React, {useState} from 'react';
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Link, Route, useLocation } from "wouter"

export default function App() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const {setPage} = ListOfGifs({keyword})

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value) 
  }

  const handleNextPage = () => setPage(prevPage => prevPage +1)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>¡Buscar!</button>
        <input placeholder='Look for your gif...' onChange={handleChange} type='text' value={keyword} />
      </form>
      <div className='App'>
        <section className='App-content'>
          <h1 className='titleClass'>Gifs</h1>
          <Route 
            component={ListOfGifs}
            path='/search/:keyword'
          />
        </section>
        <button onClick={handleNextPage}>Get next page</button>
      </div>
    </>
  );
}
