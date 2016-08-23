import React, { PureComponent } from 'react';
import { observer } from 'mobx-react';


export default class BComponent extends PureComponent {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                I am BComponent
            </div>
        )
    }
}
