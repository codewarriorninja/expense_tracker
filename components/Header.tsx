import { SignedIn,SignedOut,UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { checkUser } from "@/lib/checkUser"

const Header = async() => {
 const user = await checkUser();
//  console.log(user);

  return (
    <nav className ='navbar'>
      <div className="navbar-container">
        <h2>Expense Tracker</h2>
        <div>
          <SignedOut>
            <Link href={'sign-in'}>
             <button className="cursor-pointer">Sign in</button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}

export default Header