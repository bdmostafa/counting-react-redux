import React from 'react';
import { connect } from 'react-redux';
import Control from './Control';

const Count = props => {
    return (
        <div>
            <h2>The count is {props.count} </h2>
            <Control />
        </div>
    );
};

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Count);