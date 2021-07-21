const {getAllLaunches, addNewLaunch, existsLaunchWithId, abortLaunchById} = require("../../models/launches.model")


function httpGetAllLaunches(req, res) {
  console.log("llego")
return res.status(200).json(getAllLaunches())
}

function httpAddNewLunch(req, res) {
  const launch = req.body

   if (!launch.mission || !launch.target || !launch.rocket || !launch.launchDate) {
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

function httpabortLaunch(req, res) {
const launchId = +req.params.id
 
if (!existsLaunchWithId(launchId)) {
  return res.status(404).json({
    error: "Launch not found"
  })
}

const aborted = abortLaunchById(launchId)
return res.status(200).json(aborted)
 
}

module.exports = {httpGetAllLaunches, httpAddNewLunch, httpabortLaunch}