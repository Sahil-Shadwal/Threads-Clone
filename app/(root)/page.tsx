import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div>
      <h1 className="header-text text-left text-white">Home</h1> 
      {/* <UserButton afterSignOutUrl="/"/> */}
    </div>
  )
}