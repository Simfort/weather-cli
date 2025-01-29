import https from 'https'
import { getKeyValue } from './storage.service.js'
import { TOKEN_DICTIONARY } from './storage.service.js'
import { printError, printSuccess } from './log.service.js'

const getWeather=async(city)=>{
    const token =await getKeyValue(TOKEN_DICTIONARY.token)
    if(!token){
        printError('Не задан ключ API, задайте его через команду -t [API_KEY]')
    }
    const res =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&lang=ru&units=metric`)
    const data=await res.json()
     if(data.cod=='404'){
            printError('Город не найден!')
            return false
    }else if(data.cod =='401'){
            printError('Неправильный токен!')
            return false
    }
    printSuccess('Город найден!')
    return data
   
}

export {getWeather}