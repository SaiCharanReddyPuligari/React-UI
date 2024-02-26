import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        //console.log(data);
    }, [currency])
    //console.log(data);
    return data
}

export default useCurrencyInfo;

//this works similar to useState, that is we give a value and the funntion returns a value after evaluating
//here we take currency{count} perform the function and return data {counter + 1}
//let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
//replace ${currency} with usd, inr, yen, etc
