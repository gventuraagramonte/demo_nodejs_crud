const listar = (p00, p01, p02) => {
    /*
    * p00 : url
    * p01 : nombre de dxDataGrid
    * p02 : conjunto de objetos => usuario
    */
    $.ajax({

        url: window.location.origin + p00,
        async: true,
        success: (result) => {

            $(() => {

                $("#" + p01).dxDataGrid({

                    dataSource: JSON.parse(JSON.stringify(result[p02]))

                });

            });

        },
        error: (e) => {

            console.error(e);

        },
        timeout: 0
    });

};

const grabar = (p00, p01, p02, p03) => {
    /*
    * p00 : url
    * p01 : objeto Json
    * p02 : funcion a ejecutar cuando haya algún resultado
    */
    $.ajax({

        url: window.location.origin + p00,
        async: true,
        data: p01,
        success: (result) => {

            p02();
            $('#' + p03).html(result);

        },
        error: (e) => {

            //console.error(e);

        },
        timeout: 0

    });

};

const navegar = (p00, p01) => {

    $.ajax({

        url: window.location.origin + p00,
        async: true,
        success: (result) => {

            $('#' + p01).html(result);

        },
        error: (e) => {

            console.error(e);

        },
        timeout: 0

    });

};



const dxDataGridModelo = {

    groupPanel: { visible: true },
    grouping: { autoExpandAll: false },
    loadPanel: { enabled: true },
    allowColumnReordering: true,
    allowColumnResizing: true,
    columnResizingMode: ["nextColumn"][0],
    columnChooser: { enabled: true },
    filterPanel: { visible: true },
    selection: { mode: ["single", "multiple"][0] },
    sorting: { mode: "single" },
    paging: { pageSize: 10 },
    pager: { showPageSizeSelector: true, allowedPageSizes: [5, 10, 25, 50, 100, 1000] },
    showColumnLines: true,
    showRowLines: true,
    showBorders: true,
    export: { enabled: true, fileName: "DataGrid" },
    filterRow: { visible: true, applyFilter: 'onClick' },
    onCellPrepared: function (options) {

        if (options.rowIndex === undefined) {

            if (options.cellElement.attr('role') === 'columnheader') {

                options.cellElement.css("color", "white");
                options.cellElement.css("background-color", "#2D345B");
                options.cellElement.css("text-align", "center");
                options.cellElement.addClass("ff-Calibri");

            }

        } else {

            /*
            if (options.columnIndex === 1) {

                options.cellElement.addClass("ff-Calibri");

            } else {

                options.cellElement.addClass("ff-consolas");

            }*/

            options.cellElement.addClass("ff-Calibri");
        }

    },
    onEditorPreparing: function (e) {

        if (e.parentType === 'filterRow') {

            e.editorOptions.onEnterKey = function (arg) {

                e.element.find('.dx-apply-button').trigger('dxclick');

            };

        }

    },
    onToolbarPreparing: function (e) {
    },
    onRowPrepared: function (e) {

        if (e.rowType === 'totalFooter') {

            e.rowElement.addClass('dx-column-lines');

        }

    },
    onContentReady: function (e) {

        e.element.find('.dx-datagrid-total-footer').find('.dx-datagrid-content').removeClass('dx-datagrid-content');

        if (e.component.shouldSkipNextReady) {

            e.component.shouldSkipNextReady = false;

        } else {

            e.component.shouldSkipNextReady = true;
            e.component.columnOption("command:select", "width", 40);
            e.component.updateDimensions();

        }
    }
};


const KEY = {
    
    "ENTER" : 13 ,
    "ESC" : 27 
    
};