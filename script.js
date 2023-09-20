//your code here!
const scroll = document.getElementById('infi-list')
var count = 0;

scroll.addEventListener('click'()=>{
	addItem(count);
})

scroll.addEventListener('scroll',()=>{
	addItem(count);
	count++;
	addItem(count);
	count++;
});

function addItem(count){
	let para = document.createElement('p');
	para.innerText = "Item "+count;
	scroll.appendChild(para);
}