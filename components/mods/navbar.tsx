import { ChevronDown, Heart, Menu, Search } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"

export const Navbar = () => {
  return (
    <div>
        <div className="h-18  px-[3%] flex items-center justify-between">
            <ul className="items-center gap-10 font-semibold h-full hidden lg:flex">
                <li>
                    FAQ
                </li>
                <li className="flex items-center gap-2">
                    Wall of <Heart size={16}/>
                </li>
                <li className="flex items-center gap-2">
                    Resources <ChevronDown size={16}/>
                </li>
            </ul>
            <div className="hidden lg:flex">
                <Image src={"/bmc-brand-logo.svg"} alt="Logo" width={150} height={20}/>
            </div>

            <div className="flex lg:hidden items-center gap-2">
                 <Menu size={16} />
                <Image src={"/bmc-brand-icon.png"} alt="Logo" width={20} height={20}/>
            </div>

            <div className="flex items-center gap-4">
                    <Button variant={"secondary"} className="rounded-full hidden lg:flex py-5 px-4 bg-[#F7F7F7] text-gray-700">
                        <Search/>
                        Search creators
                    </Button>
               <ul className="flex items-center gap-4 font-semibold">
                    <li>
                        Log in
                    </li>
                    <li className="flex items-center gap-2 bg-yellow-300 py-2.5 px-4 rounded-full">
                        Sign up
                    </li>
               </ul>
            </div>
        </div>
    </div>
  )
}
