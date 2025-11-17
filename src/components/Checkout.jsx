import { useState } from 'react'
import { CreditCard, Loader2 } from 'lucide-react'

export default function Checkout() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [paymentUrl, setPaymentUrl] = useState('')

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleCheckout = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    setPaymentUrl('')
    try {
      const resp = await fetch(`${backend}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: name,
          customer_email: email || null,
          customer_mobile: mobile || null,
        }),
      })
      const data = await resp.json()
      if (!resp.ok) throw new Error(data.detail || 'Checkout failed')
      setMessage(data.message)
      if (data.payment_url) {
        setPaymentUrl(data.payment_url)
        window.open(data.payment_url, '_blank')
      }
    } catch (err) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-14">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white">
        <h3 className="text-xl font-semibold mb-4">Checkout</h3>
        <form onSubmit={handleCheckout} className="grid md:grid-cols-3 gap-4">
          <input value={name} onChange={(e)=>setName(e.target.value)} required placeholder="Full name" className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 outline-none" />
          <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email (optional)" className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 outline-none" />
          <input value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Mobile (optional)" className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 outline-none" />
          <button disabled={loading} className="md:col-span-3 bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 justify-center">
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <CreditCard className="w-5 h-5" />} Proceed to Payment
          </button>
        </form>
        {message && <p className="mt-4 text-blue-100">{message}</p>}
        {paymentUrl && (
          <a href={paymentUrl} target="_blank" className="inline-block mt-3 text-white underline">Open payment link</a>
        )}
      </div>
    </section>
  )
}
