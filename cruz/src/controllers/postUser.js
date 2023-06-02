const { User } = require('../db')


const postUser = async (req,res)=>{
try {
    const { email, password } = req.body
    if(!email || !password)return res.status(400).send('Faltan datos')
    
    const response = await User.findOrCreate({where:{email,password}})
    res.status(200).json(response)
} catch (error) {
    res.status(500).send(error.message)
}
    
};

module.exports = postUser

