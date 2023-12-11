document.addEventListener('DOMContentLoaded', function () {
    const database = {
        '神魔': '神魔之塔',
        '飢餓': '飢餓黑熊',
        '飢餓黑熊': '飢餓黑熊',
        '楓之谷': '楓之谷m',
        '楓之谷m': '楓之谷m',
        '楓之谷M': '楓之谷m',
        '跑跑': '跑跑卡丁車rush+',
        '跑跑卡丁車rush+': '跑跑卡丁車rush+',
        '跑跑卡丁車': '跑跑卡丁車rush+',
        'ro': 'ro仙境傳說:新時代的誕生',
        'x': 'x',
        'X': 'x',
        'line': 'line',
        'Line': 'line',
        'spotify': 'spotify',
        'Spotify': 'spotify',
        'SPOTIFY': 'spotify',
        '食尚': '食尚玩家',
        '食尚玩家': '食尚玩家',
        '愛料理': '愛料理',
        '愛料': '愛料理',
        
    };

    const searchBtn = document.querySelector('.btn');
    searchBtn.addEventListener('click', function (e) {
       
        search();
    });

    function search() {
        const keyword = document.getElementById('search').value;
        const result = document.querySelector('.result p');
        const str = database[keyword];
        

    if (str) {
    const link = document.createElement('a');
    link.href = '#'; 
    link.textContent = str;
    
    result.innerHTML = ''; 
    result.appendChild(link); 
    } else {
    result.textContent = '找不到相關結果';
    }
    }
        });
