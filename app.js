// create the function for the initial data rendering
function init() {
    // select dropdown menu 
    var dropdown = d3.select("#selDataset");
    
    // read the data 
    d3.json("samples.json").then((data)=> {
        console.log(data)

        // get the id data to the dropdown menu
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });
d3.json('samples.json').then(data => {
    const ys = data.samples.map(objectInData =>
        objectInData.sample_values.slice(0,10))
    
    const xs = data.samples.map(objectInData =>
        objectInData.otu_ids.slice(0,10))

var trace1 = {
    x:xs,
    y:ys,
    type: 'hbar',
};

var plot1 = [trace1];

var layout = {
    title: "Sample Values",
    xaxis: { title: "OTU IDs"},
    yaxis: { title: "OTU Labels"}
}

Plotly.newPlot('bar-plot',plot1, layout);
})
        // call the functions to display the data and the plots to the page
        // getPlots(data.names[0]);
        // getDemoInfo(data.names[0]);
    });
}

init();