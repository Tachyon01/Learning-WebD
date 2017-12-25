//Clearing input
$("#newTodo").val("");

//Removing minus
$(".fa-chevron-down").fadeToggle(0);
var add = true;

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
$("#newTodo").keypress(function(event){
	if (event.which === 13)
	{
		var todo = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todo + "</li>");
		$(this).val("");
	}
});

//Toggling text-box
$("h1 i").click(function(){
	$("#newTodo").slideToggle(500);
	if(add)
	{
		add = false;
		$(".fa-chevron-up").fadeToggle(500, function(){
		$(".fa-chevron-down").fadeToggle(0);
		});
	}
	else
	{
		add = true;
		$(".fa-chevron-down").fadeToggle(500, function(){
		$(".fa-chevron-up").fadeToggle(0);
		});
	}
});
