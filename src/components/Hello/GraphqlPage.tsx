import React from 'react'
export const GraphqlPage = ({ data }: any) => {
    return (
        data ? <div className='text-2xl rounded-md p-8 border border-dashed mx-auto max-w-3xl bg-gray-100 my-8'>
            {data?.data.hello}

        </div> :
            <div className='text-2xl rounded-md p-8 border border-dashed mx-auto max-w-3xl bg-gray-100 my-8'>
                Loading... or nothing here {data}
            </div>

    )
}
