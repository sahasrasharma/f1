import React from 'react'

export default function Navbar({ role, onRoleChange }) {
  return (
    <header className="bg-white shadow p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Loan Manager</h1>

        <select
          value={role}
          onChange={(e) => onRoleChange(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="admin">Admin</option>
          <option value="lender">Lender</option>
          <option value="borrower">Borrower</option>
          <option value="analyst">Analyst</option>
        </select>
      </div>
    </header>
  )
}
