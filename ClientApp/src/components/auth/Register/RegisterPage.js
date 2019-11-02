import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {RegUser} from './reducer';
const propTypes ={
    register: PropTypes.func.isRequired,
    loading: PropTypes.bool.IsRequired
};

class RegisterPage extends Component {
    state = { 
        email: '',
        password: '',
        confirmPassword: '',
        loading: this.props.loading,
        errors: {}
    }
    UNSAFE_componentWillReceiveProps = (nextProps) => {
        console.log('Change props');
        this.setState({
            loading: nextProps.loading
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.register({email: ''});
    }
    render() { 
        console.log('----This props----', this.props);
        console.log('----This state----', this.state);
        const {email, password, confirmPassword, errors} = this.state;
        return ( <>
            <h2>User Registration</h2>
            <form name="form" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (!!errors.email ? ' has-error' : '')}>
                    <label htmlFor="username">Enail</label>
                    <input type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={this.handleChange} />
                    {!!errors.email &&
                        <div className="help-block">{errors.email}</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Reg Me!</button>
                </div>
            </form>
        </>
            
            );
    }
};
const mapState = (state) => {
    return{
        loading: state.register.loading
    }
}
RegisterPage.propTypes = propTypes;
export default connect(mapState, {register: userRegister})(RegisterPage);