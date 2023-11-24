

const numberOperation = (numb1,numb2,simbol) =>{


    let sum = 0

    if(simbol === "+"){

        sum = numb1 + numb2
        return sum

    }else if(simbol === "-"){

        sum = numb1 - numb2
        return sum

    }else if(simbol === "/"){

        sum = numb1 / numb2
        return sum

    }else if(simbol === "*"){

        sum = numb1*numb2
        return sum

    }


}

module.exports = numberOperation