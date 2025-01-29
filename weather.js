#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"
import { getWeather } from "./services/api.service.js"
import { printError, printHelp, printSuccess } from "./services/log.service.js"
import chalk from "chalk"
import {  saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js"

const saveToken=async (token)=>{
    if(!token.length){
        printError('Не передан token')
    }
    try{
        await saveKeyValue(TOKEN_DICTIONARY.token,token)
        printSuccess('Токен сохранен')
    }catch(e){
        printError(e.message)
    }
    
}

const toFormatWeather=(weather)=>{
  
    console.log(`Сегодня в ${weather.name} ${chalk.bold(chalk.bgCyan(weather.weather[0].description))} ${chalk.yellow(chalk.bold(':)'))}
    /---------- ${chalk.bold(chalk.green('Тепло ,или не тепло вот в чем вопрос'))}
    Температура: ${chalk.bold(weather.main.temp)}C*
    Температура по ощущениям: ${chalk.bold(weather.main.feels_like)}C*
    Температура макс: ${chalk.bold(weather.main.temp_min)}C*
    Температура мин: ${chalk.bold(weather.main.temp_max)}C*
    /---------- ${chalk.bold(chalk.green('Ветерок'))}
    Скорость: ${chalk.bold(weather.wind.speed)}(км/ч)
    `)
}
const getForcast=async (city)=>{
    try{
        const weather=await getWeather(city)
        toFormatWeather(weather)
       
    }catch(e){
       console.log(e)
    }
 
}

const initCLI=()=>{
    const args =getArgs(process.argv)
    if(args.h){
        printHelp()
    }
    if(args.s){
       getForcast(args.s)
    }
    if(args.t){
        saveToken(args.t)
    }
}

initCLI()