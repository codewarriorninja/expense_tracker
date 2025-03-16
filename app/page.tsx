import Guest from "@/components/Guest"
import { currentUser } from "@clerk/nextjs/server"
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import IncomeExpenses from "@/components/IncomeExpenses";
import TransationList from "@/components/TransationList";

const page = async() => {
  const user = await currentUser();

  if(!user){
    return <Guest />
  }
  
  return (
    <main>
      <h1>Welcome, {user.firstName || user.username }</h1>
      <Balance />
      <IncomeExpenses />
      <AddTransaction />
      <TransationList />
    </main>
  )
}

export default page