import express from 'express';
import passport from 'passport';
var router = express.Router();

router.get('/auth/facebook', passport.authenticate('facebook'));
router.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    }
);

module.exports = router;