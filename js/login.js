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

        // 获取之前注册页面存储在localStorage中的用户数据
        let storedDataList = localStorage.getItem('userDataList');
        let dataList = storedDataList ? JSON.parse(storedDataList) : [];

        dataList.forEach(function (item) {
            if (account === item.account && password === item.password) {
                loginSuccess = true;
                alert('登入成功');
                document.querySelector('.account').value = '';
                document.querySelector('.password').value = '';
                return;
            }
        });

        if (!loginSuccess) {
            alert('登入失敗');
        }
    }
});