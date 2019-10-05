import React from 'react'
import ReactDOM from 'react-dom'
import PageManager from '../page-manager'

const HelloWorld = (props) => (
    <div>
        <p>Hello World from React!</p>
        <p>Here are my props:</p>
        <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
)

export default class ReactDemo extends PageManager {
    onReady() {
        const container = $('#root')[0]
        ReactDOM.render(<HelloWorld context={this.context}/>, container)
    }
}
