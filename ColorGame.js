var colors = [];
var squares = document.querySelectorAll(".square");
var goal = pickColor();
var target = document.querySelector("#target");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var level = true;

function change()
{
	message.textContent = "";                  
	reset.textContent = "New Colors";
	colors = (level ? getColor(6) : getColor(3));
	goal = pickColor();
	target.textContent = goal;
	h1.style.backgroundColor = "steelblue";
	for (var i=0; i<6; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
}

change();

easy.addEventListener("click",function(){
	level = false;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	change();
	for (var i=3; i<6; i++)
	{
		squares[i].style.display = "none";
	}
});

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	level = true;
	change();
	for (var i=3; i<6; i++)
	{
		squares[i].style.display = "block";
	}
});


reset.addEventListener("click",function(){
	change();
});
	

for (var i=0; i < colors.length; i++)
{

	squares[i].addEventListener("click",function(){
		var choice = this.style.backgroundColor;

		if (choice === goal)
		{
			message.textContent = "Correct";
			changeColors();
			h1.style.backgroundColor = goal;
			reset.textContent = "Play Again";
		}
		else
		{
			this.style.backgroundColor = document.body.style.backgroundColor;
			message.textContent = "Wrong";
		}
	});
}

function changeColors ()
{
	for (var i=0; i < squares.length; i++)
			{
				squares[i].style.backgroundColor = goal;
			}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function getColor(num)
{
	var arr = [];
	for (var i=0; i<num;i++)
	{
		arr[i] = randomColor();
	}
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}