import Nasa from "../models/Nasa.js"

export default class NasaService {

 getNasa(draw, drawError) {
  fetch('https://api.nasa.gov/planetary/apod?api_key=sacGlNHmyRIDXS4x3JD0m5VfNKvRxZ0XZvkDO1Gx')
   .then(res => res.json())
   .then(res => {
    let myNasa = res.results.map(rawNasa => {
     let nasa = new Nasa(rawNasa)
     // nasa[nasa.id] = nasa
     return nasa
    })
    draw(myNasa)
   })
   .catch(drawError)
 }


}