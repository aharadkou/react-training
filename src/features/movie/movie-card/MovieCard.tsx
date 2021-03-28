import React, {FC} from 'react'
import '@/features/movie/movie-card/MovieCard.scss'
import Tag from '@/components/tag/Tag'
import {Movie} from '@/features/movie/movie'

interface MovieCardProps {
    className: string
    movie: Movie
}

const MovieCard: FC<MovieCardProps> = ({movie, className}) => (
    <div className={`movie-card ${className}`}>
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

export default MovieCard
