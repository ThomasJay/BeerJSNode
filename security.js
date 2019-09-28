exports.authentication = function(req, res, next) {

    let apiKey = req.header("apikey");

    console.log("In Security Auth apikey=" + apiKey);

    if (apiKey == "1122") {
        next();
    }
    else {

        res.status(401)
        res.end("{\"error\":\"Too bad for you!\"}")
    }

    

}