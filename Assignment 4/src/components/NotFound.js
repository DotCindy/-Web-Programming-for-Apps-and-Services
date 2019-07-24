import React from 'react';
import MainContainer from './MainContainer';

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <h1 className="page-header">Not Found</h1>
                <MainContainer>
                    <span>Page Not Found</span>
                </MainContainer>
            </div>
        );
    }
}

export default NotFound;