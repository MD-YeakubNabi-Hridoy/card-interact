let total = 0;
function addToCart(data){
    const itemsName = data.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = itemsName;
    const selectedElemnt = document.getElementById('item-list');
    selectedElemnt.appendChild(li);
    const price = data.parentNode.childNodes[5].innerText.split(' ')[2];
    total = parseFloat(total) + parseFloat(price);
    let firstTotal= document.getElementById('calculate').innerText = total;
    firstTotal = parseFloat(firstTotal) - ((firstTotal*20)/100);
    document.getElementById('final-price').innerText = firstTotal;
}