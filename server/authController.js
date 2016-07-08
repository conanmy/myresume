import express from 'express';
const router = express.Router();

function isAuthenticated(req, res, next) {
    if (req.user && req.user._id) {
        return next();
    }
    res.redirect('/login');
}

const protectRoutes = ['/'];

protectRoutes.map(route => {
    router.get(
        route,
        isAuthenticated
    );
});

module.exports = router;
