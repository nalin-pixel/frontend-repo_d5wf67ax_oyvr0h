import { ShoppingCart, ShieldCheck, Coffee } from 'lucide-react'

export default function Hero({ onBuy }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(600px_300px_at_0%_0%,#60a5fa_0%,transparent_60%),radial-gradient(600px_300px_at_100%_100%,#34d399_0%,transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-3 py-1 text-xs mb-4">
            <ShieldCheck className="w-4 h-4" /> 2-year warranty • Free delivery
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Kalerm B6 Home Coffee Machine
          </h1>
          <p className="text-blue-100/90 text-lg leading-relaxed mb-6">
            Cafe-quality espresso, cappuccino, and latte at home. One-touch drinks, integrated grinder, and sleek compact design.
          </p>
          <ul className="space-y-2 text-blue-100/90 mb-8">
            <li className="flex items-center gap-2"><Coffee className="w-4 h-4" /> One-touch espresso, cappuccino, latte</li>
            <li className="flex items-center gap-2"><Coffee className="w-4 h-4" /> Integrated conical burr grinder</li>
            <li className="flex items-center gap-2"><Coffee className="w-4 h-4" /> Adjustable milk frother</li>
          </ul>
          <div className="flex items-center gap-4">
            <button onClick={onBuy} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors">
              <ShoppingCart className="w-5 h-5" /> Buy Now — 299 KWD
            </button>
            <a href="#details" className="text-white/80 hover:text-white">See details</a>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop" alt="Kalerm B6" className="w-full rounded-2xl shadow-2xl ring-1 ring-white/10" />
          <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-white text-sm">
            Best for home baristas
          </div>
        </div>
      </div>
    </section>
  )
}
