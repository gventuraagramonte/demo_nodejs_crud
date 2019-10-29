var mostrar_sp = false;


//ajax
var serverAccess = function (x, y) {

    show('div_Procesando');

    if (mostrar_sp) {
        consola(y);
    }

    $.ajax({
        url: encodeURI(x),
        contentType: 'application/html; charset=utf-8',
        //type: 'post',
        encoding: "UTF-8",
        dataType: 'html',
        async: true,
        success: function (result) {

            if (get('vg_Usuario').toUpperCase() === 'DEV') {

                set(y, '<div class="nombre_control">' + y + '</div>' + result);

                $("#" + y + " td  ").each(function () {
                    $("#" + $(this).attr('id')).prepend('<div class="nombre_control_02">' + $(this).attr('id') + '</div>');
                });

                $("#" + y + " button  ").each(function () {
                    $("#" + $(this).attr('id')).prepend('<div class="nombre_control_02">' + $(this).attr('id') + '</div>');
                });
                $("#" + y + " input  ").each(function () {
                    $("#" + $(this).attr('id')).prepend('<div class="nombre_control_02">' + $(this).attr('id') + '</div>');
                });

            } else {
                set(y, result);
                //$('.nombre_control').remove();
            }
            $('.estilo-cubos').addClass('table table-bordered border-1 border-color-black border-solid width-100p ');
            if (ver_margen) {
            } else {
                $('.dt-buttons').hide();
            }
            hide('div_Procesando');


        },
        error: function (xhr, status) {
            serverAccess('apps/999.jsp?x=' + x.split("?")[0], 'divCuerpo');
        }
    });


};

//ajax
var serverAccess_ = function (x, y, data_json) {

    if (mostrar_sp) {
        consola(data_json);
    }

    $.ajax({
        //type: 'POST',
        url: encodeURI(x),
        //contentType: 'application/html; charset=utf-8',
        data: data_json,
        //encoding: "UTF-8",
        dataType: 'html',
        async: true,
        success: function (result) {
            set(y, result);

        },
        error: function (xhr, status) {
            //alert(y);
            set(y, status);
        }
    });
};

var Json_serverAccess = function (x, y) {

    if (mostrar_sp) {
        consola(y);
    }

    var deferred = $.Deferred();

    $.ajax({
        url: x,
        //type: 'post',
        dataType: "json",
        data: y,
        success: function (result) {
            deferred.resolve(result);
        },
        error: function () {
            deferred.reject("Data Loading Error");
        },
        timeout: 50000000
    });
    return deferred.promise();

};

var Json_serverAccess_ = function (x, y) {

    if (mostrar_sp) {
        consola(y);
    }

    //var deferred = $.Deferred();

    $.ajax({
        url: x,
        //dataType: "json",
        data: y,
        type: 'post',
        success: function (result) {
            return "Procedimiento Realizado con Éxito";
        },
        error: function () {
            return "Hubo algún Error";
        },
        timeout: 50000000
    });
    //return deferred.promise();

};

//ajax
var serverAccess_02 = function (x, y) {

    if (mostrar_sp) {
        consola(y);
    }

    $.ajax({
        url: encodeURI(x),
        contentType: 'application/html; charset=utf-8',
        //type: 'post',
        encoding: "UTF-8",
        headers: { 'Accept-Encoding': 'gzip' },
        dataType: 'text',
        async: true,

        success: function (result) {
            set(y, result);
        },
        error: function (xhr, status) {
            //alert(y);
            set(y, status);
        }
    });
};

var cargaGrid = function (x, y) {

    if (mostrar_sp) {
        consola(y);
    }

    var z;
    $.ajax({
        url: "apps/" + x.substring(0, 3) + "/" + x + ".jsp",
        dataType: "json",
        data: y,
        async: true,
        //type: 'post',
        success: function (result) {
            z = result;
            $("#" + x).dxDataGrid({
                dataSource: {
                    store: z
                }
            });
        },
        error: function (e) {
            console.error(e);
        },
        timeout: 0
    });
};
var cargaData = function (y) {

    if (mostrar_sp) {
        consola(y);
    }

    var z;

    $.ajax({
        url: "da/SP.jsp",
        dataType: "json",
        data: y,
        async: true,
        //type: 'post',
        success: function (result) {
            z = result;
            $("#" + y["P00"]).dxDataGrid({
                dataSource: {
                    store: z
                }
            });
        },
        error: function (e) {
            console.error(e);
        },
        timeout: 0
    });

};
var cargaData_02 = function (xx, y) {
    var f_01 = new Date();
    var f_02;
    if (mostrar_sp) {
        consola(y);
    }
    var z;

    $.ajax({
        url: "da/SP.jsp",
        dataType: "json",
        data: y,
        async: true,
        //type: 'post',
        success: function (result) {

            z = result;

            $("#" + xx).dxDataGrid({
                dataSource: {
                    store: z
                }
            });

            f_02 = new Date();

            $("#" + xx).attr('loadTime', (f_02 - f_01) / 1000.0 + ' s');

        },
        error: function (e) {
            console.error(e);
        },
        timeout: 0
    });

};
var cargaDataDxChart_02 = function (xx, y) {

    var dataSource = [{
        day: '1',
        temperature: 57
    }, {
        day: '2',
        temperature: 58
    }, {
        day: '3',
        temperature: 57
    }, {
        day: '4',
        temperature: 59
    }, {
        day: '5',
        temperature: 63
    }, {
        day: '6',
        temperature: 63
    }, {
        day: '7',
        temperature: 63
    }, {
        day: '8',
        temperature: 64
    }, {
        day: '9',
        temperature: 64
    }, {
        day: '10',
        temperature: 64
    }, {
        day: '11',
        temperature: 69
    }, {
        day: '12',
        temperature: 72
    }, {
        day: '13',
        temperature: 75
    }, {
        day: '14',
        temperature: 78
    }, {
        day: '15',
        temperature: 76
    }, {
        day: '16',
        temperature: 70
    }, {
        day: '17',
        temperature: 65
    }, {
        day: '18',
        temperature: 65
    }, {
        day: '19',
        temperature: 68
    }, {
        day: '20',
        temperature: 70
    }, {
        day: '21',
        temperature: 73
    }, {
        day: '22',
        temperature: 73
    }, {
        day: '23',
        temperature: 75
    }, {
        day: '24',
        temperature: 78
    }, {
        day: '25',
        temperature: 76
    }, {
        day: '26',
        temperature: 76
    }, {
        day: '27',
        temperature: 80
    }, {
        day: '28',
        temperature: 76
    }, {
        day: '29',
        temperature: 75
    }, {
        day: '30',
        temperature: 75
    }, {
        day: '31',
        temperature: 74
    }];

    var f_01 = new Date();
    var f_02;
    if (mostrar_sp) {
        consola(y);
    }
    var z;

    $.ajax({
        url: "da/SP.jsp",
        dataType: "json",
        data: y,
        async: true,
        //type: 'post',
        success: function (result) {

            z = result;

            //consola( z );



            $("#" + xx).dxChart({
                dataSource: {
                    //store: z
                    store: dataSource
                }
            });

            f_02 = new Date();

            $("#" + xx).attr('loadTime', (f_02 - f_01) / 1000.0 + ' s');

        },
        error: function (e) {
            console.error(e);
        },
        timeout: 0
    });

};
var cargaData_03 = function (xx, y) {

    if (mostrar_sp) {
        consola(y);
    }

    var z;

    $.ajax({
        url: "da/SP_02.jsp",
        dataType: "json",
        data: y,
        async: true,
        //type: 'post',
        success: function (result) {
            z = result;
            $("#" + xx).dxDataGrid({
                dataSource: {
                    store: z
                }
            });
        },
        error: function (e) {
            console.error(e);
        },
        timeout: 0
    });

};
var ejecutaProcedimiento = function (y) {
    if (mostrar_sp) {
        consola(y);
    }
    $.ajax({
        url: "da/SP_Ejecuta.jsp",
        dataType: "json",
        data: y,
        //type: 'post',
        async: false,
        timeout: 0
    });
};
var ejecutaProcedimiento_02 = function (y) {
    if (mostrar_sp) {
        consola(y);
    }
    $.ajax({
        url: "da/SP_Ejecuta_02.jsp",
        dataType: "json",
        data: y,
        //type: 'post',
        async: false,
        error: function (e) {
            console.error(e);
        },
        timeout: 0
    });
};
var cargaDataPivot = function (y) {

    if (mostrar_sp) {
        consola(y);
    }

    var z;

    $.ajax({
        url: "da/SP.jsp",
        dataType: "json",
        data: y,
        async: true,
        //type: 'post',
        success: function (result) {
            z = result;
            $("#" + y["P00"]).dxPivotGrid({
                dataSource: {
                    store: z
                }
            });
        },
        error: function (e) {
            console.error(e);
        },
        timeout: 0
    });

};
var cargaDataPivot_02 = function (control, y) {

    if (mostrar_sp) {
        consola(y);
    }

    var z;

    $.ajax({
        url: "da/SP.jsp",
        dataType: "json",
        data: y,
        async: true,
        //type: 'post',
        success: function (result) {
            z = result;
            $("#" + control).dxPivotGrid({
                dataSource: {
                    store: z
                }
            });
            show(control);
        },
        error: function (e) {
            console.error(e);
        },
        timeout: 0
    });

};
var getDateUpdate = function (y, x) {

    if (mostrar_sp) {
        consola(y);
    }

    $.ajax({
        url: "da/SP.jsp",
        dataType: "json",
        data: y,
        async: true,
        //type: 'post',
        success: function (result) {
            $('#998001').html("Actualizacion : " + getRelojUpdate(result[0]["" + x]));
        },
        error: function () {
        },
        timeout: 0
    });

};


/***************************************************************************************************/

var aleatorio = function () {
    return Math.random() * 99999999999;
    //return "201811071431";
};
var setFecha = function (control) {
    control.keydown(function (event) {
        if (event.keyCode === 9) {
            return "";
        }
        return event.preventDefault();
    });
};
var crearGifLoading = function () {
    var dialogInstance = new BootstrapDialog({
        message: '<img src="Image/load.gif" />',
        cssClass: 'modal-loading'
    });
    return dialogInstance;
};
var fechaActualNumerica = function () {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var output =
        d.getFullYear() + "" +
        (month < 10 ? '0' : '') + month + "" +
        (day < 10 ? '0' : '') + day;
    return output;
};
var fechaNumerica = function (str) {
    return str.substr(6, 4) + str.substr(3, 2) + str.substr(0, 2);
};
var fechaString = function (str) {
    return str.substr(6, 2) + '/' + str.substr(4, 2) + '/' + str.substr(0, 4);
};
var AnoActual = function () {
    var d = new Date();
    return d.getFullYear();
};
var enfoque = function (control) {
    window.scrollTo(0, document.getElementById(control).offsetTop);
};
var pasarValor = function (origen, destino) {
    $('#' + origen.trim()).val($('#' + destino.trim()).val());
};
var hide = function (idcontrol) {
    $('#' + idcontrol.trim()).hide();
};
var show = function (idcontrol) {
    $('#' + idcontrol.trim()).show();
};
var enabled = function (idcontrol) {
    $('#' + idcontrol.trim()).prop("disabled", false);
};
var disabled = function (idcontrol) {
    $('#' + idcontrol.trim()).prop("disabled", true);
};
var focus = function (idcontrol) {
    $('#' + idcontrol.trim()).focus();
    $('#' + idcontrol.trim()).scrollTop();
};
var focusin = function (idcontrol, metodo) {
    $('#' + idcontrol.trim()).focusin(function () {
        metodo();
    });
};
var focusout = function (idcontrol, metodo) {
    $('#' + idcontrol.trim()).focusout(function () {
        metodo();
    });
};
var click = function (idControl, metodo) {
    $('#' + idControl.trim()).click(metodo);
};
var keyup = function (idControl, metodo) {
    setTimeout(() => {
        $('#' + idControl.trim()).keyup(metodo);
    }, 200)
};
var keypress = function (idControl, metodo) {
    $('#' + idControl.trim()).keypress(metodo);
};
var change = function (idControl, metodo) {
    $('#' + idControl.trim()).change(metodo);
};
var mask = function (idControl, mascara) {
    $('#' + idControl.trim()).mask(mascara);
};
var css = function (idControl, objetoJson) {
    $('#' + idControl.trim()).css(objetoJson);
};
var DataTable = function (idControl, objetoJson) {
    return $('#' + idControl.trim()).DataTable(objetoJson);
};
var toggleClass = function (idControl, clase) {
    $('#' + idControl.trim()).toggleClass(clase);
};
var get = function (idControl) {
    switch ($('#' + idControl.trim())[0].tagName) {
        case "SELECT":
            return $('#' + idControl.trim()).val();
        case "LABEL":
            return $('#' + idControl.trim()).text();
        case "BUTTON":
            return $('#' + idControl.trim()).html();
        case "DIV":
            return $('#' + idControl.trim()).html();
        case "INPUT":
            return $('#' + idControl.trim()).val();
        case "TEXTAREA":
            return $('#' + idControl.trim()).val();
        case "TABLE":
            return $('#' + idControl.trim()).html();
        case "THEAD":
            return $('#' + idControl.trim()).html();
        case "TR":
            return $('#' + idControl.trim()).html();
        case "TD":
            return $('#' + idControl.trim()).html();
        case "H4":
            return $('#' + idControl.trim()).html();
        case "P":
            return $('#' + idControl.trim()).html();
    }
};
var set = function (idControl, valor) {
    switch ($('#' + idControl.trim())[0].tagName) {
        case "SELECT":
            $('#' + idControl.trim()).val(valor);
            break;
        case "LABEL":
            $('#' + idControl.trim()).text(valor);
            break;
        case "BUTTON":
            $('#' + idControl.trim()).html(valor);
            break;
        case "DIV":
            $('#' + idControl.trim()).html(valor);
            break;
        case "INPUT":
            $('#' + idControl.trim()).val(valor);
            break;
        case "TEXTAREA":
            $('#' + idControl.trim()).val(valor);
            break;
        case "TABLE":
            $('#' + idControl.trim()).html(valor);
            break;
        case "THEAD":
            $('#' + idControl.trim()).html(valor);
            break;
        case "TR":
            $('#' + idControl.trim()).html(valor);
            break;
        case "TD":
            $('#' + idControl.trim()).html(valor);
            break;
        case "H4":
            $('#' + idControl.trim()).html(valor);
            break;

        case "P":
            $('#' + idControl.trim()).html(valor);
            break;

    }
};
var clear = function (idControl) {
    var valor = '';
    //$('#' + idControl).toUpperCase();
    switch ($('#' + idControl.trim())[0].tagName) {

        case "LABEL":
            $('#' + idControl.trim()).text(valor);
            break;
        case "BUTTON":
            $('#' + idControl.trim()).html(valor);
            break;
        case "DIV":
            $('#' + idControl.trim()).html(valor);
            break;
        case "INPUT":
            $('#' + idControl.trim()).val(valor);
            break;
        case "TABLE":
            $('#' + idControl.trim()).html(valor);
            break;
        case "THEAD":
            $('#' + idControl.trim()).html(valor);
            break;
        case "TR":
            $('#' + idControl.trim()).html(valor);
            break;
        case "TD":
            $('#' + idControl.trim()).html(valor);
            break;
    }
};
var isVisible = function (idControl) {
    if ($('#' + idControl.trim()).is(":visible")) {
        return true;
    }
    return false;
};
var isEnabled = function (idControl) {
    if ($('#' + idControl.trim()).is(":enabled")) {
        return true;
    }
    return false;
};
var isFocus = function (idControl) {
    if ($('#' + idControl.trim()).is(":focus")) {
        return true;
    }
    return false;
};
var imprimir = function (idControl) {
    $('#' + idControl.trim()).addClass('impresion');
    $('#' + idControl.trim()).printArea();
};
var cursorAlFinal = function (idControl) {
    $('#' + idControl.trim()).get(0).setSelectionRange(get(idControl.trim()).toString().length, get(idControl.trim()).toString().length);
};
var seleccionTotal = function (idControl) {
    $('#' + idControl.trim()).get(0).setSelectionRange(0, get(idControl).toString().length);
};
var isDate = function (txtDate) {
    var currVal = txtDate;
    if (currVal === '')
        return false;
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; //Declare Regex
    var dtArray = currVal.match(rxDatePattern); // is format OK?
    if (dtArray === null)
        return false;
    dtDay = dtArray[1];
    dtMonth = dtArray[3];
    dtYear = dtArray[5];
    if (dtMonth < 1 || dtMonth > 12)
        return false;
    else if (dtDay < 1 || dtDay > 31)
        return false;
    else if ((dtMonth === 4 || dtMonth === 6 || dtMonth === 9 || dtMonth === 11) && dtDay === 31)
        return false;
    else if (dtMonth === 2) {
        var isleap = (dtYear % 4 === 0 && (dtYear % 100 !== 0 || dtYear % 400 === 0));
        if (dtDay > 29 || (dtDay === 29 && !isleap))
            return false;
    }
    return true;
};
var error = function (idControl) {
    $('#' + idControl.trim()).addClass('error');
};
var noError = function (idControl) {
    $('#' + idControl.trim()).removeClass('error');
};
var validateEmail = function (email) {

    var re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    return re.test(get(email).toLowerCase());
};
var esFecha = function (idControl) {
    focusout(idControl.trim(), function () {
        if (isDate(get(idControl.trim()))) {
            noError(idControl.trim());
        } else {
            clear(idControl.trim());
            error(idControl.trim());
        }
    });
};
var esNumero = function (idControl) {
    focusout(idControl.trim(), function () {
        if ($.isNumeric(get(idControl.trim()))) {
            noError(idControl.trim());
        } else {
            clear(idControl.trim());
            error(idControl.trim());
        }
    });
};
var esEmail = function (idControl) {
    focusout(idControl.trim(), function () {
        if (validateEmail(get(idControl.trim()))) {
            noError(idControl.trim());
        } else {
            clear(idControl.trim());
            error(idControl.trim());
        }
    });
};
var esNoVacio = function (idControl) {
    focusout(idControl.trim(), function () {
        if (get(idControl.trim()) !== "") {
            noError(idControl.trim());
        } else {
            clear(idControl.trim());
            error(idControl.trim());
        }
    });
};
var number_format = function (amount, decimals) {
    amount = parseFloat(amount).toFixed(2);
    var cadena = "";
    if (amount > 1000000000) {
        cadena = cadena + amount / 1000000000;
    } else if (amount > 1000000) {
        cadena = cadena + amount / 1000000;
    } else if (amount > 1000) {
        cadena = (amount / 1000 + '').split(".")[0];
        amount = amount - parseInt(cadena) * 1000;
        amount = parseFloat(amount).toFixed(decimals);
        cadena = cadena + ',' + amount;
    }
    return cadena;
};
var number_format_porcentaje = function (amount, decimals) {
    amount = amount * 100;
    return parseFloat(amount).toFixed(decimals) + " %";
};
var porcentajes = function (x) {
    n = Math.round(parseFloat(x) * 100);
    if (n > 0) {
        return n + " %";
    } else if (n < 0) {
        n = Math.round(parseFloat(-x) * 100);
        return '-' + n + " %";
    } else {
        return " 0 % ";
    }
};
var porcentajes_02 = function (x) {
    //alert(x* 100);
    n = Math.round(x * 10000) / 100;

    if (n === 100) {
        return n + ".00 %";
    } else if (n > 0) {
        return n + " %";
    } else {
        return " 0.00 %";
    }
};
var porcentajes_03 = function (x) {
    n = Math.round(parseFloat(x) * 10000);
    if (Math.abs(n) > 0) {

        if (n % 100 === 0) {
            return n / 100 + ".00 %";
        } else if (n % 10 === 0) {
            return n / 100 + "0 %";
        }
        return n / 100 + " %";
    } else {
        return " 0.00 %";
    }
};
var millares_comas = function (x) {
    var signo = '';

    if (x === 0) {
        return " 0";
    }
    if (x < 0) {
        signo = '-';
        x = Math.abs(x);
    }
    var n = Math.round(parseFloat(x));
    if (n > 0) {
        var s = "";
        var cadena = "";
        while (n >= 1000) {
            if ((n / 1000) % 1 === 0) {
                cadena = ",000" + cadena;
            } else {
                s = (n / 1000) + "";
                s = s.split('.')[1];
                if (n % 100 === 0) {
                    s = s + "00";
                } else if (n % 10 === 0) {
                    s = s + "0";
                }
                cadena = "," + s + cadena;
            }
            n = (n / 1000) - ((n / 1000) % 1);
        }
        return signo + n + cadena;
    } else {
        return " 0 ";
    }
};
var millares_comas_02 = function (x) {
    var signo = '';
    if (x < 0) {
        signo = '-';
        x = Math.abs(x);
    }
    var n = Math.round(parseFloat(x));
    if (n > 0) {
        var s = "";
        var cadena = "";
        while (n >= 1000) {
            if ((n / 1000) % 1 === 0) {
                cadena = ",000" + cadena;
            } else {
                s = (n / 1000) + "";
                s = s.split('.')[1];
                if (n % 100 === 0) {
                    s = s + "00";
                } else if (n % 10 === 0) {
                    s = s + "0";
                }
                cadena = "," + s + cadena;
            }
            n = (n / 1000) - ((n / 1000) % 1);
        }
        return signo + n + cadena;
    } else {
        return "0";
    }
};
var millares_comas_03 = function (x, y) {

    var cad = '' + x + ' ';

    x = x * Math.pow(10, y);
    x = Math.round(x);

    if (x % Math.pow(10, y) === 0) {

        x = x / Math.pow(10, y);
        s = x.toString();

        decimal = '';

        for (var i = 0; i < y; i++) {
            decimal += '0';
        }

        entero = s.split('.')[0];

    } else if (x % 10 === 0) {
        x = x / Math.pow(10, y);
        s = x.toString();
        decimal = s.split('.')[1] + '0';
        entero = s.split('.')[0];

    } else {

        x = x / Math.pow(10, y);
        s = x.toString();
        decimal = s.split('.')[1];
        entero = s.split('.')[0];

    }
    cadena = '';
    contador = 0;
    signo = '';
    indice = 0;

    if (entero.charAt(0) === '-') {
        signo = '-';
        indice = 1;
    }
    for (var i = entero.length - 1; i >= indice; i--) {
        contador++;
        if (contador % 3 === 0 && contador !== entero.length - indice) {
            cadena = ',' + entero.charAt(i) + cadena;
        } else {
            cadena = entero.charAt(i) + cadena;
        }
    }
    if (y === 0)
        return signo + cadena;
    cad = cad + signo + cadena + '.' + decimal;
    return signo + cadena + '.' + decimal;

};
var addClass = function (idcontrol, clase) {

    if (idcontrol.trim().charAt(0) === '.') {
        $(idcontrol.trim()).addClass(clase);
    } else {
        $('#' + idcontrol.trim()).addClass(clase);
    }


};
var removeClass = function (idcontrol, clase) {
    $('#' + idcontrol.trim()).removeClass(clase);
};
var getReloj = function () {

    var reloj = new Date();
    var horas = reloj.getHours() === 12 ? reloj.getHours() : reloj.getHours() % 12;
    var minutos = reloj.getMinutes();
    var segundos = reloj.getSeconds();
    var year = reloj.getFullYear();
    var mes = reloj.getMonth();
    var dia = reloj.getDate();
    var pm = (reloj.getHours() < 12) ? ' AM' : ' PM';
    var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado");
    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre");
    year = revisarTiempo(year);
    dia = revisarTiempo(dia);
    horas = revisarTiempo(horas);
    minutos = revisarTiempo(minutos);
    segundos = revisarTiempo(segundos);
    str = diasSemana[reloj.getDay()] + ", " + dia + " de " + meses[mes] + ' de ' + year + ' ' + horas + ":" + minutos + ":" + segundos + ' ' + pm;
    return "Fecha Actual : " + str;

};
var getRelojUpdate = function (x) {
    var reloj = new Date(x);
    var horas = reloj.getHours() === 12 ? reloj.getHours() : reloj.getHours() % 12;
    var minutos = reloj.getMinutes();
    var segundos = reloj.getSeconds();
    var year = reloj.getFullYear();
    var mes = reloj.getMonth();
    var dia = reloj.getDate();
    var pm = (reloj.getHours() < 12) ? ' AM' : ' PM';
    var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado");
    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre");
    year = revisarTiempo(year);
    dia = revisarTiempo(dia);
    horas = revisarTiempo(horas);
    minutos = revisarTiempo(minutos);
    segundos = revisarTiempo(segundos);
    str = diasSemana[reloj.getDay()] + ", " + dia + " de " + meses[mes] + ' de ' + year + ' ' + horas + ":" + minutos + ":" + segundos + ' ' + pm;
    return str;
};
var formatearColumna = function (x, numeroFilas, c, estilos) {
    for (var r = 0; r < numeroFilas; r++) {
        addClass('td_' + x + '_' + r + '_' + c, estilos);
    }
};
var revisarTiempo = function (i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};
var encodeUnicode = function (str) {
    var new_str = '';
    for (var i = 0; i < str.length; i++) {
        new_str += '&#' + str.charCodeAt(i) + ';';
        alert(new_str);
    }
    return new_str;
};
var addRow = function (tableID) {
    var columnCount = $("#" + tableID + " tr:last td").length;
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    for (var i = 0; i < columnCount; i++) {
        row.insertCell(i).innerHTML = i;
    }
};
var agregarFila = function (colCount) {
    var table = document.getElementById('table');
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    for (var i = 0; i < colCount; i++) {
        row.insertCell(i);
    }
};
var agregarColumna = function (colCount) {
    var table = document.getElementById('table');
    var rowCount = table.rows.length;
    for (var i = 0; i < rowCount; i++) {
        var row = table.rows[i];
        row.insertCell(colCount);
    }
};
var serverAccessImagen = function (w, x, y, z) {
    var comprobar = $('#' + w).val().length;
    if (comprobar > 0) {
        var isOk = true;
        $('#' + w).each(function () {
            if (typeof this.files[0] !== 'undefined') {
                var maxSize = parseInt($(this).attr('max-size'), 10);
                size = this.files[0].size;
                isOk = maxSize > size;
            }
        });
        if (isOk) {
            var archivos = new FormData();
            archivos.append(w, ($('#' + w)[0].files[0]));
            $.ajax({
                url: x,
                type: 'POST',
                contentType: false,
                data: archivos,
                processData: false,
                success: function (result) {
                    set(y, result);
                    ocultaRuta();
                },
                error: function (xhr, status) {
                    alert(z);
                    set(y, status);
                    ocultaRuta();
                }
            });
        } else {
            alert('Archivo demasiado grande');
        }
    } else {
        alert('Debe Seleccionar un Archivo');
    }
};
var barraDeProgreso = function (x) {


    if (x === -1) {
        $("#progress_id").hide();
        //return false;
    } else {

        var porcentaje = parseFloat(x);
        $("#progress_id").css("width", porcentaje + "%");
        $("#progress_id").text(porcentaje + "%");

        if (x === 0) {
            $("#progress_id").show();
        }
    }

};
var semaforoBgSentinel = function (x) {

    switch (x) {

        case 'ROJO':
            color = 'bg-red';
            break;
        case 'GRIS':
            color = 'bg-gray-metro';
            break;
        case 'VERDE':
            color = 'bg-green';
            break;
        case 'AMARILLO':
            color = 'bg-yellow';
            break;
        case 'BLANCO':
            color = 'bg-white';
            break;

    }

    return color;

};

var semaforoBgTramos = function (x) {
    //var color = '';  

    switch (x) {
        case 'A':
            color = 'bg-blueligth-info color-blueligth-info';
            break;
        case 'B':
            color = 'bg-blue color-blue ';
            break;
        case 'C':
            color = 'bg-green color-green ';
            break;
        case 'D':
            color = 'bg-yellow color-yellow';
            break;
        case 'E':
            color = 'bg-orange color-orange';
            break;
        case 'F':
            color = 'bg-red color-red';
            break;
        case 'G':
            color = 'bg-gray-metro color-gray-metro';
            break;
        case 'H':
            color = 'bg-black color-black';
            break;
        case '0':
            color = 'fondo-rojo color-rojo';
            break;
        case '1':
            color = 'fondo-verde color-verde';
            break;
        default:
            color = '';

    }

    return color;

};
var colorTramos = function (x) {

    switch (x) {
        case 'A':
            color = 'color-black ';
            break;
        case 'B':
            color = 'color-black ';
            break;
        case 'C':
            color = 'color-black ';
            break;
        case 'D':
            color = 'color-black ';
            break;
        case 'E':
            color = 'color-black ';
            break;
        case 'F':
            color = 'color-black ';
            break;
        case 'G':
            color = 'color-black ';
            break;
        case 'H':
            color = 'color-black ';
            break;
        case '0':
            color = 'color-black ';
            break;
        case '1':
            color = 'color-black ';
            break;

    }

    return color;

};

var semafotoTramos = function (x) {

    switch (x) {
        case 'A':
            color = 'bg-blueligth-info';
            break;
        case 'B':
            color = 'bg-blue';
            break;
        case 'C':
            color = 'bg-green';
            break;
        case 'D':
            color = 'bg-yellow';
            break;
        case 'E':
            color = 'bg-orange';
            break;
        case 'F':
            color = 'bg-red';
            break;
        case 'G':
            color = 'bg-gray-metro';
            break;
        case 'H':
            color = 'bg-black';
            break;

    }

    return ' <label class="circle-4 ' + color + '"></label>';

};

var semaforoOperacionesCobertura = function (xx) {

    if (('' + xx) === 'NaN') {

        return 'Sin Movimiento' + ' <label class="circle-4 bg-black"></label>';
    }

    if (xx === Infinity) {
        return 'Infinito' + ' <label class="circle-4 bg-plomo-medio"></label>';
    } else {
        var x = parseFloat(xx);
        var color = "";
        if (parseFloat(x) >= 7.00)
            color = 'bg-red-sm';
        else if (parseFloat(x) >= 5.00)
            color = 'bg-yellow-sm';
        else
            color = 'bg-green-sm';
        return millares_comas_03(x, 2) + ' <label class="circle-4 ' + color + '"></label>';
    }

};

var semaforoLeyenda = function (xx) {
    var x = parseFloat(xx);
    var color = "";
    if (parseFloat(x) >= 0.95)
        color = 'bg-green-sm';
    else if (parseFloat(x) >= 0.85)
        color = 'bg-yellow-sm';
    else if (parseFloat(x) === -1)
        color = 'bg-white-sm';
    else if (parseFloat(x) === 0)
        color = "bg-white-sm";
    else
        color = ' bg-red-sm';
    return ' <label class="circle-4 ' + color + '"></label>';
};


var semaforo = function (xx) {
    var x = parseFloat(xx);
    var color = "";
    if (parseFloat(x) >= 0.945)
        color = 'bg-green-sm';
    else if (parseFloat(x) >= 0.85)
        color = 'bg-yellow-sm';
    else if (parseFloat(x) === -1)
        color = 'bg-white-sm';
    else if (parseFloat(x) === 0)
        color = ' bg-white-sm';
    else
        color = ' bg-red-sm';
    return porcentajes(x) + ' <label class="circle-4 ' + color + '"></label>';
};
var semaforoOrdenar = function (xx) {
    var x = parseFloat(xx);
    var color = "";
    if (parseFloat(x) >= 0.95)
        color = 'bg-green-sm';
    else if (parseFloat(x) >= 0.85)
        color = 'bg-yellow-sm';
    else if (parseFloat(x) === -1)
        color = 'bg-white-sm';
    else if (parseFloat(x) === 0)
        color = ' bg-white-sm';
    else
        color = ' bg-red-sm';
    return porcentajes_03(x) + ' <label class="circle-4 ' + color + '"></label>';
};
var semaforoStock = function (xx) {
    var x = parseFloat(xx);
    var color = "";
    if (parseFloat(x) > 0) {
        color = 'bg-red-sm alertaStock';
        return '<label class="circle-4 ' + color + ' "></label>';
    } else {
        color = 'bg-white-sm';
        return 'N';
    }

    //return x;
};
var semaforoEfectividad = function (xx) {
    var x = parseFloat(xx);
    return porcentajes(x) + ' <label class="circle-4 bg-white"></label>';
};
var semaforoAtrazoDias = function (xx) {
    var x = parseFloat(xx);
    if (x <= 0)
        return "" + x + ' <label class="circle-4 bg-green-sm"></label>';
    else if (x <= 7)
        return "" + x + ' <label class="circle-4 bg-blue"></label>';
    else if (x <= 15)
        return "" + x + ' <label class="circle-4 bg-yellow-sm"></label>';
    else if (x > 15)
        return "" + x + ' <label class="circle-4 bg-red-sm"></label>';
};
var semaforoCarteraCliente = function (xx) {
    var x = parseFloat(xx);
    if (x <= 0)
        return '<label class="circle-4 bg-red-sm color-white"></label><label class="color-white">a</label>';
    else
        return '<label class="circle-4 bg-green-sm color-white"></label><label class="color-white">b</label>';
};
var semaforoEfectividadCotizaciones = function (xx) {
    if (xx === '-Infinity ') {
        return "";
    }

    var x = parseFloat(xx);
    var color = "";
    if (parseFloat(x) >= 0.15 && parseFloat(x) < 9999999999)
        color = 'bg-green-sm';
    else if (parseFloat(x) < 0.10 && parseFloat(x) > -9999999999)
        color = ' bg-red-sm';
    else {
        return " bg-yelow-sm";
    }

    return porcentajes(x) + ' <label class="circle-4 ' + color + '"></label>';
};
var semaforoMeta100p = function (xx) {
    if (xx === '-Infinity ') {
        return "";
    }

    var x = parseFloat(xx);
    var color = "";
    if (parseFloat(x) >= 1.00 && parseFloat(x) < 9999999999)
        color = 'bg-green-sm';
    else if (parseFloat(x) < 1.0 && parseFloat(x) > -9999999999)
        color = ' bg-red-sm';
    else {
        return "";
    }

    return porcentajes(x) + ' <label class="circle-4 ' + color + '"></label>';
};
var semaforoMeta85p = function (xx) {
    //var x = parseFloat(xx);
    var color = "";
    if (parseFloat(x) <= 0.845)
        color = 'bg-red-sm';
    else if (parseFloat(x) <= 0.995)
        color = 'bg-yellow-sm';
    else
        color = 'bg-green-sm';
    return porcentajes(x) + ' <label class="circle-4 ' + color + '"></label>';
};

var semaforoIntervaloCreditos = function (x) {

    var color = "";

    if (x === 'A')
        color = 'bg-blue-sm';
    else if (x === 'B')
        color = 'bg-blue-sm';
    else if (x === 'C')
        color = 'bg-blue-sm';
    else if (x === 'D')
        color = 'bg-green-sm';
    else if (x === 'E')
        color = 'bg-green-sm';
    else if (x === 'F')
        color = 'bg-green-sm';
    else if (x === 'G')
        color = 'bg-yellow-sm';
    else if (x === 'H')
        color = 'bg-orange';
    else if (x === 'I')
        color = 'bg-red-sm';
    else if (x === 'J')
        color = 'bg-plomo-medio';
    else if (x === 'K')
        color = 'bg-black';
    return ' <label class="circle-4 ' + color + '"></label>';
};

//balance score
var semaforoBalanceScore = function (x) {
    //var x = parseFloat(xx);
    var color = "";

    if (parseFloat(x).toString() === 'NaN')
        color = ' ';
    else if (parseFloat(x) <= 0.70)
        color = 'bg-red-sm';
    else if (parseFloat(x) <= 0.90)
        color = 'bg-yellow-sm';
    else
        color = 'bg-green-sm';
    if (parseFloat(x).toString() === 'NaN')
        return '- <label class="circle-4 ' + color + '"></label>';
    return porcentajes(x) + ' <label class="circle-4 ' + color + '"></label>';
};
var semaforoAzulRojo = function (x) {
    var r = 256 * (1 - x);
    var g = 256 * (0);
    var b = 256 * (x);
    return ' <label class="circle-4 " style="background-color: rgb(' + r + ', ' + g + ', ' + b + ');"></label>';
};
var semaforoVerdeRojo = function (x) {
    var r = 255 * (1 - x);
    var g = 255 * (x);
    var b = 255 * (0);
    return ' <label class="circle-4 " style="background-color: rgb(' + r + ', ' + g + ', ' + b + ');"></label>';
};
var semaforoVerdeAmarillo = function (x) {

    var r = 255 * (2 - 2 * x);  // 1.00 
    var g = 255 * (1);      // 0.50
    var b = 255 * (0);

    return '<label class="circle-4 " style="background-color: rgb(' + r + ', ' + g + ', ' + b + ');"></label>';
};
var semaforoAmarilloRojo = function (x) {
    var r = 255 * (1);
    var g = 255 * (x * 2);
    var b = 255 * (0);
    return ' <label class="circle-4 " style="background-color: rgb(' + r + ', ' + g + ', ' + b + ');"></label>';
};
var semaforoCrmCategoria = function (x) {
    var r = 0;  // 1.00 
    var g = 0;      // 0.50
    var b = 0;

    switch (x) {
        case 'A':
            return semaforoCrm(1);
            break;
        case 'B':
            return semaforoCrm(0.75);
            break;
        case 'C':
            return semaforoCrm(0.50);
            break;
        case 'D':
            return semaforoCrm(0.25);
            break;
        case 'E':
            return semaforoCrm(0);
            break;
        default:
            return semaforoCrm(-1);
    }


};
var semaforoCrm = function (x) {

    if (x < 0) {
        return ' <label class="circle-4 " style="background-color: rgb(' + 100 + ', ' + 100 + ', ' + 100 + ');"></label>';
    } else if (x >= 0.50) {
        return semaforoVerdeAmarillo(x);
    } else {
        return semaforoAmarilloRojo(x);
    }

};
var funcionPrueba = function (x) {

};
var diaSemana = function (x) {
    var nombreDia = "";
    switch (x) {
        case 1:
            nombreDia = 'Lunes';
            break;
        case 2:
            nombreDia = 'Martes';
            break;
        case 3:
            nombreDia = 'Miércoles';
            break;
        case 4:
            nombreDia = 'Jueves';
            break;
        case 5:
            nombreDia = 'Viernes';
            break;
        case 6:
            nombreDia = 'Sábado';
            break;
        case 7:
            nombreDia = 'Domingo';
            break;
    }
    return nombreDia;
};
var nombreMes = function (x) {
    var nombre = "";
    switch (x) {
        case 1:
            nombre = 'Enero';
            break;
        case 2:
            nombre = 'Febrero';
            break;
        case 3:
            nombre = 'Marzo';
            break;
        case 4:
            nombre = 'Abril';
            break;
        case 5:
            nombre = 'Mayo';
            break;
        case 6:
            nombre = 'Junio';
            break;
        case 7:
            nombre = 'Julio';
            break;
        case 8:
            nombre = 'Agosto';
            break;
        case 9:
            nombre = 'Setiembre';
            break;
        case 10:
            nombre = 'Octubre';
            break;
        case 11:
            nombre = 'Noviembre';
            break;
        case 12:
            nombre = 'Diciembre';
            break;

    }
    return nombre;
};
var animacionMotorex = function (x) {
    var p = Array(3);
    p[0] = 'divAnimacion';
    p[1] = 'Motorex';
    p[2] = x;
    subApp(p);
};
var tamVentana = function () {
    var tam = [0, 0];
    if (typeof window.innerWidth !== 'undefined') {
        tam = [window.innerWidth, window.innerHeight];
    } else if (typeof document.documentElement !== 'undefined'
        && typeof document.documentElement.clientWidth !==
        'undefined' && document.documentElement.clientWidth !== 0) {
        tam = [
            document.documentElement.clientWidth,
            document.documentElement.clientHeight
        ];
    } else {
        tam = [
            document.getElementsByTagName('body')[0].clientWidth,
            document.getElementsByTagName('body')[0].clientHeight
        ];
    }
    return tam;
};
var consola = function (x) {
    console.log(x);
};
var finalizar = function () {

};
var checkControl = function (xx) {
    $('#' + xx + '_01').click(function () {
        if ($('#' + xx + '_01 span').attr('class').indexOf('glyphicon-ban-circle') !== -1) {
            $('#' + xx + '_01 span').removeClass('glyphicon-ban-circle');
            $('#' + xx + '_01 span').addClass('glyphicon-ok');
            $('#' + xx).click();
        } else {
            $('#' + xx + '_01 span').removeClass('glyphicon-ok');
            $('#' + xx + '_01 span').addClass('glyphicon-ban-circle');
            $('#' + xx).click();
        }
    });
};
var seleccionFilas = function (tabla, numeroFilas, nombreFiltro) {

    //alert();

    addClass('table_' + tabla, 'estilo-cubos');
    addClass('thead_' + tabla, 'bg-ligth-yellow');
    addClass('tfoot_' + tabla, 'bg-ligth-yellow');

    for (var j = 0; j < numeroFilas; j++) {

        nombre_control = 'tr_' + tabla + '_' + j;

        $('#' + nombre_control).attr('fila', j);

        $('#' + nombre_control).click(function () {

            $(this).toggleClass('filaSeleccionada');

            var filtro = '';

            for (var k = 0; k < numeroFilas; k++) {
                try {
                    if ($('#tr_' + tabla + '_' + k).attr('class').indexOf('filaSeleccionada') !== -1) {
                        if (filtro !== "") {
                            filtro = filtro + "','";
                        }
                        filtro = filtro + "" + $('#td_' + tabla + '_' + k + '_0').text() + "";
                    }
                } catch (err) {
                }
            }
            if (filtro === '') {
                filtro = "Total";
                set(nombreFiltro, filtro);
            } else {
                set(nombreFiltro, "'" + filtro + "'");
            }
        });
    }

    click('tfoot_th_' + tabla + '_0', function () {

        if (tabla.indexOf('Meta') !== -1) {
            clear('txt_sw_filtro_Meta');
            refreshTablasMeta();
        } else if (tabla.indexOf('crm_resumen') !== -1) {
            clear('txt_sw_filtro_resumen');
            switch (tabla) {
                case "crm_resumen_01":
                    procesarTablasCrm(1);
                    break;
                case "crm_resumen_02":
                    procesarTablasCrm(1);
                    break;
                case "crm_resumen_03":
                    procesarTablasCrm(1);
                    break;
                case "crm_resumen_04":
                    procesarTablasCrm(1);
                    break;
                case "crm_resumen_05":
                    procesarTablasCrm(1);
                    break;
                case "crm_resumen_06":
                    procesarTablasCrm(1);
                    break;
                case "crm_resumen_07":
                    procesarTablasCrm(1);
                    break;
                case "crm_resumen_08":
                    procesarTablasCrm(1);
                    break;
                case "crm_resumen_09":
                    procesarTablasCrm(1);
                    break;
                case "crm_resumen_10":
                    procesarTablasCrm(1);
                    break;
                case "crm_resumen_11":
                    procesarTablasCrm(1);
                    break;

                case "crm_resumen_12":
                    procesarTablasCrm(2);
                    break;
                case "crm_resumen_13":
                    procesarTablasCrm(2);
                    break;
                case "crm_resumen_14":
                    procesarTablasCrm(2);
                    break;
                case "crm_resumen_15":
                    procesarTablasCrm(2);
                    break;
                case "crm_resumen_16":
                    procesarTablasCrm(2);
                    break;
                case "crm_resumen_17":
                    procesarTablasCrm(2);
                    break;
                case "crm_resumen_18":
                    procesarTablasCrm(2);
                    break;
                case "crm_resumen_19":
                    procesarTablasCrm(2);
                    break;
                case "crm_resumen_20":
                    procesarTablasCrm(2);
                    break;
                case "crm_resumen_21":
                    procesarTablasCrm(2);
                    break;


            }



        } else {
            clear('txt_sw_filtro_venta');
            refreshTablasVenta();
        }




    });

};
var mesAbreviado = function (x) {

    var meses = x % 12;
    var año = x - meses;
    año = año / 12;
    if (meses === 0) {
        año = año - 1;
    }

    switch (meses) {

        case 1:
            mes = 'Ene';
            break;
        case 2:
            mes = 'Feb';
            break;
        case 3:
            mes = 'Mar';
            break;
        case 4:
            mes = 'Abr';
            break;
        case 5:
            mes = 'May';
            break;
        case 6:
            mes = 'Jun';
            break;
        case 7:
            mes = 'Jul';
            break;
        case 8:
            mes = 'Ago';
            break;
        case 9:
            mes = 'Set';
            break;
        case 10:
            mes = 'Oct';
            break;
        case 11:
            mes = 'Nov';
            break;
        case 0:
            mes = 'Dic';
            break;

    }
    return año + '-' + mes;
};
var redimencionar_tablas_metas = function () {
    try {
        $('#thead_th_Meta_01_0').click();
        $('#thead_th_Meta_01_0').click();
    } catch (e) {
    }

    try {
        $('#thead_th_Meta_02_0').click();
        $('#thead_th_Meta_02_0').click();
    } catch (e) {
    }

    try {
        $('#thead_th_Meta_03_0').click();
        $('#thead_th_Meta_03_0').click();
    } catch (e) {
    }

    try {
        $('#thead_th_Meta_04_0').click();
        $('#thead_th_Meta_04_0').click();
    } catch (e) {
    }

    try {
        $('#thead_th_Meta_05_0').click();
        $('#thead_th_Meta_05_0').click();
    } catch (e) {
    }

    try {
        $('#thead_th_Meta_06_0').click();
        $('#thead_th_Meta_06_0').click();
    } catch (e) {
    }

    try {
        $('#thead_th_Meta_07_0').click();
        $('#thead_th_Meta_07_0').click();
    } catch (e) {
    }

    try {
        $('#thead_th_Meta_08_0').click();
        $('#thead_th_Meta_08_0').click();
    } catch (e) {
    }

    try {
        $('#thead_th_Meta_09_0').click();
        $('#thead_th_Meta_09_0').click();
    } catch (e) {
    }

    try {
        $('#thead_th_Meta_09_01_0').click();
        $('#thead_th_Meta_09_01_0').click();
    } catch (e) {
    }

};

var moveEditColumnToLeft = function (dataGrid) {
    dataGrid.columnOption("command:edit", {
        visibleIndex: -1,
        width: 200
    });
};

var validar = function (campo, patron) {

    return patron.test(get(campo));

};

var abbr_number = function (valor, decimales, log) {

    var resultado = 0;
    var abbr = '';
    //var div = 1 / Math.pow(10, log);
    /*
     abbr =
     (Math.abs(valor) / 1000000000 > div) ? 'B' :
     (Math.abs(valor) / 1000000 > div) ? 'M' :
     (Math.abs(valor) / 1000 > div) ? 'K' :
     '';
     */
    abbr = log;
    switch (abbr) {
        case '':
            resultado = millares_comas_03(valor, decimales) + ' ' + abbr;
            break;
        case 'K':
            resultado = millares_comas_03(valor / 1000.0, decimales) + ' ' + abbr;
            break;
        case 'M':
            resultado = millares_comas_03(valor / 1000000.0, decimales) + ' ' + abbr;
            break;
        case 'B':
            resultado = millares_comas_03(valor / 1000000000.0, decimales) + ' ' + abbr;
            break;
    }

    return resultado;

};

var mostrarApp = function () {

    show('divMenuNavegador');
    show('divCuerpo');

};




var formato_01 = function (x) {

    if ($(window).width() >= 1080) {
        return millares_comas_03(x, 0);
    } else if ($(window).width() >= 1024) {
        return amillares_comas_03(x, 0);
    } else if ($(window).width() >= 800) {
        return abbr_number(x, 3, 'M');
    } else {
        return abbr_number(x, 2, 'M');
    }

};
var formato_02 = function (x) {

    if ($(window).width() >= 1024) {
        return millares_comas_03(x, 0);
    } else if ($(window).width() >= 800) {
        return abbr_number(x, 2, 'M');
    } else {
        return abbr_number(x, 0, 'K');
    }

};
var formato_03 = function (x) {

    return millares_comas_03(x, 0);

};

var dateDiffInDays = function (a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

var getDom = function (a, b, c) {
    var obj;
    if (a === 'h1')
        return $("<h1>").attr('class', b).text(c);
    if (a === 'h2')
        return $("<h2>").attr('class', b).text(c);
    if (a === 'h3')
        return $("<h3>").attr('class', b).text(c);


    if (b !== undefined) {

        obj = $("<div></div>").attr('class', b).attr('id', b.split(' ')[0]).html(c);

        if (a === 'frm') {


            obj.dxForm({
                //formData: companies[0],
                readOnly: false,
                showColonAfterLabel: true,
                labelLocation: "left",
                //minColWidth: 300,
                colCount: 4
            }).dxForm("instance");

            return obj;
        }



        if (a === 'swt') {

            obj.dxSwitch({
                value: false
            });
            return obj;
        }

        if (a === 'txt') {

            obj.dxTextBox({
                value: "*"
            });
            return obj;
        }

        if (a === 'btn') {
            /*
             var modes = ["contained", "outlined", "text"];
             var options = [
             {text: "OK", type: "normal"},
             {text: "Apply", type: "success"},
             {text: "Done", type: "default"},
             {text: "Delete", type: "danger"}
             ];
             */
            obj.dxButton({
                //stylingMode: 'outlined',
                //text: buttonOptions.text,
                //type: 'warning',
                onClick: function () {
                    //DevExpress.ui.notify("The  button was clicked");
                }
            });

        } else {
            return $("<" + a + " ></" + a + ">").attr('class', b).attr('id', b.split(' ')[0]);
        }

        return obj;

    }
    if (a === 'br')
        return $("<br>");


    return $("<" + a + " ></" + a + ">");

};

var setHtml = function (id, clase, control, contenido) {

    return "<" + control + " id ='" + id + " clase ='" + clase + "' >" + contenido + "</" + control + ">";

};

var formatear_cadena_01 = function (x) {
    return "'" + x + "',";
};
var formatear_cadena_02 = function (cadena) {
    if (cadena.length === 0) {
        return '';
    } else {
        return cadena.substring(0, cadena.length - 1);
    }
};
var fm_boton_activo = function (x) {

    if (parseInt(x.attr('activo')) === 0) {

        x.find('span').removeClass('glyphicon-ban-circle');
        x.find('span').addClass('glyphicon-ok');
        //procesar($(this).attr('indice'));
        x.attr('activo', 1);

    } else {

        x.find('span').addClass('glyphicon-ban-circle');
        x.find('span').removeClass('glyphicon-ok');
        //dxDataGrid[$(this).attr('indice')].hide('fast');
        x.attr('activo', 0);
    }

};

