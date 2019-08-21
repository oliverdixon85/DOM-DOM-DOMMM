document.addEventListener("DOMContentLoaded", function () {

    let btn = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    let containerDiv = document.createElement('div');
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    document.body.appendChild(containerDiv);


    let counter = 1;

    btn.addEventListener('click', function () {
        var square = document.createElement('div');
        square.className = 'square';
        //assign the square's id with the value of counter
        square.id = counter;
        document.body.appendChild(square);

        //create the text for the sqaure but don't do anything with it ...
        //until your mouse events :)
        let squareText = document.createTextNode(counter);


        //remember something++ is an assignment,
        //so it needs to be its own line
        counter++;

        square.addEventListener('mouseover', function () {
            square.appendChild(squareText);
        });

        square.addEventListener('mouseout', function () {
            square.removeChild(squareText)
        });

        square.addEventListener('click', function () {
            var colors = ["red", "orange", "teal", "grey", "greenyellow"];
            var randomColor = Math.floor(Math.random() * colors.length);
            square.style.backgroundColor = colors[randomColor];
        })

        square.addEventListener("dblclick", function () {
            if ((square.id) % 2 == 0) {
                if (nextDiv = document.getElementById(square.id).nextElementSibling) {
                    nextDiv.remove();
                } else {
                    alert("No boxes to remove")
                }

            } else {
                if (prevDiv = document.getElementById(square.id).previousElementSibling) {
                    prevDiv.remove();
                } else {
                    alert("No boxes to remove")
                }
            }
        })


    })

})


    
    

