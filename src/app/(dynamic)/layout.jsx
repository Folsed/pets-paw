import Interactions from '@/components/common/interactions/Interactions'
import React from 'react'

const DynamicLayout = ({ children }) => {
    return (
        <div>
            <div className='interactions'>
                <Interactions />
            </div>
            {children}
        </div>
    )
}

export default DynamicLayout
