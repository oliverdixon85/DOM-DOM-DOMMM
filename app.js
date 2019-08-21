document.addEventListener("DOMContentLoaded", function(){

    let btn = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    let containerDiv = document.createElement('div');
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    document.body.appendChild(containerDiv);
    
    
    let counter = 1;

        btn.addEventListener('click', function(){
            var square = document.createElement('div');
            square.className = 'square';
            square.id = counter++;
            document.body.appendChild(square);

    })

    square.addEventListener('mouseover', function(){
        let squareText = document.createTextNode(square.id);
        square.appendChild(squareText);  
  
    })

    square.addEventListener('mouseout', function(){
        square.removeChild(squareText)
    });
   
    
    


})

    