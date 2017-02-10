let taslar = ["b0","b1","b2","b3","b4","b5","b6","b7","b8"]

function tasBul(val){
    for (i = 0; i < taslar.length; i++) { 
            if(document.getElementById(taslar[i]).firstChild.data == val){
                return(taslar[i])
            }
        }
}

function degisme(id, bosTasId){
    let yakinlar = []
    if([2,5,8].includes(parseInt(bosTasId[1]))){
        yakinlar = [+3,-3,-1]
    }else if([0,3,6].includes(parseInt(bosTasId[1]))){
        yakinlar = [+3,+1,-3]
    }else{
        yakinlar = [+3,+1,-3,-1]
    }
    for(i = 0; i < taslar.length; i++){
        if(parseInt(bosTasId[1])+parseInt(yakinlar[i]) == parseInt(id[1])){
            return(true);
        }
    }
    return(false)
}


function pushed(id){
    var btn = document.getElementById(id);
    if (btn.firstChild.data!=" "){
        bosTasId = tasBul(" ") 
        if(degisme(id, bosTasId) == false) return;
        document.getElementById(bosTasId).firstChild.data = btn.firstChild.data;
        btn.firstChild.data = " "
    }
}

function solvable(rndList){
    var count = 0;
    for(i=0;i<rndList.length-1;i++){
        if(rndList[i] == 0){
            continue;
        }
        for(j=i+1;j<rndList.length;j++){
            if(rndList[j] == 0){
                continue;
            }else if(rndList[i]>rndList[j]){
                count++;
            }
        }
        
    }
    
    if(count%2 == 0){
        return(true);
    }else{
        return(false);
    }
}

function randomTaslar(){
    var rndList = []
    while(true){
        rndList = []
        while(rndList.length < 9){
            var randomnumber = Math.ceil(Math.random()*9)-1
            if(rndList.indexOf(randomnumber) > -1) continue;
            rndList[rndList.length] = randomnumber;
        }
        if(solvable(rndList)){
            break;
        }
    }
    for (i = 0; i < taslar.length; i++) {
        if(rndList[i] == 0){
            val = " "
        }else{
            val = rndList[i].toString()
        }
        document.getElementById(taslar[i]).firstChild.data = val
    }
}