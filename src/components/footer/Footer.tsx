import React, {FC} from 'react'
import '@/components/footer/Footer.scss'
import Logo from '@/components/logo/Logo'

const Footer: FC = () => (
    <footer className="footer">
        <div className="footer__title logo">
            <Logo/>
        </div>
    </footer>
)

export default Footer
