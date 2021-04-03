import React, {FC} from 'react'
import '@/components/tag/Tag.scss'

const Tag: FC = ({children}) => (
    <span className="tag">
        {children}
    </span>
)

export default Tag
