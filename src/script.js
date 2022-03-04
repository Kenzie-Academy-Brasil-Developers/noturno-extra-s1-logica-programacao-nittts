const calculateSalary = (salary,sales) => {
    let results = 0;
    
    if(sales <= 1200) {
        results = salary + (salary * 0.03) 
    }
    else {
        results = ((sales - salary) * 0.05) + (salary + (salary * 0.03))
    }

    return results
}

const calculateStock = (qtdAtual,max,min) => {
    const avg = (max + min) / 2

    if(qtdAtual >= avg) {
        return "Nao efetue a compra"
    }

    return "Efetuar Compra"
}   

const calculateAge = (age) => {
    const month = age * 12
    const days = age * 365.25
    const weeks = age * 52.179

    return `Voce tem ${age} anos, ou ${month} meses, como tambem pode ser dito ${weeks} semanas, ou simplesmente ${days} dias de vida :)`
}

const getDiagonal = (matriz) => {
    let result = [];
    let diag = 0;
    for(let i = 0; i < matriz.length; i++) {
        result.push(matriz[i][diag])
        diag++
    }

    return result
}

const cashMachine = (money) => {
    let resultArr = [];
    let cem = money % 100;
    let cinquenta = 0;
    let vinte = 0;
    let dez = 0;
    let dois = 0;
    let um = 0;
    if(cem >= 0) {
        resultArr.push(`${Math.floor(money / 100)} nota(s) de cem`)
    }
    if(cem >= 50) {
        cinquenta = cem % 50;
        resultArr.push(`${Math.floor(cem / 50)} nota(s) de cinquenta`)
    }
    if(cinquenta >= 20) {
        vinte = cinquenta % 20;
        resultArr.push(`${Math.floor(cinquenta / 20)} nota(s) de vinte`)
    }
    if(vinte >= 10) {
        dez = vinte % 10;
        resultArr.push(`${Math.floor(vinte / 10)} nota(s) de dez`)
    }
    if(dez >= 2) {
        dois = dez % 2;
        resultArr.push(`${Math.floor(dez / 2)} nota(s) de dois`)
    }
    if(dois == 1) {
        um = dois % 2;
        resultArr.push(`${(dois)} nota(s) de um`)
    }
    return resultArr.join(", ")
}
