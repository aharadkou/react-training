import React from 'react'
import '@/App.scss'
import ErrorBoundary from '@/components/error-boundary/ErrorBoundary'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import ToolsBar from '@/components/tools-bar/ToolsBar'
import MovieList from '@/features/movie/movie-list/MovieList'

function App() {
    return (
        <ErrorBoundary>
            <div className="app">
                <div className="app__content">
                    <Header/>
                    <div className="separator"/>
                    <ToolsBar/>
                    <MovieList/>
                </div>
                <Footer/>
            </div>
        </ErrorBoundary>
    )
}

export default App
