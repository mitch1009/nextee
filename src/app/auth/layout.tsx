import { INexteeConfig, themeConfig } from '@/root/config'
import React from 'react'

function layout({ children }: any) {
    const config: Partial<INexteeConfig> = themeConfig()
    return (
        <div className='grid gid-cols-3'>
            <div className="col-span-1">
                <pre>
                    {JSON.stringify(config, null, 2)}
                </pre>
            </div>
            <div className="col-span-2">{children}</div>
        </div>
    )
}

export default layout