import Guest from "@/components/Guest"
import { currentUser } from "@clerk/nextjs/server"
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import IncomeExpenses from "@/components/IncomeExpenses";

const page = async() => {
  const user = await currentUser();

  if(!user){
    return <Guest />
  }
  
  return (
    <main>
      <h1>Welcome, {user.firstName}</h1>
      <Balance />
      <IncomeExpenses />
      <AddTransaction />
    </main>
  )
}

export default page