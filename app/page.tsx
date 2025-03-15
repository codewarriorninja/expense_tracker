import Guest from "@/components/Guest"
import { currentUser } from "@clerk/nextjs/server"

const page = async() => {
  const user = await currentUser();

  if(!user){
    return <Guest />
  }
  
  return (
    <main>
      <h1>Welcome, {user.firstName}</h1>
    </main>
  )
}

export default page