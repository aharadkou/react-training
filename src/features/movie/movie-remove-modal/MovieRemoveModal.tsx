import React, {FC} from 'react'

import '@/features/movie/movie-remove-modal/MovieRemoveModal.scss'
import {useModal} from '@/components/modal-provider/ModalProvider'

const MovieRemoveModal: FC = () => {
    const {closeModal} = useModal()

    return (
        <div className="movie-remove-modal">
            <p className="movie-remove-modal__title">Delete movie</p>
            <p>Are you sure want to delete this movie?</p>
            <button
                className="movie-remove-modal__confirm-btn"
                type="button"
                onClick={closeModal}
            >
                Confirm
            </button>
        </div>
    )
}

export default MovieRemoveModal
