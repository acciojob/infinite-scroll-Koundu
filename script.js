//your code is here

document.addEventListener('DOMContentLoaded',function() {
	const olList = document.getElementById("infi-list");
	let itemCount = 10;
	const increment = 2;
	intial = function intialItems(itemCount=10){
		for(let i=1;i<itemCount+1;i++){
		const li = document.createElement("li");
		li.textContent = "Item "+(i);
		olList.appendChild(li);
		}
	}
	intial();
	// Function to add more list items
	function addItem(){
		for(let i=1;i<increment+1;i++){
			const li = document.createElement("li");
			li.textContent = "Item "+(itemCount+i);
			olList.appendChild(li);
		}
		itemCount = itemCount+increment;
	}

olList.addEventListener('scroll',function(){
		const scrollPosition = this.scrollTop + this.clientHeight;
		const totalHeight = olList.scrollHeight;
		if(scrollPosition >= totalHeight - this.clientHeight){
			addItem()
		}
	});
	addItem();
});

