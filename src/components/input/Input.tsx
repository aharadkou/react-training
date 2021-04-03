import React, {FC} from 'react'
import '@/components/input/Input.scss'

interface InputProps {
    className?: string
    placeholder?: string
    id?: string
}

const Input: FC<InputProps> = ({className, placeholder, id}) => (
    <input
        type="text"
        className={`input ${className}`}
        placeholder={placeholder}
        id={id}
    />
)

export default Input
