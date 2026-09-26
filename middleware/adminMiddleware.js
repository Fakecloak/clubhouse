exports.ensureAdmin = (req, res, next) => {
    if(req.isAuthenticated() && req.user.is_admin) {
        return next();
    }
    res.status(403).send('Access denied. Admins only.');
}