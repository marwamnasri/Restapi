const express = require('express')
const { MongoClient, ObjectID} = require('mongodb')
const bodyparser = require('body-parser')
const assert = require('assert')
const cors = require('cors')

const app=express()
app.use(bodyparser.json())
app.use(cors())

const mongo_url='mongodb://localhost:27017'
const database ="second-db"
MongoClient.connect(mongo_url,{ useUnifiedTopology: true },(err,client)=>{
    assert.equal(err, null,'database cnx is failed')
    const db=client.db(database)
    
    app.post('/addprod', (req,res)=>{
        let newprod = req.body
        db.collection('product').insertOne(newprod,(err,data)=>{
            if(err) res.send('cant add product')
            else res.send(data)
        })
})
    app.get('/afficheprod', (req,res)=>{
        db.collection('product').find().toArray((err,data)=>{
            if(err) console.log(err)
            else res.send(data)
            
        })
    })

    app.put('/modifyprod/:id', (req,res)=>{
        let id= ObjectID(req.params.id)
        let modprod= req.body
        db.collection('product').findOneAndReplace({_id:id},{...modprod},(err,data)=>{
           if(err) res.send('cant modify product')
           else res.send('product was modified')
        })
    })

    app.delete('/deleteprod/:id', (req,res)=>{
        let prodremove= ObjectID(req.params.id)
        db.collection('product').findOneAndDelete({_id:prodremove},(err,data)=>{
            if(err) res.send('cant delete the product')
            else res.send('product was deleted')
        })

    })

})




app.listen(4000, (err)=>{
    if(err) console.log('sever err')
    else console.log('is running')
})