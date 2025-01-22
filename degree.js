let calculateDegree = () => {
    let input = document.querySelector("#studentDegree");
    let p = document.querySelector("p");
    let degree = input.value;
    if(degree < 50){
        if( degree >= 0){
            p.innerText = "يا سااااااقط" ;
        }
        else{
            p.innerText = "رقم غير صحيح" ;

        }
    
    }
    else{
        if(degree < 65){
            p.innerText = "مقبول";
        }
        else{
            if(degree < 75){
                p.innerText = "جيد";
            }
            else{
                if(degree < 85){
                    p.innerText = "جيد جدا";
                }
                else{
                    if(degree <= 100){
                        p.innerText = "ممتاز";
                    }
                    else{
                        p.innerText = "رقم غير صحيح" ;
                    }
                }
            }
        }
    
    }


}