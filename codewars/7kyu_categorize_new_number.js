function openOrSenior(member){
    var arr = [];
    for(x in member){
        if(member[x][0] >= 55 && member[x][1] > 7 ){
            arr.push('Senior');
        } else {
            arr.push('Open');
       }
    }
    return arr;
  }

  console.log(openOrSenior([[45, 12],[55,32],[19, -2],[104, 20]]))


  /* Solução MUITO INTERESSANTE! 
function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  } */