let  express = require('express');
let  app = express();   
const port=process.env.PORT || 3000;
app.use(express.static('frontend'));
app.listen(port, function() {
    console.log("Server is running on port " + port);
});
