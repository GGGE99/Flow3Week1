//Add imports here
import utils from "./utils"

const countryFacade = () => {
  const URL = "http://localhost:3333/"


  const getLabels = (callback) => {
    //TODO: Get Labels from server
    utils.fetchAny(URL + "labels", callback)
  }

  const getCountries = (callback) => {
    //TODO: Get Countries from server
    utils.fetchAny(URL + "countries", callback)
  }
  return {
    getLabels,
    getCountries
  }
}

export default  countryFacade();