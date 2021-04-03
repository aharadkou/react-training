import {useEffect, useRef} from 'react'

const useRefNotifyOnMissclick = (notify: () => void) => {
    const ref = useRef(null)

    const handleClickOutside = (event: {target: any}) => {
        if (ref.current && !ref.current.contains(event.target)) {
            notify()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    })

    return {ref}
}

export default useRefNotifyOnMissclick
