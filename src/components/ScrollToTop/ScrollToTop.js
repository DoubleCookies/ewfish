import { withRouter } from 'react-router-dom';
import { Component } from 'react';

/**
 * Special component for scroll to top on new page
 */
class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);
