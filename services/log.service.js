import chalk from "chalk"

const printError=(err)=>{
    console.log(chalk.bgRed(' ERROR ')+err)
}
const printSuccess=(msg)=>{
    console.log(chalk.bgGreen(' SUCCESS ')+msg)
}
const printHelp=()=>{
    console.log(`${chalk.bgYellow(' HELP ')} \n
    Без параметров - вывод погоды
    -s [CITY] - для установки города
    -h - для вывода помощи
    -t [API_KEY] -для сохранения токена
    `)
}
export {printError,printSuccess,printHelp}