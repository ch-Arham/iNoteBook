const jwt = require("jsonwebtoken");

const JWT_SECRET = "thisIsASecre$t";

//basically to authenticate token and get user.id
const fetchuser = (req, res, next)=>{
    //Get user from JWT and add id to req object
    
    // first we get the token from the header
    const token = req.header('auth-token');
    //verify that the token is given
    if(!token){
        res.status(401).send({error: "authenticate using a valid token"})
    }

    try {
        //return the decoded token --> data. Put in trycatch as jwt.verify can fail
        const data = jwt.verify(token, JWT_SECRET); 
        
        //console.log(req.user) //undefined as it is not present
        req.user = data.user; //pass the data (id) in req.user.id
        //console.log(req.user) //{id: '61b13105957a64ddbc5fa68a'} created
    } catch (error) {
        res.status(401).send({error: "authenticate using a valid token"})
    }
    next(); //next function should be executed --> the async (req,res) 3rd arg
}

module.exports = fetchuser;