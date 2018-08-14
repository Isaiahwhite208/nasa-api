import ApodData from "../models/ApodData.js";

const apiKey = 'swvf47pqUgXMteHr7PKgjIJRywVzAm2OV9eO7T3O'
const apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey

export default class ApodService {
  getPhoto(date, draw) {
    fetch(apodUrl + '&date=' + date)
      .then(res => res.json())
      .then(data => {
        debugger
        draw(new ApodData(data))
      })
  }
}