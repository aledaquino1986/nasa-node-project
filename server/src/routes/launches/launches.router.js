const express = require("express");
const {httpGetAllLaunches, httpAddNewLunch, httpabortLaunch} = require("./launches.controller");
const launchesRouter = express.Router()


launchesRouter.get("/", httpGetAllLaunches)
launchesRouter.post("/", httpAddNewLunch)
launchesRouter.delete("/:id", httpabortLaunch)


module.exports = launchesRouter