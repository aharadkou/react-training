import React, {FC} from 'react'
import '@/features/movie/movie-card/MovieCard.scss'
import {Dropdown, DropdownButton} from '@/components/dropdown/Dropdown'
import {useModal} from '@/components/modal-provider/ModalProvider'
import Tag from '@/components/tag/Tag'
import {Movie} from '@/features/movie/movie'
import MovieEditModal from '@/features/movie/movie-edit-modal/MovieEditModal'
import MovieRemoveModal from '@/features/movie/movie-remove-modal/MovieRemoveModal'

interface MovieCardProps {
    className: string
    movie: Movie
}

const MovieCard: FC<MovieCardProps> = ({movie, className}) => {
    const {openModal} = useModal()

    const openMovieRemoveModal = () => {
        openModal(<MovieRemoveModal/>)
    }

    const openMovieEditModal = () => {
        openModal(<MovieEditModal/>)
    }

    return (
        <div className={`movie-card ${className}`}>
            <div className="movie-card__dropdown">
                <Dropdown>
                    <DropdownButton label="Edit" onClick={openMovieEditModal}/>
                    <DropdownButton label="Delete" onClick={openMovieRemoveModal}/>
                </Dropdown>
            </div>
            <img
                className="movie-card__image"
                src={movie.imageUrl}
                alt={movie.title}
            />
            <div className="movie-card__title-container">
                <h2 className="movie-card__title">
                    {movie.title}
                </h2>
                <Tag>
                    <>
                        {movie.year}
                    </>
                </Tag>
            </div>
            <p className="movie-card__categories">
                {movie.categories.join(', ')}
            </p>
        </div>
    )
}

export default MovieCard
