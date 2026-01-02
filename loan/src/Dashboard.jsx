import React from 'react'

export default function Dashboard({ loans, role }) {
  const totalLoans = loans.length
  const active = loans.filter(l => l.status === 'active').length
  const totalPrincipal = loans.reduce((s, l) => s + l.principal, 0)

  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-3">Dashboard</h2>

      <div className="grid grid-cols-3 gap-4">
        <Stat title="Total Loans" value={totalLoans} />
        <Stat title="Active Loans" value={active} />
        <Stat title="Total Principal" value={`₹ ${totalPrincipal}`} />
      </div>

      <p className="mt-3 text-sm text-gray-600">
        Current Role: <strong>{role}</strong>
      </p>
    </div>
  )
}

function Stat({ title, value }) {
  return (
    <div className="border p-3 rounded">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  )
}
