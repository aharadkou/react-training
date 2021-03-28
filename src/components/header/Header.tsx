import React, {FC} from 'react'
import '@/components/header/Header.scss'
import Input from '@/components/input/Input'
import Logo from '@/components/logo/Logo'

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => (
    <header className="header">
        <div className="header__top-container">
            <Logo/>
            <button type="button" className="header__add-movie-btn">+ Add movie</button>
        </div>
        <div className="header__search-container">
            <h1 className="header__search-title">Find your movie</h1>
            <div className="header__search-input-container">
                <Input
                    className="header__search-input"
                    placeholder="What do you want to watch?"
                />
                <button type="button" className="header__search-btn">Search</button>
            </div>
        </div>
    </header>
)

export default Header