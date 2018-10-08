function pInfoDetail() {
  document.getElementById("exerciseA").style.display="block";
  document.getElementById("exerciseB").style.display="none";
};
function opinion() {
  document.getElementById("exerciseA").style.display="none";
  document.getElementById("exerciseB").style.display="block";
};

function addKeyword(){
  var z = ["#keyword1","#keyword2","#keyword3","#keyword4","#keyword5","#keyword6"];
  var key = ["keyword1","keyword2","keyword3","keyword4","keyword5","keyword6"];
  var word = ["k1","k2","k3","k4","k5","k6"];
  var x;
  var i;
  var out = false;
  var cont = 0;

  for(i=0; i<word.length&&!out; i++){
    if(document.getElementById(word[i]).value==""&& $(z[i]).css('display')=='block'){
      out = true;
      alert("There is an unedited box!");
    }
  }

  for(i=0; i<z.length&&!out; i++){
    cont++;
    x = $(z[i]).css('display');
    if(x=='none'){
      document.getElementById(key[i]).style.display="block";
      out = true;
    }
  }
  if(cont==6){
    alert("Maximum number of keywords!");
  }

};

function deleteKeyword(keyword,word){
  document.getElementById(word).value="";
  document.getElementById(keyword).style.display="none";
};



function opinionBox1(){
  document.getElementById("popup1").style.display="block";
};
function opinionBox2(){
  document.getElementById("popup2").style.display="block";
};

function opinionBox3(){
  document.getElementById("popup3").style.display="block";
};
function cerrarPopup(n){
  document.getElementById(n).style.display="none";
}
