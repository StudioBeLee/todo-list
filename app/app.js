var itemList = [];

//declearing addToItem funtion 
function addToItem(){
	//grabs what the user typers inside of the imput feild and stroes it inside variable addToItem.
	var addToItem = document.getElementById ('addToItem').value;
	itemList.push(addToItem);
//Loops throught our array and stores wheatever the user inputted into varibale item.
	for (var i = 0; i< itemList.length; i++) {
		var nerItem = "<a href='#'> oneClick='removeItem(" + i +");'>X</a>" itemList[i] + "<br>";
	};
//Grabs our empty div and it's writing insideof it whatever the user writes.
	document.getElementById('items').innerHTML = newItem;
}

function removeItem(i){
	itemList.splice(i, 1) 

	var newItem ='';

	for (var i = 0; i < itemList.length; i++){
		newItem += itemList[i] + "<a href='#' oneClick='removeItem(" + i + ");'' >X</a>" "<br>";
	}


	document.getElementById("items").innerHTML = newItem;
}