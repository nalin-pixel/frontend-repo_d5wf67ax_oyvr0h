export default function Details() {
  return (
    <section id="details" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
        <ul className="space-y-2 text-blue-100/90">
          <li>One-touch espresso, cappuccino, latte</li>
          <li>Integrated conical burr grinder</li>
          <li>Adjustable milk frother</li>
          <li>Compact, modern design</li>
          <li>Large water tank and bean hopper</li>
        </ul>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-semibold mb-4">What's in the box</h2>
        <ul className="space-y-2 text-blue-100/90">
          <li>Kalerm B6 Coffee Machine</li>
          <li>Milk frother attachment</li>
          <li>Cleaning kit</li>
          <li>User manual</li>
        </ul>
      </div>
    </section>
  )
}
