import React, {FC, MouseEvent, useState} from 'react'
import '@/components/dropdown/Dropdown.scss'
import useRefNotifyOnMissclick from '@/hooks/use-ref-notify-on-missclick'

export const Dropdown: FC = ({children}) => {
    const [isOpened, setOpened] = useState(false)

    const {ref} = useRefNotifyOnMissclick(() => setOpened(false))

    return (
        <div
            className="dropdown"
            ref={ref}
        >
            <button
                type="button"
                className="dropdown__open-btn"
                onClick={() => setOpened(!isOpened)}
            >
                <span/>
            </button>
            {isOpened && (
                <div className="dropdown__content">
                    <button
                        type="button"
                        className="dropdown__close-btn"
                        onClick={() => setOpened(false)}
                    >
                        <span/>
                    </button>
                    {children}
                </div>
            )}
        </div>
    )
}

interface DropdownButtonProps {
    label: string
    onClick: (event: MouseEvent<HTMLElement>) => void
}

export const DropdownButton: FC<DropdownButtonProps> = ({label, onClick}) => (
    <button
        type="button"
        className="dropdown-btn"
        onClick={onClick}
    >
        {label}
    </button>
)
