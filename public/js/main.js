var template =  '<div class="col-sm-6 col-lg-4">' +
                    '<div class="card">'+
                        '<div class="header">'+
                            '<div class="container-fluid">'+
                                '<div class="row enlaceCard">'+
                                    '<a href="detail.html">'+
                                        '<div class="col-xs-3 col-sm-4 col-md-3 col-lg-3">'+
                                            '<img src="{{imagen}}" class="img-responsive img-circle" alt="imagen del primer hijo">'+
                                        '</div>'+
                                        '<div class="col-xs-7 col-sm-4 col-md-7 col-lg-7">'+
                                            '<a href="detail.html" class="nameChildren">{{name}}</a>'+
                                        '</div>'+
                                        '<div class="col-xs-2 col-sm-4 col-md-2 col-lg-2">'+
                                            '<img src="/vendors/img/gender_24.png" class="img-responsive iconGender" alt="">'+
                                        '</div>'+
                                    '</a>'+ 
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="content">'+
                            '<div class="footer">'+
                                '<div class="legend">'+
                                    '<div class="container-fluid">'+
                                        '<div class="row">'+
                                            '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
                                                '<div class="contentInfoCard">'+
                                                    '<span class="subtitleCard">Edad</span>'+
                                                    '<p class="textoCard">{{edad}}</p>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
                                                '<div class="contentInfoCard">'+
                                                    '<span class="subtitleCard">Fecha de Nacimiento</span>'+
                                                    '<p class="textoCard">{{fecha}}</p>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="row">'+
                                            '<div class="col-xs-12 col-sm-12 col-lg-12">'+
                                                '<div class="contentInfoCard">'+
                                                    '<span class="subtitleCard">Lugar de Nacimiento</span>'+
                                                    '<p class="textoCard">{{lugar}}</p>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="col-xs-12 col-sm-12 col-lg-12">'+
                                                '<div class="contentInfoCard">'+
                                                    '<span class="subtitleCard">CS Donde nacio</span>'+
                                                    '<p class="textoCard">{{dondeNacio}}</p>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div class="col-xs-12 col-sm-12 col-lg-12">'+
                                                '<div class="contentInfoCard">'+
                                                    '<span class="subtitleCard">CS Donde se atiende</span>'+
                                                    '<p class="textoCard">{{seAtiende}}</p>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="stats">'+
                            '<div class="buttonCard">'+
                                '<div class="container-fluid">'+
                                    '<div class="row">'+
                                        '<a href="#">'+
                                            '<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10"><p class="buttonCardText">CARTILLA DE VACUNACIÓN</p></div>'+
                                            '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 text-center"><i class="fa fa-arrow-down iconArrowCard"></i></div>'+
                                        '</a>'+                 
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="buttonCard">'+
                                '<div class="container-fluid">'+
                                    '<div class="row">'+
                                        '<a href="#">'+
                                            '<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10"><p class="buttonCardText">CERTIFICADO DE RECIÉN NACIDO</p></div>'+
                                            '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 text-center"><i class="fa fa-arrow-down iconArrowCard"></i></div>'+
                                        '</a>'+                  
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';

var numberDni = $("#valDni").val();

$(document).ready(function(){
    // $.getJSON('json/data.json', function(data){
    //     console.log(data);
    // });
    $('#search').click(function(){
        $.ajax({
            url:'json/articulo.json',
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(data){
                $(data.usuarios).each(function(index, value){
                    // $(".mostrar").append("<div>" + value.nombre+ "</div>")
                    for(var i = 0 ; i <= value.hijos.length-1; i++){
                        // console.log(value.hijos[i].genero);
                        var card = "";
                        card += template
                            .replace("{{name}}", value.hijos[i].nombre)
                            .replace("{{edad}}", value.hijos[i].edad)
                            .replace("{{fecha}}", value.hijos[i].fecha)
                            .replace("{{lugar}}", value.hijos[i].lugar)
                            .replace("{{dondeNacio}}", value.hijos[i].dondeNacio)
                            .replace("{{seAtiende}}", value.hijos[i].seAtiende)
                            .replace("{{imagen}}", window.location.href + value.hijos[i].imagen)                                     
                        $(".mostrar").append(card);
                        
                        if( value.hijos[i].genero === "femenino"){
                            //template.replace("/vendors/img/gender_24.png", "vendors/img/genderF_24.png");
                            $(".iconGender").attr("src", "vendors/img/genderF_24.png");
                            $(".iconGender").attr("alt", "icono de género femenino");

                        }else{
                            console.log(value.hijos.genero);
                            alert("es M")
                            //template.replace("/vendors/img/gender_24.png", "vendors/img/genderM_24.png"); 
                            $(".iconGender").attr("src", "vendors/img/genderM_24.png");
                            $(".iconGender").attr("alt", "icono de género masculino");
                        }                   
                    }
                })
            }
        })
    })
})