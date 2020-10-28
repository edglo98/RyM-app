import React from 'react'
import "./styles.css"
// import PropTypes from 'prop-types'

function LoginPage( { history } ) {

    const handleLogin = () => {
        history.replace("/")
    }

    return (
        <div>
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}

LoginPage.propTypes = {

}

export default LoginPage

