'use client'
import React from 'react'
import { env } from 'process'
export const  GraphqlPage=()=> {
    const [data,setData] = React.useState<any|null>(null)
    React.useEffect(() => {
        fetch(`${env.AUTH_URL}/api/graphql`,
            {
                method: "POST",
                body: JSON.stringify({
                    query: `query Query($name: String="graphql") { hello(name: $name) }
                  `,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((res) => res.json())
            .then((data) => {
                setData(data.data.hello)
            })
    })
 
    return (
        data && <div className='text-2xl rounded-md p-8 border border-dashed mx-auto max-w-3xl bg-gray-100 my-8'>
            {data?.data?.hello}
        </div>
    )
}
