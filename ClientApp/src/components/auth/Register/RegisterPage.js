import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const propTypes ={
    loading: PropTypes.bool.IsRequired
};
class RegisterPage extends Component {
    state = { 
        email: '',
        password: '',
        confirmPassword: '',
        loading: false 
    }
    render() { 
        console.log('----This props----', this.props);
        return ( <h1>User Registration</h1> );
    }
};
const mapState = (state) => {
    return{
        loading: state.register.loading
    }
}
RegisterPage.propTypes = propTypes;
export default connect(mapState)(RegisterPage);