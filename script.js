


// function submit () {
//   var method = document.getElementById('method').value
//   var startRow = hot.getSelected()[0][0]
//   var startCol = hot.getSelected()[0][1]
//   var endRow = hot.getSelected()[0][2]
//   var endCol = hot.getSelected()[0][3]
//   var sum = 0;


//   if (method == 'add'){
//     for(var i = startRow; i <= endRow; i++){
//       for (var j = startCol; j <= endCol; j++){
//         sum =  sum + parseInt(hot.getDataAtCell(i,j))
//       }
//     }
//   }
//   else if (method == 'subtract'){
//     for(var i = startRow; i <= endRow; i++){
//       for (var j = startCol; j <= endCol; j++){
//         sum =  sum - parseInt(hot.getDataAtCell(i,j))
//       }
//     }
//   }
//   else if (method == 'multiply'){
//     for(var i = startRow; i <= endRow; i++){
//       for (var j = startCol; j <= endCol; j++){
//         sum =  sum * parseInt(hot.getDataAtCell(i,j))
//       }
//     }
//   }
//   else if (method == 'divide'){
//     for(var i = startRow; i <= endRow; i++){
//       for (var j = startCol; j <= endCol; j++){
//         sum =  sum / parseInt(hot.getDataAtCell(i,j))
//       }
//     }
//   }

//   var cellToUpdate = document.getElementById('cellToUpdate').value;
//   var coordinates = cellToUpdate.split(',')
//   var row = parseInt(coordinates[0])
//   var column = parseInt(coordinates[1])
//   hot.setCellMeta(row, column, 'type', 'numeric');
//   hot.setDataAtCell(row, column, parseInt(sum))
// }



// var container = document.getElementById('example');
// var data = [
//   [10, 11, 12, 13, 15, 16],
//   [10, 11, 12, 13, 15, 16],
//   [10, 11, 12, 13, 15, 16],
//   [10, 11, 12, 13, 15, 16],
//   [10, 11, 12, 13, 15, 16]
// ]
// var hot = new Handsontable(container, {
//     rowHeaders: true,
//     colHeaders: true,
//     licenseKey: 'non-commercial-and-evaluation',
//     colWidths: 100,
//     dropdownMenu: true,
//     rowHeights: 25,
//     width: '100%',
//     height: 1000,
//     minSpareCols: 25,
//     minSpareRows: 50,
//     manualColumnResize: true,
//     manualRowResize:true,
//     columnSorting: true,
//     mergeCells: true,
//     outsideClickDeselects: false,
//     data:data,
// });


// Change cell
// hot.setDataAtCell(0, 1, 'Jacob');

// After change
//     afterChange: (changes) => {
//     console.log(changes)
// }

// Copy data by value
// console.log(JSON.parse(JSON.stringify(data)))

// Adds rows/columns automatically as spreadsheet grows (property)
// minSpareRows: 5

// Change which columns are actually shown (property)
//   columns: [
//     {data: 0},
//     {data: 2},
//     {data: 3},
//     {data: 4},
//     {data: 5},
//     {data: 6}
//   ]


// Change column data (format, readonly, etc) can be a function based on index, renders the data
// how you want
// columns: function(column) {
//     var columnMeta = {};

//     if (column === 0) {
//       columnMeta.data = 'id';

//     } else if (column === 1) {
//       columnMeta.data = 'name.first';

//     } else if (column === 2) {
//       columnMeta.data = 'name.last';
//     return columnMeta;


// Need to figure out:
//  - merge columns
//