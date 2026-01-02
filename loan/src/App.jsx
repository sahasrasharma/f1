import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import LoanForm from './components/LoanForm'
import LoanList from './components/LoanList'
import api from './services/api'
import './app.css'

export default function App() {
  const [role, setRole] = useState('lender')
  const [loans, setLoans] = useState([])

  useEffect(() => {
    loadLoans()
  }, [])

  async function loadLoans() {
    try {
      const res = await api.get('/loans')
      setLoans(res.data)
    } catch (err) {
      console.log("Using sample data")
      setLoans(sampleLoans)
    }
  }

  async function createLoan(data) {
    try {
      const res = await api.post('/loans', data)
      setLoans([res.data, ...loans])
    } catch {
      setLoans([{ ...data, id: Date.now() }, ...loans])
    }
  }

  async function updateLoan(updated) {
    setLoans(loans.map(l => l.id === updated.id ? updated : l))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar role={role} onRoleChange={setRole} />

      <main className="max-w-6xl mx-auto p-4">
        <Dashboard loans={loans} role={role} />
        
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="col-span-2">
            <LoanList loans={loans} role={role} onUpdate={updateLoan} />
          </div>

          <div>
            {role !== 'borrower' && (
              <LoanForm onCreate={createLoan} />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

const sampleLoans = [
  {
    id: 1,
    borrower: 'Alice',
    principal: 10000,
    interestRate: 9,
    termMonths: 12,
    status: 'active',
    createdAt: new Date().toISOString()
  }
]
