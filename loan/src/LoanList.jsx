import React, { useState } from 'react'

export default function LoanList({ loans, role, onUpdate }) {
  const [openId, setOpenId] = useState(null)

  function toggle(id) {
    setOpenId(openId === id ? null : id)
  }

  function closeLoan(loan) {
    onUpdate({ ...loan, status: 'closed' })
  }

  return (
    <div className="card">
      <h3 className="font-semibold mb-2">Loans</h3>

      {loans.map((loan) => (
        <div key={loan.id} className="border p-3 rounded mb-2">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">{loan.borrower}</p>
              <p className="text-sm text-gray-600">
                ₹{loan.principal} • {loan.interestRate}% • {loan.termMonths} months
              </p>
            </div>

            <button
              className="border px-2 py-1 rounded"
              onClick={() => toggle(loan.id)}
            >
              {openId === loan.id ? 'Hide' : 'View'}
            </button>
          </div>

          {openId === loan.id && (
            <div className="mt-2 text-sm">
              <p>Created: {new Date(loan.createdAt).toLocaleString()}</p>
              <p>Status: {loan.status}</p>

              {role !== 'borrower' && (
                <button
                  className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
                  onClick={() => closeLoan(loan)}
                >
                  Mark as Closed
                </button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
