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
  $(".leftBox").hide();
  $(".rightBox").hide();
  $("#hiddenMenu").show();
  $("#searchBar").show();
  $("#gallery").show();

};

function register(){
  $(".rightBox").hide();
  $(".leftBox").hide();
  $("#registerBox").show();
  $("#searchBar").hide();
  $("#gallery").hide();
};

function registerForm(){
  var email = document.getElementById("email");

  if(email.value == getCookieByName("email")){
    alert("An account associated with email already exists");
  }else{
    alert("Account created");
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
  $("#searchBar").hide();
  $("#gallery").hide();
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
  document.cookie= phone.name + "=" + phone.value;
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


/*   Gallery  */

/*
Para la implementacion de la galeria rotaria hemos utilizado el plugin "EasySlides"
*/
$(document).ready(function() {
  $('.slider_circle').EasySlides({'autoplay': true, 'show': 5})
});

(function ($) {

  $.fn.EasySlides = function (options) {
    var settings = $.extend({
      'autoplay': false,
      'timeout': 3000,
      'show': 5,
      'delayaftershow': 300,
      'loop': true,
      'startslide': 0,
      'beforeshow': function () {},
      'aftershow': function () {},
    }, options);
    return this.each(function () {
      var this_slider = this;
      var EasySlidesTimer;
      var EasySlidesCanChange = true;

      var count = $(this_slider).children('*:not(.next_button, .prev_button, .nav_indicators)').length;
      var cur_slide = 0;
      var mousedowned = false;
      var need_slide = 0;
      var slides;
      if (count > 0) {

        while (count < settings['show']) {
          var html = $(this_slider).html();
          $(html).appendTo(this_slider);
          $(this_slider).children('.next_button:eq(0), .prev_button:eq(0), .nav_indicators:eq(0)').remove();
          slides = $(this_slider).children('*:not(.next_button, .prev_button, .nav_indicators)');

          count = $(slides).length;
        }
        slides = $(this_slider).children('*:not(.next_button, .prev_button, .nav_indicators)');


        var EasySlidesNext = function (nextslide) {
        if (EasySlidesCanChange) {
          EasySlidesCanChange = false;
          setTimeout(function () {
            EasySlidesCanChange = true;
          }, settings['delayaftershow']);
          clearTimeout(EasySlidesTimer);
          if (typeof settings['beforeshow'] == 'function') {
            settings['beforeshow']();
          }
          var i = 0;
          if (count > 0) {
            if (typeof nextslide == 'number') {
                cur_slide = nextslide;
                } else {
                  cur_slide++;
                  nextslide = cur_slide;
                }

                $(this_slider).children('.nav_indicators').find('ul').find('li').removeClass('active');
                $(this_slider).find('.nav_indicators ul li:nth-child(' + (nextslide + 1) + ')').addClass('active');
                i = 0;
                $(slides).each(function () {
                var cssclass = '';
                var icount = 0;
                icount = i - nextslide;
                while (icount < 0) {
                  icount = icount + count;
                }
                if (icount == 0) {
                  cssclass = 'active';
                  $(this_slider).find('.' + cssclass + ':not(.nav_indicators ul li)').removeClass(cssclass);
                  $(this).removeClass('hidden');
                  $(this).addClass(cssclass);
                } else if (icount < settings['show'] / 2) {
                  cssclass = 'next' + icount;
                  $(this_slider).find('.' + cssclass).removeClass(cssclass);
                  $(this).removeClass('hidden');
                  $(this).addClass(cssclass);
                } else if (icount > count - (settings['show'] / 2)) {
                  cssclass = 'prev' + (count - icount);
                  $(this_slider).find('.' + cssclass).removeClass(cssclass);
                  $(this).removeClass('hidden');
                  $(this).addClass(cssclass);
                } else {
                  $(this).addClass('hidden');
                }
                if ((Math.abs(i - nextslide) > (settings['show'] / 2)) && (settings['loop'] == false)) {
                  var icnt = 1;
                  while (icnt < settings['show'] / 2) {
                    cssclass = 'next' + icnt;
                    if ($(this).hasClass(cssclass) ) {
                      $(this).removeClass(cssclass)
                    };
                    cssclass = 'prev' + icnt;
                    if ($(this).hasClass(cssclass) ) {
                      $(this).removeClass(cssclass)
                    };
                    icnt ++;
                    };
                    $(this).addClass('hidden');
                    }
                    i++;
                    });
                    if (settings['autoplay']) {
                      clearTimeout(EasySlidesTimer);
                      EasySlidesTimer = setTimeout(function () {
                      EasySlidesNext();
                    }, settings['timeout']);
                  }
                }

              }
          }
        EasySlidesNext(settings['startslide']);


        $(this_slider).find('.next_button').click(function () {
          EasySlidesCanChange = true;
          EasySlidesNext();
        });
        $(this_slider).find('.prev_button').click(function () {
          EasySlidesCanChange = true;
          cur_slide--;
          EasySlidesNext(cur_slide);
        });

      }
    });
  }
})(jQuery);
