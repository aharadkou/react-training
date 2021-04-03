import React, {FC} from 'react'
import Logo from '@/components/logo/Logo'
import '@/components/modal/Modal.scss'
import {useModal} from '@/components/modal-provider/ModalProvider'
import useRefNotifyOnMissclick from '@/hooks/use-ref-notify-on-missclick'

const Modal: FC = () => {
    const {modalContent, isModalOpened, closeModal} = useModal()
    const {ref} = useRefNotifyOnMissclick(closeModal)

    return (
        <div
            className="modal"
            style={isModalOpened() ? {} : {display: 'none'}}
        >
            <div className="modal__logo">
                <Logo/>
            </div>
            <div
                className="modal__content"
                ref={ref}
            >
                <button
                    type="button"
                    className="modal__close-btn"
                    onClick={closeModal}
                >
                    <span/>
                </button>
                {modalContent}
            </div>
        </div>
    )
}

export default Modal
