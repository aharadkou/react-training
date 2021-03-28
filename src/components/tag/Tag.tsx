import React, {FC} from 'react'
import '@/components/tag/Tag.scss'

interface TagProps {
    children: JSX.Element
}

const Tag: FC<TagProps> = ({children}) => (
    <span className="tag">
        {children}
    </span>
)

export default Tag
