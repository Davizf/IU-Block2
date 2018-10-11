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


function logout(){
  $("#menuBlock1").hide();
  $("#leftContent").hide();
  $("#rightContent").hide();
  $("#hiddenMenu").show();

}

function register(){
  $(".rightBox").hide();
  $(".leftBox").hide();
  $("#registerBox").show();
}


/*  W3school copy and paste
Problem -> can save the cookie file in the path
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}
*/