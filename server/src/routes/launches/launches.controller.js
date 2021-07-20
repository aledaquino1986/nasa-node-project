const {getAllLaunches, addNewLaunch} = require("../../models/launches.model")


function httpGetAllLaunches(req, res) {
  console.log("llego")
return res.status(200).json()
}

function httpAddNewLunch(req, res) {
  const launch = req.body

   if (!launch.mission || !launch.destination || !launch.rocket || !launch.launchDate) {
     return res.status(400).json({
       error: "data is missing"
     })

   }
  launch.launchDate = new Date(launch.launchDate)
  if (isNaN(launch.launchDate))  {
    return res.status(400).json({error: "Invalid launch Date"})
  }
  addNewLaunch(launch)

 return res.status(201).json(launch)
}

module.exports = {httpGetAllLaunches, httpAddNewLunch}