import React, {Component} from 'react'
import '@/components/error-boundary/ErrorBoundary.scss'

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
    constructor(props: {}) {
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError() {
        return {hasError: true}
    }

    render() {
        const {children} = this.props
        const {hasError} = this.state

        if (hasError) {
            return (
                <div className="error-boundary">
                    <h1 className="error-boundary__message">Critical error!</h1>
                    <button
                        className="error-boundary__reload-btn"
                        type="button"
                        onClick={() => window.location.reload()}
                    >
                        Reload app
                    </button>
                </div>
            )
        }

        return children
    }
}

export default ErrorBoundary
