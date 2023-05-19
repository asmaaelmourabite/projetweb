const inputs = document.querySelectorAll("#input1");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const inputn = document.querySelectorAll("#input2");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputn.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


const inputm = document.querySelectorAll("#input3");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputm.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


const inpute = document.querySelectorAll("#input4");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inpute.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


const inputph = document.querySelectorAll("#input5");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputph.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


var Users = [{Username:'asma' , Email:'lmorabitassma@gmail.com' , password:'asma1234'  ,Phone:'0689823404', Message:'good'},
       {Username:'hafsa' , Email:' hafsalbahtari@gmail.com' ,Phone:'0689823466', Message:'good'},
      {Username:'asma' , Email:'yasmineouqli@gmail.com' ,Phone:'0689823455', Message:'exl'}]
         function add(){
            var UsernameValue =document.getElementById('input1').value;
            var Emailvalue =document.getElementById('input2').value;
            var passwordlvalue =document.getElementById('input3').value;
            var phonevalue =document.getElementById('input4').value;
            if (phonevalue.length <8) {
              document.getElementById('sp3').innerHTML ='phone must contains 10'
            }
            var User ={}
             User.Username =UsernameValue;
             User.password =passwordValue;
             Users.push(User);
             console.log(Users)
         }
         
         function login(){
          var userNameIn3 = document.getElementById('input3').value;
          var passwordIn4 = document.getElementById('input4').value;
          if(userNameIn3==''){
    document.getElementById('s2').innerHTML = "username must be filled out";
              return false;
          }else if(passwordIn4==''){
  document.getElementById('s2').innerHTML = "password must be filled out";
              return false;
          }
          for(var i=0;i<users.length;i++){
   if(userNameIn3==users[i].username  && passwordIn4==users[i].password){   
                      return true;
                  }
          }
  document.getElementById('s2').innerHTML = "password and username do not match";
          return false;
          }
