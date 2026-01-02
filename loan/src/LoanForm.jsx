import React, { useState } from 'react'

export default function LoanForm({ onCreate }) {
  const [borrower, setBorrower] = useState('')
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState(10)
  const [months, setMonths] = useState(12)

  function submit(e) {
    e.preventDefault()

    const data = {
      borrower,
      principal: Number(principal),
      interestRate: Number(rate),
      termMonths: Number(months),
      status: 'offered',
      createdAt: new Date().toISOString()
    }

    onCreate(data)
    setBorrower('')
    setPrincipal('')
  }

  return (
    <form onSubmit={submit} className="card space-y-3">
      <h3 className="font-semibold">Create Loan Offer</h3>

      <input
        type="text"
        placeholder="Borrower Name"
        value={borrower}
        onChange={(e) => setBorrower(e.target.value)}
        className="border rounded px-2 py-1 w-full"
        required
      />

      <input
        type="number"
        placeholder="Principal Amount"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        className="border rounded px-2 py-1 w-full"
        required
      />

      <div className="grid grid-cols-2 gap-2">
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <input
          type="number"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Create Loan
      </button>
    </form>
  )
}
