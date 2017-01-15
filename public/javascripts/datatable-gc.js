
//## dc_DataTables configuration
var dc_dataTable_columnDefs_config=[ 
    {'targets': 0,'defaultContent': '<button type="button" class="btn btn-info btn-xs" >aa </button>'},
    {'targets': 1,'defaultContent': '<button type="button" class="btn btn-primary btn-xs" >nuc</button>'},
    {'targets': 2,'data':'count'},
    {'targets': 3,'defaultContent': '','data':null, 'className': 'dup-details-control', 'orderable': false},
    {'targets': 4,'data':'dupli'},
    {'targets': 5,'data':'divers'},
    {'targets': 6,'data':'event'},
    {'targets': 7,'data':'geneLen'},
    {'targets': 8,'defaultContent': '','data':null, 'className': 'geneName-details-control', 'orderable': false},
    {'targets': 9,'data':'GName'},     
    {'targets': 10,'defaultContent': '','data':null, 'className': 'ann-details-control', 'orderable': false},
    {'targets': 11,'data':'ann'},
    {'targets': 12,'data':'geneId','visible': false},
    {'targets': 13,'data':'allAnn','visible': false},
    {'targets': 14,'data':'allGName','visible': false},    
    {'targets': 15,'defaultContent': '','data':'locus','visible': false}
];

var creat_dataTable = function (div, columns_set) {
    var datatable = d3.select(div);
    var thead = datatable.append("thead")
        .attr("align", "left");

    thead.append("tr")
        .selectAll("th")
        .data( columns_set )
        .enter()
        .append("th")
        .text(function(d) { return d; });
};

//# create GC table 
var geneCluster_table_columns=['msa','msa','#strain','','duplicated','diversity','events','geneLen','','geneName','','annotation','Id','allAnn','allGName','locus']
creat_dataTable("#dc-data-table",geneCluster_table_columns);
//## pay attention to GC table column order
var GC_table_dropdown_columns=['amino_acid aln','nucleotide aln','#strain','duplicated','diversity', 'gene gain/loss events','gene length','geneName','annotation'];

//## creat multiselect dropdown for dataTables
var creat_multiselect = function (div, columns_set) {
    var select_panel = d3.select(div);

    for (i = 0; i < columns_set.length; i++) {
        select_panel.append("option")
            .attr("value", columns_set[i])
            .attr("selected", "selected")
            .text(columns_set[i]);
    }
};

// disable warning
$.fn.dataTable.ext.errMode = 'none';
if (1) {
    $('#dc-data-table').on('error.dt', function(e, settings, techNote, message) { console.log(message); });
}