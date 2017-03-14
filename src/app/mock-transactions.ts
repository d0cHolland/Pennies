import { Transaction } from './models/transaction'

export const TRANSACTIONS: Transaction[] = [
    { Id: 0, Date: new Date('3/1/2017'), Description: "Starting Balance",  Category: "Starting Balance", Type: 3, Amount: 100.00 },
    { Id: 1, Date: new Date('3/1/2017'), Description: "Test Transaction 1",  Category: "Test Category", Type: 1, Amount: 100.00 }
]

