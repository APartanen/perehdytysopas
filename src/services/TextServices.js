import axios from 'axios'
const baseUrl = 'http://localhost:3001/tekstit'
//hakee tekstit


const getTekstit = () => {
  return axios.get(baseUrl)
}


//tarpeellinen tämän varoituksen poistoon: https://stackoverflow.com/questions/64729264/how-can-i-get-rid-of-the-warning-import-no-anonymous-default-export-in-react
const TextServices = { getTekstit }
export default TextServices;