document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
  
    if(input !== ''){
        showWarning('carregando...');
        
        try {
            let url = `https://api.weatherapi.com/v1/current.json?key=b04a2f30c2ba40b6aae194210250408&q=${encodeURIComponent(input)}`;
            let results = await fetch(url);

            if (!results.ok) {
                throw new Error('Erro na requisição');
            }

            let json = await results.json();
            
            
            showResults(json);
            
        } catch (error) {
            console.error('Erro:', error);
            showWarning('Erro ao carregar dados do clima');
        }
    } else {
        showWarning('Digite uma cidade');
    }
});


document.querySelector('#searchInput').addEventListener('input', () => {
    hideResults();
});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

function hideResults() {
    document.querySelector('.resultado').style.display = 'none';
    showWarning('');
}

function showResults(json) {
    showWarning(''); 
    
    
    document.querySelector('.titulo').innerHTML = `${json.location.name}, ${json.location.country}`;
    
    
    document.querySelector('.tempInfo').innerHTML = `${Math.round(json.current.temp_c)} <sup>ºC</sup>`;
    
    
    document.querySelector('.ventoInfo').innerHTML = `${Math.round(json.current.wind_kph)} <span>km/h</span>`;
    
    
    let windDegree = json.current.wind_degree;
    document.querySelector('.ventoPonto').style.transform = `rotate(${windDegree}deg)`;
    
    
    if (json.current.condition && json.current.condition.icon) {
        document.querySelector('.temp img').src = `https:${json.current.condition.icon}`;
    }
    
    
    document.querySelector('.resultado').style.display = 'block';
}