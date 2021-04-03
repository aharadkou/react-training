import React from 'react'
import '@/App.scss'
import ErrorBoundary from '@/components/error-boundary/ErrorBoundary'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import ModalProvider from '@/components/modal-provider/ModalProvider'
import Modal from '@/components/modal/Modal'
import ToolsBar from '@/components/tools-bar/ToolsBar'
import MovieList from '@/features/movie/movie-list/MovieList'

function App() {
    return (
        <ErrorBoundary>
            <ModalProvider>
                <div className="app">
                    <div className="app__content">
                        <Header/>
                        <div className="separator"/>
                        <ToolsBar/>
                        <MovieList/>
                    </div>
                    <Footer/>
                </div>
                <Modal/>
            </ModalProvider>
        </ErrorBoundary>
    )
}

export default App
