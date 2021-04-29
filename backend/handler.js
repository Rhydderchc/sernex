const nasa = require('nasa-sdk');
nasa.setNasaApiKey('YOUR_NASA_API_KEY')
exports.SPACE_DAILY = function(req, res){
nasa.APOD.fetch().then(data=>{
    let image = data.hdurl;
    let description = data.description;
    res.json({
        image:image,
        description:description,
        credits:"The NASA Development Team",
        
    })
}).catch(err=>{
    res.status(500).json({
        error:"Could not fetch new data."
    })
})
}

exports.STATIC_SERVE = function(req, res){
    res.sendFile("../public/index.html")
}
