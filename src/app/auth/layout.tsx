import { clx } from '@/lib'
import React from 'react'
import "./styles.css"
import Image    from 'next/image'
import { INexteeConfig, themeConfig } from '@/config'
function layout({ children }: any) {
    const {auth}: Partial<INexteeConfig>| INexteeConfig= themeConfig()
    return (
        <div className='grid grid-cols-4'>

            <div className={clx(auth?.layout==='image-left' ? 'order-first' : 'order-last','col-span-2  min-h-screen h-screen')}>
                <img alt="side image"  src="@/images/im.png"/>
                <p>Exposed</p>
            </div>
            <div className="col-span-2">{children}</div>
        </div>
    )
}

export default layout