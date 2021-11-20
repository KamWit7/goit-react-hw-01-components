import React from "react"
import "./css/TransactionHistory.module.css"

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  )
}

const TableBody = ({ transations }) => {
  return (
    <tbody>
      {transations.map(({ id, type, amount, currency }) => {
        return (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        )
      })}
    </tbody>
  )
}

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <TableHead />
      <TableBody transations={items} />
    </table>
  )
}

export default TransactionHistory

// rafce
