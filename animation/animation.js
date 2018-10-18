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
      alert("There is an unedited box!");
      out = true;
    }
  }

  for(i=0; i<z.length&&!out; i++){
    x = $(z[i]).css('display');
    if(x=='none'){
      document.getElementById(key[i]).style.display="block";
      out = true;
    }
    cont++;
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
};


function logout(){
  $("#menuBlock1").hide();
  $("#leftContent").hide();
  $("#rightContent").hide();
  $("#hiddenMenu").show();

};

function register(){
  $(".rightBox").hide();
  $(".leftBox").hide();
  $("#registerBox").show();
};

function registerForm(){
  var email = document.getElementById("email");

  if(email.value == getCookieByName("email")){
    alert("An account associated with email already exists");
  }else{
    document.cookie= email.name + "=" + email.value;
    var username = document.getElementById("username");
    document.cookie= username.name + "=" + username.value;
    var password = document.getElementById("password");
    document.cookie= password.name + "=" + password.value;
    var firstname = document.getElementById("firstname");
    document.cookie= firstname.name + "=" + firstname.value;
    var lastname = document.getElementById("lastname");
    document.cookie= lastname.name + "=" + lastname.value;
    var birthdate = document.getElementById("birthdate");
    document.cookie= birthdate.name + "=" + birthdate.value;
    var adress = document.getElementById("adress");
    document.cookie= adress.name + "=" + adress.value;
  }
};

function getCookieByName(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
};

function login(){
  $("#menuBlock1").hide();
  $("#hiddenMenu").hide();
  $("#registerBox").hide();
  $(".rightBox").hide();
  $(".leftBox").hide();
  $("#loginBox").show();
};

function loginForm(){
  var emailLogin = document.getElementById("emailLogin");
  var passwordLogin = document.getElementById("passwordLogin");
  if(emailLogin.value != getCookieByName("email")){
    alert("The specified email is not registered");
  }else{
    if(passwordLogin.value != getCookieByName("password")){
      alert("Wrong password!");
    }else{
      alert("Loging in...");
      $("#loginBox").hide();
      $(".rightBox").show();
      $(".leftBox").show();
      $("#leftContent").show();
      $("#rightContent").show();
      $("#menuBlock1").show();

      document.getElementById("user-name").innerHTML = getCookieByName("username");
      document.getElementById("pInfo-Detail").innerHTML = "New user";

      document.getElementById("p-firstname").value = getCookieByName("firstname");
      document.getElementById("p-lastname").value = getCookieByName("lastname");
      document.getElementById("p-email").value = getCookieByName("email");
      document.getElementById("p-adress").value = getCookieByName("adress");
      document.getElementById("p-phone").value = "";
      document.getElementById("p-birthdate").value = getCookieByName("birthdate");

      document.getElementById("userPhoto").src = "images/newUserIcon.png";
    }
  }
};

function pInfoForm(){

  var firstname = document.getElementById("p-firstname");
  document.cookie= firstname.name + "=" + firstname.value;
  var lastname = document.getElementById("p-lastname");
  document.cookie= lastname.name + "=" + lastname.value;
  var email = document.getElementById("p-email");
  document.cookie= email.name + "=" + email.value;
  var birthdate = document.getElementById("p-birthdate");
  document.cookie= birthdate.name + "=" + birthdate.value;
  var adress = document.getElementById("p-adress");
  document.cookie= adress.name + "=" + adress.value;
  var phone = document.getElementById("p-phone");
  document.cookie= adress.name + "=" + adress.value;
};

function checkVoid(){
  var x;
  x = document.getElementById("p-firstname");
  if(x.value==""){
    alert("Firstname field is empty");
    x.value=getCookieByName("firstname");
  }
  x = document.getElementById("p-lastname");
  if(x.value==""){
    alert("Lastname field is empty");
    x.value=getCookieByName("lastname");
  }
  x = document.getElementById("p-email");
  if(x.value==""){
    alert("Email field is empty");
    x.value=getCookieByName("email");
  }
  x = document.getElementById("p-adress");
  if(x.value==""){
    alert("Adress field is empty");
    x.value=getCookieByName("adress");
  }
  x = document.getElementById("p-phone");
  if(x.value==""){
    alert("Phone field is empty");
    x.value=getCookieByName("phone");
  }
  x = document.getElementById("p-birthdate");
  if(x.value==""){
    alert("Birthdate field is empty");
    x.value=getCookieByName("birthdate");
  }
};
