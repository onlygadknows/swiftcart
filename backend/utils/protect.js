import jwt from 'jsonwebtoken';

const protect = (req, res, next) => {
    // Get token from cookies, headers, or query parameters
    const token = req.cookies.jwt || req.headers.authorization?.split(' ')[1] || req.query.token;

    if (!token) {
        return res.status(401).json({ message: 'Authorization token missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Store decoded user information in request object
        next();
    } catch (error) {
        console.error('JWT Verification Error:', error);
        return res.status(401).json({ message: 'Invalid authorization token' });
    }
}

export default protect;
