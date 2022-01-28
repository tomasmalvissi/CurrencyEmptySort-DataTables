# Currency Empty Sort in DataTables Library:
I adapt the "currency" plugin to be able to order the empty rows in the DataTables library.

The main difference between this plugin and the original one is that it performs validation for null fields, white space and html spaces.

For currencies that divide thousands with commas, ex: 11,000
change the regex to this: (/[^\d\-\.]/g, "")


sources: 
- github.com/DataTables/Plugins/blob/master/sorting/currency.js 
- datatables.net/plug-ins/sorting/currency
