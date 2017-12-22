//Clearing input
$("input[type='text']").val("");

//Removing minus
$(".fa-chevron-down").fadeToggle(0);


//Ckeck of todos by clicking
$("ul").on("click","li",function() {
	$(this).toggleClass("completed");
});

//Deleting todos
$("ul").on("click", "span",function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//New todos
$("input[type='text']").keypress(function(event){
	if (event.which === 13)
	{
		var todo = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todo + "</li>");
		$(this).val("");
	}
});

//$(".fa-plus").click(function(){
	//$("input[type='text']").fadeToggle();
//})

$("h1 i").click(function(){
	$("input[type='text']").fadeToggle();
	$(".fa-chevron-up").fadeToggle(0);
	$(".fa-chevron-down").fadeToggle(0);
});