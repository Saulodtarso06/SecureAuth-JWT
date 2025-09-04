//authentication
app.post("/login", (req, res) => {
    //esse teste abaixo deve ser feito no seu banco de dados
    if (req.body.user === "luiz" && req.body.password === "123") {
        //auth ok
        const id = 1; //esse id viria do banco de dados
        const token = jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: parseInt(process.env.JWT_EXPIRES)
        });
        return res.json({ token: token });
    }

    res.status(401).json({ message: "Invalid credentials!" });
})
