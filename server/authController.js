import express from 'express';
const router = express.Router();

function isAuthenticated(req, res, next) {
    if (req.user && req.user.authenticated) {
        return next();
    }
    res.redirect('/login');
}

router.get('/', isAuthenticated);

module.exports = router;
