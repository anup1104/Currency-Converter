let btn = document.querySelector('#btn');
btn.addEventListener('click',()=>{
    const amt = document.querySelector('#amt').value;
    const from = document.querySelector('#from').value;
    const to = document.querySelector('#to').value;
    
    // const key = 'd98399d936-209cd2deaa-sp0f8d';
    const url = `https://api.exchangerate-api.com/v4/latest/${from}`;

    fetch(url)
    .then((response)=>{
        
        return response.json();
    })
    .then((data)=>{
        // console.log(data.rates[to])
        alert(data.rates[to] * amt);
    })
    .catch(()=>{
        console.log("There is some error");
    });

})