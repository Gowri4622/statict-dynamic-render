const express=require('express')
const router = express.Router()

router.get('/new',(request,response)=>{
    response.render('service/new')
})

router.get('/:id',(request,response)=>{
    const userid=(request.params.id)
    response.send('Get user with userid '+userid)
})


router.post('/',(request,response)=>{
    const isAValidUser=true
    if(isAValidUser){
        service.push({id:request.body.id,service:request.body.service})
        response.redirect(`service/${service.length-1}`)
        // console.log(service)
    }
    else{
        console.log("Error");
        response.render('service/new',{id:request.body.id,name:request.body.service})
    }
    // console.log(request.body.firstname);
    // response.send('new user found')
})

const service = [{
    id:0,
    service:'Mobile development'
},
]
module.exports=router