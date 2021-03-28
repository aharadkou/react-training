import React, {FC} from 'react'
import '@/components/logo/Logo.scss'

interface LogoProps {

}

const Logo: FC<LogoProps> = () => (
    <p className="logo">
        <span>
            netflix
        </span>
        roulette
    </p>
)

export default Logo
