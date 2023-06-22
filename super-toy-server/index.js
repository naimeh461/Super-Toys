const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()
const toy  = require("./data/toy.json")
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

//middleware
app.use(cors())
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tktqebe.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API 
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
    const toyCollection = client.db('superToy').collection('toys')
    const reviewCollection = client.db('superToy').collection('reviews')
    const addedToy = client.db('superToy').collection('addToy')

    app.get("/",async(req,res)=>{
        const toys = toyCollection.find();
        const result = await toys.toArray();
        res.send(result)
    })
    app.get("/reviews",async(req,res)=>{
        const reviews = reviewCollection.find();
        const result = await reviews.toArray();
        res.send(result)
    })
    app.get("/toys/:id",async(req,res)=>{
        const id= req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await toyCollection.findOne(query);
        res.send(result)
    })
    app.get("/addedDetails/:id",async(req,res)=>{
        const id= req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await addedToy.findOne(query);
        res.send(result)
      })
      
      app.get('/addedToy', async(req,res)=> {
              const sort = req.query.sort;
              const search = req.query.search;
              const query = {name: { $regex: search , $options: 'i' }}
              const options = {
                  sort: { 
                      "price": sort === 'asc' ? 1 : -1
                  }
                  
              };
        const addToys = addedToy.find(query, options).limit(20);
        const result = await addToys.toArray();
        res.send(result)
      })
    //user specific data
    app.get('/myAddedToys', async(req,res)=> {
        const sort = req.query.sort;
        const options = {
          sort: { 
              "price": sort === 'asc' ? 1 : -1
          }
          
      };
        let query = {};
        if(req.query?.email){
          query = {sellerEmail: req.query.email}
        }
        const result = await addedToy.find(query,options).toArray();
        res.send(result)
    })

    //user delete toys
    app.delete('/myAddedToysDelete/:id', async(req, res)=> {
       const id = req.params.id;
       const query = {_id: new ObjectId(id)}
       const result = await addedToy.deleteOne(query);
       res.send(result);
    })
    
    //user update toys
    app.patch("/myAddedToyUpdate/:id", async(req, res)=> {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const updatedToy = req.body;
      console.log(updatedToy);
      const updateDoc = {
        $set: {
          price: updatedToy.price,
          quantity : updatedToy.quantity,
          description : updatedToy.description
        },
      };
      const result = await addedToy.updateOne(filter,updateDoc)
      res.send(result)

    })
    app.post("/add-toy",async(req,res)=> {
        const toy = req.body;
        const result = await addedToy.insertOne(toy);
        res.send(result);
    })
    
    app.post("/reviews",async(req,res)=> {
        const review = req.body;
        console.log(review)
        const result = await reviewCollection.insertOne(review);
        res.send(result);
    })
    
      
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port,() => {
    console.log(`${port}`)
})