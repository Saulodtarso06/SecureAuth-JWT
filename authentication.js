//authentication

const fs = require("fs");
app.post('/login', (req, res, next) => {
    //esse teste abaixo deve ser feito no seu banco de dados
    if (req.body.user === 'luiz' && req.body.password === '123') {
        //auth ok
        const userId = 1; //esse id viria do banco de dados

        const privateKey = fs.readFileSync('./private.key', 'utf8');
        const token = jwt.sign({ userId }, privateKey, {
            expiresIn: parseInt(process.env.JWT_EXPIRES),
            algorithm: "RS256"
        });

        return res.json({ token: token });
    }

    res.status(401).json({ message: 'Invalid credentials!' });
})
