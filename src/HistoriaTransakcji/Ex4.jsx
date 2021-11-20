import React from "react"
import TransactionHistory from "./TransactionHistory"
import transations from "./transactions.json"

const Ex4 = () => {
  return <TransactionHistory items={transations}></TransactionHistory>
}

export default Ex4
