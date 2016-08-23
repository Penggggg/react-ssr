import React, { PureComponent } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router';


export default class IComponent extends PureComponent {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Link to="/todo" >Todo</Link>
                { this.props.children }
            </div>
        )
    }
}
