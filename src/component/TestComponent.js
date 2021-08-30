import React from 'react';

class TestComponent extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}

export default TestComponent;