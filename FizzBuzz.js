function fizzBuzz(num){
    
    for(var i=1; i<num;i++){
        var result ='';
        var p = document.createElement('p');            
       

        if( i % 15 === 0){
            result ='FIZZBUZZ';
        }
        else if(i % 3 === 0){
            result ='FIZZ';
        }
        else if (i % 5 === 0){
            result ='BUZZ';
        }
        else{
            result =i;            
        }

        var text = document.createTextNode(result);
        p.appendChild(text);
        document.getElementById('here').appendChild(p);
    }
}

fizzBuzz(20);