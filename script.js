(function(){

    'use strict';
    
    document.getElementById('convert').addEventListener('submit',function(event){
        event.preventDefault();
        let distance = parseFloat(document.getElementById('distance').value)			// distance = parseFloat(distance)

        let answer = document.getElementById('answer')

        if (distance){
            let conversion = (distance * 1.609344).toFixed(2)
            answer.innerHTML = `<h2>${distance} miles is equal to ${conversion} kilometers</h>`
        }
        else
        {
            answer.innerHTML = '<h2>Please Provide a number</h2>'
        }
    })
    
})();