const bcrypt = require('bcrypt')

module.exports = {
    hashPassword: async (password) => {
        try {
            let hash = await bcrypt.hash(password, 5)
            return hash
        }
        catch (error) {
            throw error
        }
    },

    comparePassword: async (password, hash) => {
        try {
            let res = bcrypt.compare(password, hash)
            if (res) {
                return true
            }
            return false
        }
        catch (error) {
            throw error
        }
    }
}