import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Partners from './components/Partners'
import ValueProposition from './components/ValueProposition'
import Features from './components/Features'
import Footer from './components/Footer'
import Blog from './components/Blog'
import './App.css'

// Home Page Component
function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <ValueProposition />
      <Features />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
