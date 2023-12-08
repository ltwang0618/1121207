let data = [
    { email: 'abc123@gmail.com', password: 'a123456' },
    { email: 'abc1234@gmail.com', password: 'a1234567' },
    { email: 'abc12345@gmail.com', password: 'a12345678' }
];

let btn = document.querySelector('.loginBtn');
const accountMessage = document.querySelector('.accountMessage');
const passwordMessage = document.querySelector('.passwordMessage');

btn.addEventListener('click', function (e) {
    const account = document.querySelector('.account').value;
    const password = document.querySelector('.password').value;

    let accountMessageStr = '';
    let passwordMessageStr = '';

    if (account == 0) {
        accountMessageStr += '請輸入帳號';
    }
    if (password == 0) {
        passwordMessageStr += '請輸入密碼';
    }

    accountMessage.innerHTML = accountMessageStr;
    passwordMessage.innerHTML = passwordMessageStr;

    if (accountMessageStr === '' && passwordMessageStr === '') {
        let loginSuccess = false;

        data.forEach(function (item) {
            if (account === item.email && password === item.password) {
                loginSuccess = true;
                alert('登入成功');
                return;  
            }
        });

        if (!loginSuccess) {
            alert('登入失敗');
        }
    }
});
