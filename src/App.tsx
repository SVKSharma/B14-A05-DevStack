import './App.css'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/hero/Hero'
import { TechBoard } from './components/tech-board/TechBoard'
import type { DevStackType } from './types/DevStackType'
import { Suspense, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { FallbackSpinner } from './components/ui/FallbackSpinner'

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
