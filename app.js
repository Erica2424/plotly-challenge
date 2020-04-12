function buildTable() {

d3.json("samples.json").then(
    (data) => {
    console.log(data);
    var bioMetadata= data.metadata;

    var result = bioMetadata.filter( oneitem => oneitem.id == userselect);


});

}

// create the function to get the necessary data
function getDemoInfo(id) {
    // read the json file to get data
        d3.json("samples.json").then((data)=> {
    // get the metadata info for the demographic panel
            var metadata = data.metadata;
    
            console.log(metadata)

//dropdown menu
function initalizing() {

    d3.json("samples.json").then((data) => { 
            
            var items = data.names;
            console.log(items)
            
            items = ["940", "941", "942"]
            
            var dropdown  = d3.select("#selDataset").append("select"),
        
            data.names.forEach(function(item) {
                dropdown.append("option").text(item).property("value");
            });
        });
}

initalizing();