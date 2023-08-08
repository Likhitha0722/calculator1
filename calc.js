let operator='';
let fn='';
let sn='';
function append(number){
    if(operator==='')
    {
        fn+=number;
        document.getElementById('result').value=fn;

    }
    else{
        sn+=number;
        document.getElementById('result').value=sn;
    }
}
function operation(op){
    operator=op;
}
function calculate(){
    let res;
    switch(operator){
        case '+':
            res=parseInt(fn)+parseInt(sn);
            break;
        case '-':
                res=parseInt(fn)-parseInt(sn);
                break;
        case '*':
                 res=parseInt(fn)*parseInt(sn);
                break;
        case '/':
                 res=parseInt(fn)/parseInt(sn);
                break;
                    
    }
    document.getElementById('result').value=res;

}
function clearesult(){
    operator='';
    fn='';
    sn='';
    document.getElementById('result').value='';

}