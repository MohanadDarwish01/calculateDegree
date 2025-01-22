let calculateDegree = () => {
    let input = document.querySelector("#studentDegree");
    let p = document.querySelector("p");
    let degree = input.value;
    if(degree < 50){
        if( degree >= 0){
            p.innerText = "You Are Fail" ;
        }
        else{
            p.innerText = "Invalid Number" ;

        }
    
    }
    else{
        if(degree < 65){
            p.innerText = "You Are Pass";
        }
        else{
            if(degree < 75){
                p.innerText = "You Are Good";
            }
            else{
                if(degree < 85){
                    p.innerText = "You Are Very Good";
                }
                else{
                    if(degree <= 100){
                        p.innerText = "excellent";
                    }
                    else{
                        p.innerText = "Invalid Number" ;
                    }
                }
            }
        }
    
    }


}