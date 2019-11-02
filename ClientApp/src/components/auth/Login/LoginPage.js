import React, { Component } from 'react';

class LoginPage extends Component {
    state = { 
        email: '',
        password: '',        
        loading: false 
    }
    render() { 
        return ( <h1>User Login</h1> );
    }
}
 
export default LoginPage;