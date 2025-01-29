const getArgs=(args)=>{
    const res={}
    const [exec,file,...argsSliced] =args
    let currCommand=argsSliced[0];
    if(argsSliced.length==1){
        res[currCommand.substring(1)]=true
        return res
    }
    for(let i=1;i<argsSliced.length;i++){
        if(argsSliced[i].startsWith('-')){
            if(!res[currCommand]){
                res[currCommand.substring(1)]=true
            }
            currCommand=argsSliced[i]
           if(!argsSliced[i+1]){
                res[currCommand.substring(1)]=true
                break
            }
        }else{
            res[currCommand.substring(1)]=argsSliced[i]
        }
    }
    return res
}

export {getArgs}