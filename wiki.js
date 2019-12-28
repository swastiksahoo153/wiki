
$('#btnn').click(function() {

    var searchTerm=$('#inputString').val();
    var urL="https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm;
    $.ajax({
        type:'GET',
        url: urL,
        dataType:"json",
        async: false,
        success : function(response){ 
            console.log(response)
            $('#output').html("");
            for(var i=0;i<response[1].length;i++){
                $("#output").prepend("<div class='division'><li id='res'><a target='blank' href="+response[3][i]+">"+response[1][i]+"</a><p>"+response[2][i]+"</p></li></div>")
            }            
        },
        error : function(response){
            console.log(response);
        }
    })

        

});
