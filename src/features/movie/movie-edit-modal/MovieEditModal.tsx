import React, {FC} from 'react'

import '@/features/movie/movie-edit-modal/MovieEditModal.scss'
import MovieForm from '@/features/movie/movie-form/MovieForm'

const MovieEditModal: FC = () => (
    <MovieForm title="Edit movie"/>
)

export default MovieEditModal
