function checkNumbers(number){
    const num=number;
    var t=true;
    const a=(num-num%100)/100;
    const b=((num-a*100)-num%10)/10;
    const c=num%10;
    if (c==a+b&&num.toString().length==3) {
        console.log('t='+t);
    }
    else if(c!=a+b&&num.toString().length==3){
        t=false;
        console.log('t='+t)
    }else{
        alert('wrong number');
    }
}
checkNumbers(321);
checkNumbers(3214);
