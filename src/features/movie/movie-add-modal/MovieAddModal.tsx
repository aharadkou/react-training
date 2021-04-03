import React, {FC} from 'react'

import '@/features/movie/movie-add-modal/MovieAddModal.scss'
import MovieForm from '@/features/movie/movie-form/MovieForm'

const MovieAddModal: FC = () => (
    <MovieForm title="Add movie"/>
)

export default MovieAddModal
