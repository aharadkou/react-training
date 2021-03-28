import React, {FC} from 'react'
import '@/components/input/Input.scss'

interface InputProps {
    className?: string
    placeholder?: string
}

const Input: FC<InputProps> = ({className, placeholder}) => (
    <input type="text" className={`input ${className}`} placeholder={placeholder}/>
)

export default Input
