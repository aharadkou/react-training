import React, {FC} from 'react'

import '@/features/movie/movie-form/MovieForm.scss'
import Input from '@/components/input/Input'

interface MovieFormProps {
    title: string
}

const MovieForm: FC<MovieFormProps> = ({title}) => (
    <form className="movie-form">
        <h2 className="movie-form__title">
            {title}
        </h2>

        <div className="movie-form__control">
            <label htmlFor="title">Title</label>
            <Input
                id="title"
                placeholder="Title here"
            />
        </div>

        <div className="movie-form__control">
            <label htmlFor="realease-date">Release date</label>
            <Input
                id="release-date"
                placeholder="Select date"
            />
        </div>

        <div className="movie-form__control">
            <label htmlFor="movie-url">Movie url</label>
            <Input
                id="movie-url"
                placeholder="Movie URL here"
            />
        </div>

        <div className="movie-form__control">
            <label htmlFor="genre">Genre</label>
            <Input
                id="genre"
                placeholder="Select genre"
            />
        </div>

        <div className="movie-form__control">
            <label htmlFor="overview">Overview</label>
            <Input
                id="overview"
                placeholder="Overview here"
            />
        </div>

        <div className="movie-form__control">
            <label htmlFor="runtime">Runtime</label>
            <Input
                id="runtime"
                placeholder="Runtime here"
            />
        </div>

        <div className="movie-form__buttons">
            <button
                type="button"
                className="movie-form__reset-btn"
            >
                Reset
            </button>
            <button
                type="button"
                className="movie-form__submit-btn"
            >
                Submit
            </button>
        </div>
    </form>
)

export default MovieForm
