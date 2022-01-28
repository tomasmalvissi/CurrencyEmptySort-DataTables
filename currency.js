/*
 *  @name Currency
 *  @summary Sort data numerically when it has a leading currency symbol and empty rows.
 *  @author [Tomás Malvissi]
 *
 *  @example
 *    $('#example').dataTable( {
 *       columnDefs: [
 *         { type: 'currency', targets: 0 }
 *       ]
 *    } );
 */


jQuery.extend(jQuery.fn.dataTableExt.oSort, {
    "currency-pre": function (a) {
        a = (a === "-" || a === "" || a === "&nbsp;" || a === null) ? 0 : a.replace(/[^\d\-\,]/g, "");
        return parseFloat(a);
    },

    "currency-asc": function (a, b) {
        return a - b;
    },

    "currency-desc": function (a, b) {
        return b - a;
    }
});