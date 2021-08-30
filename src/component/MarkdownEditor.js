import React from 'react';
import { Remarkable } from 'remarkable';

class MarkdownEditor extends React.Component {

    constructor(props) {
        super(props);
        this.md = new Remarkable();
        this.state = {
            value : 'Hello, **world**!'
        };
    }

    handleChange = (e) => {
        this.setState(state => ({
            value : e.target.value
        }))
    }

    getRawMarkup() {
        return {
            __html: this.md.render(this.state.value)
        };
    }

    render() {
        return (
            <div className="MarkdownEditor">
                <h3>Input</h3>
                <label htmlFor="markdown-content">Enter some markdown</label>
                <textarea id="content"
                onChange={this.handleChange}
                defaultValue={this.state.value}/>
                <h3>Output</h3>
                <div className="content"
                dangerouslySetInnerHTML={this.getRawMarkup()}/>
            </div>
        );
    }
}

export default MarkdownEditor;