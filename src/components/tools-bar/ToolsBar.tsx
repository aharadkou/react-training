import React, {FC, MouseEvent, useState} from 'react'
import '@/components/tools-bar/ToolsBar.scss'
import {Link} from './Link'

interface ToolsBarProps {
    links?: Link[]
    sortBy?: string[]
}

const ToolsBar: FC<ToolsBarProps> = ({links, sortBy}) => {
    const [activeLink, setActiveLink] = useState<Link>(links[0])

    const linkClicked = (event: MouseEvent<HTMLAnchorElement>, link: Link) => {
        event.preventDefault()
        setActiveLink(link)
    }

    return (
        <div className="tools-bar">
            <div className="tools-bar__inner">
                <div className="tools-bar__links-container">
                    {links.map(link => (
                        <a
                            className={`tools-bar__link ${activeLink.title === link.title ? 'active' : ''}`}
                            href={link.href || '#'}
                            key={link.title}
                            onClick={event => linkClicked(event, link)}
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
                <div className="tools-bar__sort-container">
                    <p className="tools-bar__sort-label">
                        Sort by
                    </p>
                    <div>
                        <select>
                            {sortBy.map(option => (
                                <option
                                    value={option}
                                    key={option}
                                >
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolsBar

ToolsBar.defaultProps = {
    links: [
        {
            title: 'All',
        },
        {
            title: 'Documentary',
        },
        {
            title: 'Comedy',
        },
        {
            title: 'Horror',
        },
        {
            title: 'Crime',
        },
    ],
    sortBy: ['Release date', 'Title'],
}
