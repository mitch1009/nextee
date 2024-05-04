import React from 'react'
import { env } from 'process'
export default async function GraphqlPage() {
    const data = await fetch(`${env.AUTH_URL}/api/graphql`,
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
    ).then((res) => res.json());
    return (
        data && <div className='text-2xl rounded-md p-8 border border-dashed mx-auto max-w-3xl bg-gray-100 my-8'>
            {data.data.hello}
        </div>
    )
}
