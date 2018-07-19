var outputDiv = document.getElementById('output');

var Cell = function(text) {
    this.text = text;
};

Cell.prototype.draw =  function(width) {
    var textWidth = this.getWidth();
    return this.pad(this.text, width - textWidth);
};

Cell.prototype.getWidth = function() {
    return this.text.length;
};

Cell.prototype.pad = function(text, padding) {
    for (var i = 0; i < padding; i++) {
        text += "&nbsp;";
    }
    return text;
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
    var colWidths = this.getColWidths(), // [3, 20, 4]
        output = "";
    for (var i = 0; i < this.data.length; i++) {
        output += this.drawRow(this.data[i], colWidths);
    }
    return output;
};

Table.prototype.getColWidths = function() {
    var colWidths = [];
    for (var i = 0; i < this.data.length; i++) {
        for (var j = 0; j < this.data[i].length; j++) {
            var cellWidth = this.data[i][j].getWidth();
            if (typeof colWidths[j] === "undefined") {
                colWidths[j] = cellWidth;
            } else {
                colWidths[j] = Math.max(colWidths[j], cellWidth);
            }
        } 
    }
    return colWidths;
};

Table.prototype.drawRow = function(rowData, colWidths) {
    var sep = "&nbsp;&nbsp;",
        output = "";
    for (var i = 0; i < rowData.length; i++) {
        var cell = rowData[i],
            width = colWidths[i];
        output += cell.draw(width) + sep;
    }
    output += "<br>";
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
