const validateNewUser = (req, res, next) => {
    try {
        const { username, email, password, confirmPassword } = req.body;

        if (!username || !email || !password || !confirmPassword) {
            throw Object.assign(Error("Please provide all required fields"), { code: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw Object.assign(Error("Please provide a valid email address"), { code: 400 });
        }

        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        if (!passwordRegex.test(password)) {
            throw Object.assign(Error("Password must be 6 characters long and include a letter and a number"), { code: 400 });
        }

        if (password !== confirmPassword) {
            throw Object.assign(Error("Password and confirm password must match"), { code: 400 });
        }

        next();
    } catch (err) {
        next(err);
    }
};

module.exports = validateNewUser;