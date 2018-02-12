var wins = 0;
        var losses = 0;
        var guesses = 10;
        
     
        document.onkeyup = function(event){
            var guessLetters = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
            var userGuess = event.key;
      
        document.getElementById("user").innerHTML = userGuess;
        var computerChoice = guessLetters[Math.floor(Math.random() * guessLetters.length)];
        
       
        if(userGuess === computerChoice){
        wins++;
        }
        
        else{
        guesses--;
       }

        if(guesses === 0){
        losses++, guesses=10
        }
        
    
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML =  losses;
    document.getElementById("guesses").innerHTML =  guesses;
   
        }
        