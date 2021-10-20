import Image from "next/image"
import {
    SearchIcon, PlusCircleIcon, UserGroupIcon,
    HeartIcon, PaperAirplaneIcon, MenuIcon,
} from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { modalState } from "../../atoms/modalAtom"

function Header() {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();


    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between items-center max-w-6xl mx-5 lg:mx-auto ">

                <div
                    onClick={() => router.push('/')}
                    className="relative lg:inline-grid w-24 cursor-pointer">
                    <h1 className="text-sm md:text-xl">🅸🅽🆂🆃🅰🆇🅸🆃</h1>
                </div>

                <div className="max-w-xs">
                    <div className="relative p-7 mt-1 md:p-3 rounded-md ">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="hidden md:block h-5 w-5 text-gray-500" />
                        </div>
                        <input className="bg-gray-50 hidden md:block w-full pl-10 
                            sm:text-sm border-gray-300 focus:ring-black focus:border-black "
                            type="text" placeholder="Search"
                        />
                    </div>
                </div>


                {/* right */}

                <div className="flex items-center justify-end
                space-x-4">
                    <HomeIcon
                        onClick={() => router.push('/')}
                        className="navBtn" />
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />

                    {session ? (
                        <>
                            <PaperAirplaneIcon className="navBtn rotate-45" />
                            <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn block text-blue-400" />
                            <UserGroupIcon className="navBtn" />
                            <div className="relative navBtn">

                                <HeartIcon className="navBtn" />
                                <div className="absolute -top-2 -right-2 text-xs w-5 h-5
                        bg-red-500 rounded-full flex items-center justify-center
                       
                        ">
                                    3
                                </div>
                            </div>

                            <img
                                onClick={signOut}
                                src={session?.user?.image} alt=" "
                                className="h-10 w-10 rounded-full cursor-pointer"
                            />
                        </>

                    )
                        :
                        (
                            <button
                                className="text-xs md:text-lg"
                                onClick={signIn}>𝚂𝚒𝚐𝚗𝙸𝚗</button>
                        )
                    }

                </div>

            </div>
        </div>
    )
}

export default Header;
