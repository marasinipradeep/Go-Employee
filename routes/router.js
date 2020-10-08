
module.exports = function (app) {

    app.get("/",  function (req, res) {
        res.send("server is up and running");
    
    })

};