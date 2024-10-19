
const User = require('../model/userModel')


const registerUser = async (req,res)=>
{
    const {username , password} = req.body
    try {
        const userExists = await User.findOne({username : username})
        if(userExists)
        {
            res.json('user already exists')
        }
        else
        {
            const newUser = await User.create({
                username : username,
                password : password
            })
            res.redirect('/login')
        }
        

    } catch (error) {
        console.log('error :', error)
    }
}







const loginUser = async (req,res)=>
{
    const {username , password} = req.body
    try {
        
        const user = await User.findOne({username : username})
        if(user)
        {
            if(user.password == password)
            {
                req.session.username = user.username
                res.redirect('/home')
            }
            else
            {
                res.json('wrong credentials')
            }
        }
        else
        {
             res.json('no user found')
        }

    } catch (error) {
        console.log("error :" ,error);
        
    }
}








module.exports = {registerUser , loginUser}