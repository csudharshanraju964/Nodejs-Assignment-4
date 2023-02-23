const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send({ message: "Hello world!" });
});

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.post("/add", (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const result = num1 + num2;
  
    if (isNaN(num1) || isNaN(num2)) {
      return res.json({
        status: "error",
        message: "Invalid data types"
      });
    }
  
    if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
      return res.json({
        status: "error",
        message: "Underflow"
      });
    }
  
    if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
      return res.json({
        status: "error",
        message: "Overflow"
      });
    }
  
    return res.json({
      status: "success",
      message: "The sum of given two numbers",
      result: result
    });
});
  
app.post("/sub", (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const result = num1 - num2;
  
    if (isNaN(num1) || isNaN(num2)) {
      return res.json({
        status: "error",
        message: "Invalid data types"
      });
    }
  
    if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
      return res.json({
        status: "error",
        message: "Underflow"
      });
    }
  
    if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
      return res.json({
        status: "error",
        message: "Overflow"
      });
    }
  
    return res.json({
      status: "success",
      message: "The difference of given two numbers",
      result: result
    });
});
app.post("/multiply", (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const result = num1 * num2;
  
    if (isNaN(num1) || isNaN(num2)) {
      return res.json({
        status: "error",
        message: "Invalid data types"
      });
    }
  
    if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
      return res.json({
        status: "error",
        message: "Underflow"
      });
    }
  
    if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
        return res.json({
          status: "error",
          message: "Overflow"
        });
      }
    
      return res.json({
        status: "success",
        message: "The product of given two numbers",
        result: result
      });
});
app.post("/divide", (req, res) => {
        const num1 = parseFloat(req.body.num1);
        const num2 = parseFloat(req.body.num2);
        const result = num1 / num2;
      
        if (isNaN(num1) || isNaN(num2)) {
          return res.json({
            status: "error",
            message: "Invalid data types"
          });
        }
      
        if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
          return res.json({
            status: "error",
            message: "Underflow"
          });
        }
      
        if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
            return res.json({
              status: "error",
              message: "Overflow"
            });
          }
        if(num2===0){
            return res.json({
                status:"error",
                message :  "Cannot divide by zero"

            });
        }
        
          return res.json({
            status: "success",
            message: "The division of given two numbers",
            result: result
          });
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;