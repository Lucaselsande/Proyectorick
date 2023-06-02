const { User } = require('../db')


const login = async(req, res) => {
try {
    const { email, password } = req.query

    if (!email || !password)return res.status(400).send('Faltan datos')

    const response = await User.findOne({ where: {email} })

    if(!response) return res.status(404).send('Usuario no encontrado')

    if (response.password !== password)return res.stauts(403).send("Contraseña incorrecta")

    res.status(200).json({ access: true }) 

} catch (error) {
    res.status(400).send(error.message)
}
}

module.exports = login


