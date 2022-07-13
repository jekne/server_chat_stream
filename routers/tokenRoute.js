const e = require("express");
const { Router } = require("express");
const router = new Router();


const StreamChat = require("stream-chat").StreamChat;
const API_KEY = process.env["API_KEY"];
const API_SECRET = process.env["API_SECRET"];

const serverClient = StreamChat.getInstance(API_KEY, API_SECRET);


// TOKEN ENDPOINT:

// IMPORTANT: When using server-side authentication; there will be no permission checking and you will be able to perform any valid request for any of your user.

//Obs: JWtoken is created locally. JWT is installed with stream-chat library.

//  Because the serverClient includes an app secret, the server is able to combine the given user id with the secret to generate a user specific token

// How to pass the 'userId' to URL via the query string
// http://localhost:3000/token?userId=theUserUsername

router.get("/", (req, res) => {

        const { userId } = req.query;
        console.log("My userID",userId);
     
        if (userId) {
          // Generate token
          const token = serverClient.createToken(userId);
          res.status(200).json({ token, status: "sucess" });
        } else {
          res.status(401).json({ message: "invalid request, you should provide a UserId", status: "error" });
        }
  
  });


  //WHAT I WANT TO USE.... I NEED HTTPIE FIRST
//   router.get("/:userId", async(req, res,next) => {

// try {
//     const params = req.params;
//     const userId = parseInt(req.params.userId);
//     console.log("my userId", userId);
    
//     // const { userId } = req.query;
//     console.log("My userID",userId);
 
  
//     if (userId) {
//       // Generate token
//       const token = serverClient.createToken(userId);
//       res.status(200).json({ token, status: "sucess" });
//     } else {
//       res.status(401).json({ message: "invalid request, you should provide a UserId", status: "error" });
//     }
// } catch (error) {
    
// }
// next(e);

// });



module.exports = router;