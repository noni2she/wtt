import React from 'react';

import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

export default class GotoTargetBtn extends React.Component {
    render() {
        return (
            <div className="goto-target">
                <ScrollLink
                    to={this.props.targetId}
                    spy
                    smooth
                    offset={-64}
                    duration={1000}
                >
                </ScrollLink>
            </div>
        );
    }
}