const Elearning = require('../models/Elearning');
const { responseGenerator } = require('../constants/response-generator');


const saveElearningData = (req, res) => {
    try {
    const elearning = new Elearning(req.body);
    elearning
    .save()
    .then(data => {
        return responseGenerator(res, data, 200, "Successfully Data Saved", {})
    })
    .catch(err => {
        console.error("Some Error Occured on Saving Data", err);
        return responseGenerator(res, {}, 400, "Error in saving data", err)

    })
    } catch (error) {
        console.error("Some Error Occured on Saving Data", error);
    }
}

const getElearningFilterData = (req, res) => {
    try {
        const query = JSON.parse(req.query.queryData)
        Elearning
        .find(query)
        .then(data => {
        return responseGenerator(res, data, 200, "Data Fetch Successfully", {})
        })
        .catch(err => {
        return responseGenerator(res, {}, 400, "Error inFetch Successfully", err)
        })
    } catch (error) {
        console.error("Some Error Occured on Fetching Data", error);
    }
   
}





module.exports = {
    saveElearningData,
    getElearningFilterData
}