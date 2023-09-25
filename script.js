//your code is here

window.addEventListener('DOMContentLoaded',{
	const olList = document.getElementById("infi-list");
	let itemCount = 10;
	const increment = 2;

	// Function to add more list items
	function addItem(){
		for(let i=0;i<=increment;i++){
			const li = document.createElement("li");
			li.textContent = "Item "+(itemCount+i);
			olList.appendChild(li);
		}
		itemCount += increment;
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