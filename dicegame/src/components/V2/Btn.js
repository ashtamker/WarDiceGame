import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';


 class Btn extends React.Component {
    render() {
        return (
            <div>
                <button className="btn" onClick={this.props.onClick}>{this.props.name}
                <FontAwesomeIcon icon={faDice} />
                </button>
            </div>
        )
    }
}

export default Btn;