import 'dotenv/config';
import express from 'express';
const app = express(); // express app
const PORT = process.env.PORT || 3000; 

//earlier we had to respond to so many routes, express things carefully about req
/*app wants repond a get request
app.get("/", (req, res) => { //on home route ,using req i csn extact all the data
  res.send("Hello from Heisenberg!"); // send a response
})
app.get("/say-my-name1", (req, res) => { 
  res.send("I do not have damn clue who the hell are you!"); 
})
app.get("/say-my-name2", (req, res) => { 
  res.send("You are Heisenberg!"); 
})
*/

//using express.json() middleware to parse JSON data, we want to accept json data
app.use(express.json()); // parse JSON data
let drugData = []; // array to store data
let nextId = 1; // id for unique identification

//not compulsory,post is standard to save data
/* ADD A DRUG */
app.post("/drugs", (req, res) => { //req,res given by express
  const { name, price } = req.body; //through req i can extract data(body), destructuring
  // const name = req.body.name; //alternative way to extract data

  //create a new drug object
  const newDrug = {
    id: nextId++,
    name,
    price
  };
  drugData.push(newDrug); 
  res.status(201).send(newDrug); // send response with status 201 (created)
})

/* GET ALL DRUG */
app.get("/drugs", (req, res) => {
  res.status(200).send(drugData);
})

/* GET A DRUG WITH ID*/
app.get("/drugs/:id1", (req, res) => { //:id1 is a route parameter
  const drug = drugData.find((drug) => drug.id === parseInt(req.params.id1)); //find the drug with the given id , params string format
  if (!drug) {
    return res.status(404).send("Drug not found"); //if not found, send 404 status
  }
  res.status(200).send(drug); //send the drug data
})
//to extact from body-> req.body, to extract from url-> req.params

/* UPDATE DRUG */ //have to give id
app.put("/drugs/:id1", (req, res) => {
    const drug = drugData.find((drug) => drug.id === parseInt(req.params.id1)); 
    if (!drug) 
    return res.status(404).send("Drug not found"); 

    const {name,price}=req.body;
    drug.name=name;
    drug.price=price;

    res.status(200).send(drug);
  

})

/* DELETE A DRUG */
app.delete("/drugs/:id1",(req,res) =>{
    const index=drugData.findIndex((drug)=> drug.id===parseInt(req.params.id1));
    if (index === -1) {
    return res.status(404).send("Drug not found");
    }
    drugData.splice(index,1);
    res.status(204).send("deleted");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
})




//their is an problem with use of port, if you try deploy in deigitalocean it will not work(security issuses with use of port no directly)
//we have to use env variables