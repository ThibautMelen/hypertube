const errorMessages = {
    'usernameExists': 'The username is not available',
    'emailExists':  'This email is already used',
    'loginError': 'Wrong username or password, please retry'
}

export default {
    getErrorMessage: (code) => {
        if (code && errorMessages[code]) {
            return errorMessages[code]
        }
        return 'Unknown error'
    }
}