// let squares = document.querySelectorAll(".square");


// for (let square of squares) {
  // square.addEventListener("click", (event) => {

   
  //  square.classList.remove("purple");
 //   square.classList.add("teal");
  //    if (square.id === "square--one") {
  //        console.log(`The ${square.innerText} was clicked`);
  //  }
    
    
    
 // }); 
 // }
/* const display = document.querySelector('#result')

let buttons =document.querySelectorAll('.button') 
for (let button of buttons)
    button.addEventListener("click", (event) =>{
        console.log(button.innerText)
        
        let newElement = document.createElement('div')
        let text = document.createTextNode(event.target.innerText)
        newElement.appendChild(text)
        display.appendChild(newElement)
    })

*/ 


let display = document.getElementById('result')

// let buttons = document.querySelectorAll('.button') 
let buttons = Array.from(document.getElementsByClassName('button'));

// for (let button of buttons)
buttons.map( button => {

    button.addEventListener('click', (event) => {
        //switch(button.innerText)
        switch(button.innerText)
        {
            case 'C': 
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
            // case '=': 
               //  display.innerText = math.evaluate(display.innerText);
                break;
            default: 
               display.innerText += button.innerText;
               // display.innerText += button.innerText;

        }
    });
});





