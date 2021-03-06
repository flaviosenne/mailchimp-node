const  request = require('request')
const axios = require('axios')
const routes = require('express').Router()

routes.post('/subscribe', (req, res) => {
    const { email, js} = req.body
    
    const mcData = {
        members: [
            {
                email_address: email,
                status: 'pending'
            }
        ]
    }

    const mcDataPost = JSON.stringify(mcData)

    const options = {
        url: 'https://us4.api.mailchimp.com/3.0/lists/11d5816018',
        method: 'POST',
        headers: {
            Authorization: 'auth 2b2b5567c7f6b1c7b5bf8f8e94caffdf-us1'
        },
        body: mcDataPost
    }

    if(!email) return res.status(404).json({message: 'Failed'})
    
    request(options, (err, response, body) => {
        if(err) return res.json(err)

        if(js) return res.sendStatus(200)

        return res.render('success')
    })
})

routes.post('/retrivie-password', (req, res) => {
    const {password} = req.body
    const {t} = req.query
   
    axios.post('http://localhost:81/v1/user/redefine-password', {token: t,
    password: Buffer.from(password).toString('base64')}).then(response => {
        res.json('success')
    }).catch(err => {
        console.log(err)
    })
    
})

routes.get('/', (req, res) => {
    res.render('index')
})

module.exports = routes