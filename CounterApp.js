let counter = 0;
const countervalue=document.getElementById('counter-value');
const decrementbtn = document.getElementById('decrement-btn');
const incrementbtn=document.getElementById('increment-btn');
const resetbtn = document.getElementById('reset-btn');

decrementbtn.addEventListener('click',()=> {
    counter--;
    countervalue.innerHTML = counter;
});
incrementbtn.addEventListener('click', ()=> {
    counter++;
    countervalue.innerHTML = counter;
});

resetbtn.addEventListener('click', reset);
    function reset(){
        counter = 0;
        countervalue.innerHTML = counter;
    }
