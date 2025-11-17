import { useRef } from 'react'
import Hero from './components/Hero'
import Details from './components/Details'
import Checkout from './components/Checkout'

function App() {
  const checkoutRef = useRef(null)
  const scrollToCheckout = () => {
    checkoutRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.07),transparent_50%)]"></div>
      <div className="relative">
        <Hero onBuy={scrollToCheckout} />
        <Details />
        <div ref={checkoutRef}>
          <Checkout />
        </div>
        <footer className="text-center text-blue-200/70 py-8">
          © {new Date().getFullYear()} Kalerm B6 • Secure payments powered by MyFatoorah
        </footer>
      </div>
    </div>
  )
}

export default App
