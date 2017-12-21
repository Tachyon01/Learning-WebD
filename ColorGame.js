var colors = getColor(6);
var squares = document.querySelectorAll(".square");
var goal = pickColor();
var target = document.querySelector("#target");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var bar = document.querySelector("#bar");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var level = true;

easy.addEventListener("click",function(){
	reset.textContent = "New Colors";
	level = false;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors = getColor(3);
	goal = pickColor();
	target.textContent = goal;
	h1.style.backgroundColor = "steelblue";
	for (var i=3; i<6; i++)
	{
		squares[i].style.display = "none";
	}
	for (var i=0; i<3; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
});

hard.addEventListener("click",function(){
	reset.textContent = "New Colors";
	hard.classList.add("selected");
	easy.classList.remove("selected");
	level = true;
	colors = getColor(6);
	goal = pickColor();
	target.textContent = goal;
	h1.style.backgroundColor = "steelblue";
	for (var i=0; i<6; i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});


reset.addEventListener("click",function(){
	if (level)
	{
		colors = getColor(6);
	}
	else
	{
		colors = getColor(3);
	}
	goal = pickColor();
	target.textContent = goal;
	h1.style.backgroundColor = document.body.style.backgroundColor;
	for (var i=0; i < colors.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	reset.textContent = "New Colors";
	message.textContent = "";
});

target.textContent = goal;

for (var i=0; i < colors.length; i++)
{
	squares[i].style.backgroundColor = colors[i];

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