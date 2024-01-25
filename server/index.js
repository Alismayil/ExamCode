
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const {Schema} = mongoose;

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const ExamSchema = new Schema({
    image: String,
    name: String,
    comment: String,
    price: Number,

  });
const Bilet2 = mongoose.model('Bilet2', ExamSchema);

app.get('/exam',async (req, res) => {
    const data=await Bilet2.find({})
  res.send(data)
})

app.get('/exam/:id',async (req, res) => {
   try {
    const {id}=req.params
    const data=await Bilet2.findById(id)
  res.status(200).send(data)
   } catch (error) {
  res.status(404).send(error)
    
   }
})

app.delete('/exam/:id',async (req, res) => {
    try {
     const {id}=req.params
     const data=await Bilet2.findByIdAndDelete(id)
   res.status(200).send("Deleted Product")
    } catch (error) {
   res.status(404).send("Not Deleted Product")
     
    }
 })

app.post('/exam',async (req, res) => {
    try {
     const data=new Bilet2(req.body)
     await data.save()
   res.status(200).send("Create new Product")
    } catch (error) {
   res.status(404).send("Not Cretaed")
     
    }
 })

mongoose.connect('mongodb+srv://AliIsmayil:ali123@cluster0.tzldidp.mongodb.net/')
  .then(() => console.log('Connected!'));
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})