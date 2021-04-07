
var b=document.getElementById('text');
function number(n){
  if(b.value[b.value.length-1]=='+'||b.value[b.value.length-1]=='-'||b.value[b.value.length-1]=='*'||b.value[b.value.length-1]=='/'){
    if(n=='+'||n=='-'||n=='*'||n=='/'){

    }
    else{
      b.value=b.value+n;
    }
  }
  else{
    b.value=b.value+n;
  }

}
function ac(){
  b.value='';
}
function equalto(){
  try{
    b.value=eval(b.value);
  }
  catch(equalto){
    b.value='error';
  }
}
