// from data.js
var tableData = data;

// Identify the table and tbody
var tbody = d3.select('#ufo-table>tbody');

function buildTable(tableData){
tableData.forEach(record => {
    var row = tbody.append('tr')
/*
    row.append('td').text(record['datetime']);
    row.append('td').text(record['city']);
    row.append('td').text(record['state']);
    row.append('td').text(record['country']);
    row.append('td').text(record['shape']);
    row.append('td').text(record['durationMinutes']);
    row.append('td').text(record['comments']);
*/

Object.values(record).forEach(col =>{
    row.append('td').text(col)
})

})
}
//DATE SEARCH
function filterTable(elem){

    // var changedElem = d3.select.target;

    var dateElem = d3.select('#datetime');
    var filterDate = dateElem.property('value');

    filteredData = tableData.filter(rec => rec['datetime'] == filterDate);
    console.log(filteredData);

    tbody.html('');

    buildTable(filteredData);

};

btn = d3.select('#filter-btn')
datetimefield = d3.select('#datetime')

btn.on('click', filterTable);
datetimefield.on('change',filterTable)

buildTable(tableData)

//CITY SEARCH

// function filterTableCity(city){

//     // var changedElem = d3.select.target;

//     var cityElem = d3.select('#city');
//     var filterCity = cityElem.property('value');

//     filteredDataCity = tableData.filter(rec => rec['city'] == filterCity);

//     tbody.html('');

//     buildTable(filteredDataCity);

// };

// btn2 = d3.select('#filter-btn')
// citytimefield = d3.select('#city')

// btn2.on('click', filterTableCity);
// citytimefield.on('change',filterTableCity)

// buildTable(tableData)

