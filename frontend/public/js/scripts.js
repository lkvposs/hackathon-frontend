$(document).ready(function () {
	$("#header").load("header.html");
    $.ajax({ 
        type: 'GET', 
        url: 'phonebook/getAllContacts', 
        //data: { get_param: 'value' }, 
        success: function (data) { 
        	console.log(data);

            $.each(data.contactList, function(index, element) {
	            /*var val="<li>"+element.name;
	            val+="<ul><li>"+element.id+"</li></ul>";
	            val+="<ul><li>"+element.phone+"</li></ul>";
	            val+="<ul><li><img src='"+element.img+"' /></li></ul>";
	            val+="</li>";
	            $('#contacts').append(val);*/
	            var row='<tr>';
			   	
			    row+='<td>'+element.id+'</td>';
			    row+='<td>'+element.name+'</td>';
			    row+='<td>'+element.phone+'</td>';
			   	row+='<td><img src="'+element.img+'"/></td>';
			   	row+='</tr>';
			   	$('#contacts').append(row)
        	});
        	
        }
    });
    $("#footer").load("footer.html");
});