// $(document).ready(function(){
// 	$(function(){
// 		$("#get_btn").click(function(){
// 			$.ajax({
// 				url: "./json/data.json",
// 				type: "POST",
// 				dataType: "JSON",
// 				success: function(data){
// 					var canciones = "<ul>";
// 					for(var i = 0; i < data.length; i++){
// 						var informacion = "<li><img src='"+ data[i].portada +"' width='100'/>" + data[i].titulo;
// 						informacion += " - " + data[i].autor;
// 						informacion += " <em>" + data[i].album + "</em></li>";
// 						canciones += informacion;
// 					}
// 					canciones += "</ul>";
// 					$("#salida").html(canciones);
// 				}
// 			})
// 		})
// 	})
// })


// $(function () {
//     $("#get_btn").click(function () {
//         $.ajax({
//             // url: window.location.href + './js/date.json',
//             url: 'http://materiales.canela.me/json_jquery/',
//             type: 'GET',
//             dataType: 'JSON',
//             success: function (data) {
//                 var canciones = "<ul>";
//                 for (var c = 0; c < data.length; c++) {
//                     var infocancion = "<li><img src='"+data[c].portada+"' width='100'/>" + data[c].titulo;
//                     infocancion += " - " + data[c].autor;
//                     infocancion += " <em>" + data[c].album + "</em> </li>";
//                     canciones += infocancion;
//                 }
//                 canciones += "</ul>";
//                 $("#salida").html(canciones);
//             }
//         })
//     });
// });


// $('#search').click(function(){
//     $(".mostrar").empty();
//     $.ajax({
//         url: window.location.href + 'json/data.json',
//         type:"GET",
//         success: function(response){
//             var data = response.articles[0];
//             $(".mostrar").append("<div>" + data.name + "</div>" );
//         },
//         error: function(error){
//             console.log(error);
//         }
//     });
// })
$(document).ready(function(){
    // $.getJSON('json/data.json', function(data){
    //     console.log(data);
    // });
    // $('#search').click(function(){
        $.ajax({
            url:'json/articulo.json',
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(data){
                console.log(data);
                $(data.usuarios).each(function(index, value){
                    $(".mostrar").append("<div>" + value.nombre + "</div>")
                    console.log(value.nombre[0].hijos);
                    console.log(value)
                })
            }
        })
    // })

    $('#search').click(function(){
        $.ajax({
            url:'json/data.json',
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(data){
                $(data.articles).each(function(index, value){
                    $(".mostrar").append("<div>" + value.name + "</div>")
                    console.log(value.name);
                })
            }
        })
    })
})
