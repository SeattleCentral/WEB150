var outputDiv = document.getElementById('output');

var Cell = function(text) {
    this.text = text;
};

Cell.prototype.draw =  function() {
    return '<td>' + this.text + '</td>';
};


var Table = function(data) {
    this.data = this.setup(data);
};

Table.prototype.setup = function(data) {
    var cells = [];
    for (var i = 0; i < data.length; i++) {
        cells.push([]);
        for (var j = 0; j < data[i].length; j++) {
            var cell = new Cell(data[i][j]);
            cells[i].push(cell);
        }
    }
    return cells;
};

Table.prototype.draw = function() {
    var output = "<table><tbody>";
    for (var i = 0; i < this.data.length; i++) {
        output += this.drawRow(this.data[i]);
    }
    output += "</tbody></table>";
    return output;
};

Table.prototype.drawRow = function(rowData) {
    var output = '<tr>';
    for (var i = 0; i < rowData.length; i++) {
        var cell = rowData[i];
        output += cell.draw();
    }
    output += '</tr>';
    return output;
};


//var data = [
//    ["1", "All Nighters", "2"],
//    ["2", "Turing Team", "1"],
//    ["3", "The Three Musketeeers", "1"]
//];

var data = [
    ["Item #", "Description", "Quantity", "Amount"],
    ["283472", "Work on fancy website.", "40", "120"],
    ["8979", "Hosting Fees", "1", "50"],
    ["797080", "PCI Auditing", "8", "150"]
];


var table = new Table(data);
outputDiv.innerHTML = table.draw();
