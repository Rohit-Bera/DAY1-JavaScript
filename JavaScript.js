//selectors..
const panels = document.querySelectorAll('.panel');  // list of pannels available.


//Event-Listners...
panels.forEach(panel => {
    panel.addEventListener('click' , () => {
        removeClass(); // remove active class function is called..
        panel.classList.add('active');
    })
})


//Functions...

function removeClass(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}