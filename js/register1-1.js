let data = [];


function init(){
    check()
    validateEmail()
}
init()
//偵測帳號是否輸入文字
function check(){
    let emailCheck = document.querySelector('.emailCheck')
    const btn =document.querySelector('.btn');
btn.addEventListener('click',function(e){
    let dateValue = date.value;
    let passwordCheck =document.querySelector('.passwordCheck').value;
    let password = document.querySelector('.password').value;
    let email = document.querySelector('.email').value;
    if (!validateEmail(email)){
        emailCheck.innerHTML='請輸入有效電子郵件'
        return;
    }if(email != 0&& password != 0 && password===passwordCheck&& dateValue !=0){
    data.account =email;
    data.password=password;
    alert('註冊成功')
    emailCheck.innerHTML=''
   }else{
    alert('帳戶或密碼輸入錯誤')
    
    }
})
//偵測使用者名稱是否輸入文字
let messageuserName=document.querySelector('.messageuserName')
btn.addEventListener('click',function(e){
    let username = document.querySelector('.userName').value;
    let str = ''
    if(username==0){
        str+='請輸入要註冊的名稱'
    }else{
    messageuserName.innerHTML=str
    data.userName=username;}

})
//偵測密碼是否輸入文字
let messagepassword=document.querySelector('.messagepassword')
btn.addEventListener('click',function(e){
    let password = document.querySelector('.password').value;
    let str = ''
    if(password==0){
        str+='請輸入要註冊的密碼'
    }
    messagepassword.innerHTML=str
})
//偵測重複密碼是否一樣
let messagepasswordCheck=document.querySelector('.messagepasswordCheck')
btn.addEventListener('click',function(e){
    let password = document.querySelector('.password').value;
    let passwordCheck = document.querySelector('.passwordCheck').value;
    let str = ''
    if(passwordCheck!==password){
        str+='請輸入相同密碼'
    }
    messagepasswordCheck.innerHTML=str
})

const date = document.querySelector('.date');
btn.addEventListener('click',function(e){
let str = '';
let dateValue = date.value;
str=dateValue
data.birthday = str;
})
     
}
function validateEmail(email) {
    // 使用簡單的正則表達式檢查電子郵件格式
    let emailRegex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
}
