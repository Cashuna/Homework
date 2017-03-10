var key = "dc6zaTOxFJmzC";
var searchPath = "http://api.giphy.com/v1/gifs/search?q="+actors+"&api_key="+key+"&limit=10";
//1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
var actors = ["w.harris","h.mirren", "n.harris", "m.pena", "w.cenac", "t.heggins", "s.nelson", "g.diaz", "v.price", "jp.smith"];
var placeButton = document.getElementById("buttonsHere");
 
var giphPics = document.getElementById("giph");


//2. take the topics in array and create buttons in your HTML. --my thoughts, may need a parameter

  function createButtons (array){
  	for (var i =0; i < array.length; i++){
	button = document.createElement("BUTTON") //var button = $(<button>)
	button.setAttribute("id", "button-"+array[i]);
	buttonText = document.createTextNode(array[i]); 
	button.appendChild(buttonText); // button.append(actor[i])
	placeButton.appendChild(button); //$("placeButton").append(button)
  }
}

createButtons(actors);

$("#submit").on("click", function (){
	var addButton = document.getElementById("userAddedButton").value;//$("#userAddedButton").val
	actors.push(addButton);
	console.log(addButton);
	$("#buttonsHere").empty();
	createButtons(actors);
	return false;
});

// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place
//them on the page. if spaces are in name insert + into url query
/*$.ajax({url: "http://api.giphy.com/v1/gifs/search?q=will+smith&api_key=dc6zaTOxFJmzC&limit=10", method: "GET"}).done(function (response){
	var animated = response.data.fixed_height.url;
	var stillGiph = response.data.fixed_height_still.url
	var placeForGiph = document.createElement("IMG");
	placeForGiph.setAttribute("src", animated);

	console.log(animated);
	console.log(stillGiph);
	console.log(response);

})


//4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should
//stop playing.

// 5. API call to display its rating (PG, G, so on). * Do after images are displaying with button presses.
   

//6. Add a form to your page takes the value from a input box and adds it into array. Then make a function call that takes each
//topic in the array remakes the buttons on the page.
function userEvent(){
	addButton
	actors.push(addButton);
}

document.onload = userEvent()*/