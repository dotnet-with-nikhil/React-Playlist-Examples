import {Component} from 'react';

export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerrivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if(this.state.hasError){
            return(
                <div>
                    <h2>Something went wrong!</h2>
                </div>
            )
        }
        return this.props.children;
    }
}