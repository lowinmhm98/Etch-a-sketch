const grid = document.querySelector('.grid')
let elements;
 function addElementsToGrid (number)
 {
     grid.innerHTML="";
    for (let count =0; count<number;count++) 
    {
        const row= document.createElement('div')
        for (let countrow=0; countrow<number;countrow++)  {
        
        const element= document.createElement('div')
      
        element.classList.add('element');
        row.appendChild(element);
        }
        row.classList.add('row')
        grid.appendChild(row)
        
    }
    
    elements= document.querySelectorAll('.element');
    elements.forEach(el => {el.addEventListener('mouseover',(e)=> {
        if (randomtrue) 
        {
            e.target.setAttribute("style","background-color:"+'#'+(Math.random().toString(16)+'00000').slice(2,8)) 
        }else 
        {
        e.target.setAttribute("style","background-color: green")
        }
    })
        
    });
   
    
 }


 const input= document.querySelector('input')
 const output= document.querySelector('output')
input.addEventListener('input',(e)=>{
    addElementsToGrid(e.target.value)
    output.textContent= e.target.value;

})

let randomtrue =false;

const random= document.querySelector('.random')
random.addEventListener('click',(e)=>{
    randomtrue=true;
    standardtrue=false
})

let standardtrue=false;
const standard= document.querySelector('.standard')
standard.addEventListener('click',(e)=>{
    randomtrue=false;
    standardtrue=true;
})