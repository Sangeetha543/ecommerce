
fetch("https://sangeetha543.github.io/ecommerce/data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	console.log(data)
	displayData(data)
})
// function displayData(info){
// 	console.log(info.mobiles[info.mobiles.length-1])
// }
// function displayData(info){
// 	var div=document.querySelectorAll(".div");
// 	console.log(elemenet[1])
// }
// function displayData(info){
// 	var div=document.querySelectorAll(".div");
// 	console.log(elemenet[1])
// }
function displayData(info){
	var bodyElement=document.querySelector("body")
	var row=document.createElement("section")
	row.classList.add("row","justify-content-center");
	bodyElement.append(row)
	info.mobiles.map(value=>{

	var column=document.createElement("article")
	column.classList.add("col-sm-10","col-md-6","col-lg-3")	
	row.append(column)
	// card
	var card=document.createElement("div");
	card.classList.add("card","mt-5")

	//card- body
	var cardBody=document.createElement("div");
	cardBody.classList.add("card-body")
	//image
	var imageElement=document.createElement("img");
	imageElement.src=value.image;
	imageElement.classList.add("img-responsive")
	imageElement.alt=value.name;
	cardBody.append(imageElement);
	// name
	var name=document.createElement("h2");
	name.textContent=value.name;
	name.classList.add("text-center","text-danger")
	// price
	var price=document.createElement("p");
	price.classList.add("text-secondary","text-center");
	price.innerHTML="<s>₹" +value.price+"/-</s>";
	cardBody.append(price)
	//oprice
	var oprice=document.createElement("p");
	oprice.classList.add("text-success","text-center");
	oprice.innerHTML="<b>₹" +value.oprice+"/-</b>";
	oprice.textContent=value.oprice;
	//button
	var buttonParent=document.createElement("div");
	buttonParent.classList.add("d-grid","gap-2");
	var button=document.createElement("button");
	button.classList.add("btn","btn-primary","btn-block");
	button.textContent="Add to cart";
	buttonParent.append(button);
	cardBody.append(imageElement);

	cardBody.append(name);
	cardBody.append(price);
	cardBody.append(oprice);
	cardBody.append(buttonParent);	
	card.append(cardBody);
	column.append(card);

	})
	

}	
