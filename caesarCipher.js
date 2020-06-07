function caesarCipher(str, num){
    num = num %26
    var lowerCaseString = str.toLowerCase();
    var alphabet ="abcdefghijklmnopqrstuvwxyz" .split('');
    var newString = '';


    for( var i = 0; i < lowerCaseString.length; i++){
        var currentLetter = lowerCaseString[i];
        if(currentLetter === ' '){
            newString  += currentLetter;
            continue        
        }

        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex <0 ) newIndex = 26 + newIndex;
        if(str[i] === str[i].toUpperCase()){
            newString += alphabet[newIndex].toUpperCase();
        }
        else newString += alphabet[newIndex];
    }
    console.log(newString);    
    var p = document.createElement('p');    
    var text = document.createTextNode(newString);
    p.appendChild(text);
    document.getElementById('here').appendChild(p);
}

caesarCipher('Big Car',-900 );

caesarCipher('Javascript',-900 );