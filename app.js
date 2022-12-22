const inputUSD = document.querySelector('#inputUSD')
const inputKGS = document.querySelector('#inputKGS')
      
inputKGS.addEventListener('input', () => {
    const req = new XMLHttpRequest()

    req.open('GET', 'data.json')
    req.setRequestHeader('Content-Type', 'application/json')
    req.send()

    req.addEventListener('readystatechange', () => {
        if(req.readyState === 4 && req.status === 200){
            console.log(req.response)

            const data = JSON.parse(req.response)

            inputUSD.value = +inputKGS.value/data.current.usd + " $"
        }else {
            inputUSD.value = 'Error!'
        }
    })
})
