

const drawChart = async () => {
    const data = await getData();
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: { 
            labels: data.years,
            datasets: [{
                label: 'Global Average Temperature',
                data: data.temp,
                fill: false,
                backgroundColor: 
                    'rgba(255, 99, 132, 0.2)',  
                borderColor: 
                    'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        callback: (value,index,values) => {
                            return value + 'º';
                        }
                    }
                }]
            }
        }
    });
}




const getData = async () => {
    const years = [];
    const temp = [];
    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();
    table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        years.push(columns[0]);
        temp.push(parseFloat(columns[1]) + 14);
    })
    return { years, temp}
}



drawChart();
