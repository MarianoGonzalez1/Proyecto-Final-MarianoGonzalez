import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    // Verificar si el token está presente
    if (!token) return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado.' });

    // Verificar la validez del token
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
        // Si hay un error, el token es inválido
        if (err) return res.status(403).json({ message: 'Token inválido.' });
        
        next();// Si el token es válido, continuar con la siguiente función middleware
    });
};