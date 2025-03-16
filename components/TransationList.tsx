import { Transaction } from '@/types/Transaction'
import getTransactions from '@/app/actions/getTransaction'
import TransactionItem from './TransactionItem';

const TransationList = async() => {
    const {transactions,error} = await getTransactions();

    if(error) {
        return <p className='error'>{error}</p>
    }

  return (
    <div>
        <h3>History</h3>
        <ul className='list'>
            {transactions && transactions.map((transaction:Transaction) => (
             <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
        </ul>
    </div>
  )
}

export default TransationList