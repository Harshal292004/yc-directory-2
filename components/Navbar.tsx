"use client"
import Link from "next/link";
import Image from "next/image";
import logo from '../public/logo.png'
import { useSession, signIn, signOut } from "next-auth/react";
const Navbar = () => {
    const { data: session } = useSession();
    return (
        <header className="px-5 py-3 bg-zinc-600 shadow-sm shadow-slate-400">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src={logo} alt="logo" width={144} height={30} />
                </Link>

                <div className="flex items-center gap-5 text-slate-300">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span className="max-sm:hidden">Create</span>
                            </Link>

                            <button 
                                type="button" 
                                onClick={() => signOut()} 
                                className="max-sm:hidden"
                            >
                                Logout
                            </button>
                            <Link href={`/user/${session.user.email}`}></Link>
                        </>
                    ) : (
                        <button 
                            type="button" 
                            onClick={() => signIn()} 
                            className="max-sm:hidden"
                        >
                            Login
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
