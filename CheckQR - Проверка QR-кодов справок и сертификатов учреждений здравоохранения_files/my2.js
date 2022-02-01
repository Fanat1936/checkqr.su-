$(function($){
	$(".action-print").click(function(){
		window.print();
		return false;
	});
});



 $("#edit-field-fam-und-0-value").keyup(function () {
     var value = $(this).val();
     $("edit-field-idd-und-0-value").val(value);
   });
   
   $(document).ready(function(){
$('.page-all-covid19-svod .view-grouping-header').click(function(){
$(this).parent().children('.page-all-covid19-svod div.view-grouping-content').toggle('normal');
return false;
});
});


$('#imgsaver').click(function() {
                html2canvas($('#savediv')[0], {
                            width: 1000,
                            height: 1000
                }).then(function(canvas) {
                var a = document.createElement('a');
                a.href = canvas.toDataURL("image/png");
                a.download = 'CheckQR.png';
                a.click();
        });
});
