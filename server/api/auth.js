import express from 'express';
import passport from 'passport';
const router = express.Router();

router.get('/auth/facebook', passport.authenticate('facebook'));
router.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' })
);

const protectRoutes = ['/', '/resume'];

protectRoutes.map(route => {
    router.get(
        route,
        passport.authenticate('facebook', { failureRedirect: '/login' })
    );
});

module.exports = router;