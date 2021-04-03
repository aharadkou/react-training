import React, {
    FC,
    createContext,
    useState,
    useContext,
    ReactElement,
} from 'react'

interface ModalState {
    isModalOpened: () => boolean
    modalContent: ReactElement
    openModal: (content: ReactElement) => void
    closeModal: () => void
}

const ModalContext = createContext<ModalState>(null)

export const useModal = () => useContext(ModalContext)

const ModalProvider: FC = ({children}) => {
    const [modalContent, setModalContent] = useState<ReactElement>(null)

    const closeModal = () => setModalContent(null)

    const openModal = (content: ReactElement) => setModalContent(content)

    return (
        <ModalContext.Provider
            value={{
                isModalOpened: () => !!modalContent,
                openModal,
                closeModal,
                modalContent,
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
