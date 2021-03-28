import React, {FC} from 'react'
import '@/features/movie/movie-list/MovieList.scss'
import {Movie} from '@/features/movie/movie'
import MovieCard from '@/features/movie/movie-card/MovieCard'

const MOVIES: Movie[] = [
    {
        id: 0,
        title: 'Movie',
        categories: ['Action & Adventure', 'Drama'],
        year: 2005,
        imageUrl: 'https://i.pinimg.com/474x/00/01/fd/0001fda3e1554d3e707c05ab46cc9a9b.jpg',
    },
]

for (let i = 0; i < 10; i += 1) {
    MOVIES.push({
        ...MOVIES[0],
        id: i + 1,
        title: `${MOVIES[0].title}${i + 1}`,
        year: MOVIES[0].year + i + 1,

    })

    if (i === 1) {
        MOVIES[1].categories = MOVIES[1].categories.concat(MOVIES[1].categories).concat(MOVIES[1].categories)
    }
}

interface MovieListProps {

}

const MovieList: FC<MovieListProps> = () => (
    <div className="movie-list">
        <p className="movie-list__search-result">
            <span>
                {MOVIES.length}
            </span>
            results found
        </p>
        <div className="movie-list__items">
            {MOVIES.map(movie => (
                <MovieCard movie={movie} className="movie-list__item" key={movie.id}/>
            ))}
        </div>
    </div>
)

export default MovieList
