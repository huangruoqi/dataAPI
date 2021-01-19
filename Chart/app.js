const getData = async () => {
    const years = [];
    const temp = [];
    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();
    table = data.split('\n').slice(0);
    table.forEach(row => {
        const columns = row.split(',');
        years.push(conlums[-1]);
        temp.push(parseFloat(columns[0]) + 14);
    })

}