'use client'
import Image from "next/image";
import Logo from "../../public/logo.svg"
import { redirect } from 'next/navigation';
import Link from "next/link";

export const HomePage = ({ children }: any) => {
  return (
    <div className="sm:grid sm:grid-cols-2 sm:min-h-screen">
      <div className="e">
        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-purple-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-20 after:dark:from-purple-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <Image onClick={() => redirect("/auth/signin")}
            className="relative z-10 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src={Logo}
            alt="nextee"
            width={300}
            height={200}
            priority
          />
        </div>
        <p className='text-2xl'>Welcome, Login <Link className="underline text-yellow-500" href="/auth/signin">here</Link></p>

        <div className="nedds">
          you will need the following variables in your env file. refer to example.env file
          <pre>
            <code>
              {`
                DATABASE_URL=dburl
                AUTH_SECRET=secret
                AUTH_URL=authirl
                TRPC_URL=$\{AUTH_URL}/api/trpc
              `}
            </code>
          </pre>
        </div>
      </div>
      <div className="bg-gray-500 m-8 p-8">

        {children}
      </div>
    </div>
  )
}
