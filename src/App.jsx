import { useState } from 'react'

import './App.css'

import axios from 'axios';

function App() {








let [newsEl , setnewEl] = useState([])

  const onSubmit = async (e) => {
    const inputVal = document.getElementById('default-search').value;
    e.preventDefault();

    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${inputVal}&apiKey=2fdd127dbf434c44be36d684fd5e5a89`);


      let newsData = response.data.articles.map(( i , e) => {

    

        return <>
  
  <div   class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light" >
            <img
              src={i.urlToImage}
              class="w-full align-middle transition duration-300 ease-linear" />
            <a href={i.url}>
              <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div class="flex h-full items-end justify-start">
                  <div class="m-6 text-white">
                    <h5 class="mb-3 text-lg font-bold">{i.title}</h5>
                    <p className=' my-3'>
                      <small
                        >Published <u>{i.publishedAt}</u> by <span className=' font-semibold'>{i.author}</span></small
                      >
                    </p>
                    <p>{i.description}</p>
                  </div>
                </div>
              </div>
              <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
            </a>
          </div>
  
  
  
  </>
  
       
      })
  
  setnewEl(newsData)







    } catch (error) {
      console.error(error);
    }
  
  
  
 



 

console.log(newsEl)
  }

  return <div >
  
  
  
  <div >

  
  <div class="container my-24 mx-auto md:px-6">
  
    <section class="mb-32">
   
      <h2 class="mb-12 text-center text-6xl font-sans text-orange-700 font-bold">Ahmed's News App</h2>

      <div className=' flex justify-center items-center w-full'>

<form className=' my-14 w-[50rem] ' onSubmit={onSubmit}>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search For The News" required/>
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Search</button>
    </div>
</form>





      </div>


      <div className="grid gap-6 lg:grid-cols-2  xl:grid-cols-3">







       

       

  {newsEl}






        
      </div>
    </section>
  
  </div>










  </div>
  
  
  
  
  
  
  
  
  
  
  </div>
}

export default App
