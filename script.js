//your code here!
const scroll = document.getElementById('infi-list')
let count = 0;


scroll.addEventListener('click'()=>{
	if(count<10){
		count ==10;
		for(let i=0;i<count;i++){
			addItem(count);
		}
	}
})

scroll.addEventListener('scroll',()=>{
	addItem(count);
	addItem(count);
})
function addItem(count){
	let para = document.createElement('p');
	para.innerText = "Item "+count;
	scroll.appendChild(para);
	count++
	console.log(count)
}