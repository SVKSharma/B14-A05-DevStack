import './App.css'
import { Navbar } from './component/Navbar'
import { Hero } from './component/Hero'
import { TechBoard } from './component/DevBoard'
import type { DevStackType } from './types/DevStackType'
import { Suspense, useState } from 'react'
import { Footer } from './component/Footer'
import { FallbackSpinner } from './component/FallbackSpinner'

const FetchDevStackData = async ():Promise<DevStackType[]>=>{
  const response = await fetch("/Data.json");
  return await response.json();
}

function App() {
  const [devStackData] = useState(()=>FetchDevStackData())

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<FallbackSpinner />}>
        <TechBoard devStackData={devStackData}></TechBoard>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App
