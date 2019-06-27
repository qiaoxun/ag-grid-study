var express = require('express')
var router = express.Router();

router.get('/tableData', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");

    var columnDefs = [
        {headerName: "Make", field: "make", sortable: true, filter: true, checkboxSelection: true},
        {headerName: "Model", field: "model", sortable: true, filter: true},
        {headerName: "Price", field: "price", sortable: true, filter: true}
    ];

    var tableData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];

    var data = {columnDefs, tableData}
    
    res.json(200, data);
})

module.exports = router;