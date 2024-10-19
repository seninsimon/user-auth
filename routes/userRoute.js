const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const nocache = require('nocache');
router.use(nocache());




router.get('/signup', (req, res) => {
    res.render('signup')
})

router.post('/signup', userController.registerUser)





router.get('/login', (req, res) => {

    if(req.session.username)
    {
        console.log(req.session.username);
        res.redirect('/home')
    }
    else
    {
        res.render('login')
   }
    
})

router.post('/login', userController.loginUser)




router.get('/home',   (req, res) => {
    if(req.session.username)
    {  
        // res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
        res.render('home',{username : req.session.username})
    }
    else
    {
        res.redirect('/login')
        console.log("session expired")
    }
    
})


router.get('/logout',(req,res)=>
{
    req.session.destroy((err)=>
    {
        if(err)
        {
            res.redirect('/login')
        }

    })
    // res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.clearCookie('connect.sid');
    res.redirect('/login')
})


router.get('/',(req,res)=>
{
    res.redirect('/login')
})

module.exports = router