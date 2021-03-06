function listBtn(){
    var listBtn = document.getElementById('listBtn');
    var hideitem = document.getElementById('hideitem');
    if(hideitem.style.display === 'none'){
        hideitem.style.display = 'block';
        listBtn.innerText = "隱藏所有路線";
    }
    else{
        hideitem.style.display = 'none';
        listBtn.innerText = '顯示所有路線';
    }
}

function showBtn(){
    var a = document.getElementById('showBtn');
    var b = document.getElementById('hidetext');
    if(b.style.display === 'none'){
        b.style.display = 'block';
        a.innerText = "隱藏部分內容";
    }
    else{
        b.style.display = 'none';
        a.innerText = '更多內容';
    }
}


document.getElementById("all-btn").addEventListener("click",showAll);
document.getElementById("30-btn").addEventListener("click",show30);
document.getElementById("90before-btn").addEventListener("click",show90before);
document.getElementById("90after-btn").addEventListener("click",show90after);



function showAll(){
    var a = document.getElementById("all-btn");
    a.style.backgroundColor="#E01356";
    a.style.color="white";

    var b = document.getElementById("30-btn");
    b.style.backgroundColor="white";
    b.style.color="black";

    var c = document.getElementById("90before-btn");
    c.style.backgroundColor="white";
    c.style.color="black";

    var d = document.getElementById("90after-btn");
    d.style.backgroundColor="white";
    d.style.color="black";
    
}

function show30(){
    var b = document.getElementById("30-btn");
    b.style.backgroundColor="#E01356";
    b.style.color="white";
    var a = document.getElementById("all-btn");
    a.style.backgroundColor="white";
    a.style.color="black";

    var c = document.getElementById("90before-btn");
    c.style.backgroundColor="white";
    c.style.color="black";

    var d = document.getElementById("90after-btn");
    d.style.backgroundColor="white";
    d.style.color="black";

}

function show90before(){
    var b = document.getElementById("30-btn");
    b.style.backgroundColor="white";
    b.style.color="black";
    var a = document.getElementById("all-btn");
    a.style.backgroundColor="white";
    a.style.color="black";

    var c = document.getElementById("90before-btn");
    c.style.backgroundColor="#E01356";
    c.style.color="white";

    var d = document.getElementById("90after-btn");
    d.style.backgroundColor="white";
    d.style.color="black";

}

function show90after(){
    var b = document.getElementById("30-btn");
    b.style.backgroundColor="white";
    b.style.color="black";
    var a = document.getElementById("all-btn");
    a.style.backgroundColor="white";
    a.style.color="black";

    var c = document.getElementById("90before-btn");
    c.style.backgroundColor="white";
    c.style.color="black";

    var d = document.getElementById("90after-btn");
    d.style.backgroundColor="#E01356";
    d.style.color="white";

}


function setCardPosition() {
    var cardElement = document.querySelector("div.main-detail");
    var mainLeftElement = document.querySelector("section.main-left");

    // 取得 mainLeftElement 的位置資訊
    var mainLeftElementClientRect = mainLeftElement.getBoundingClientRect();
    
    // 如果捲軸滾超過 mainLeftElement 的位置
    // 小於 0 就代表這個元素已經有部分超過可視範圍上方
    // 所以就讓卡片的 top 跟著 mainLeftElement 的 Y 移動
    if (mainLeftElementClientRect.y < 0 && mainLeftElementClientRect.bottom > 510) {
        cardElement.style.top = Math.abs(mainLeftElementClientRect.y) + 10 + 'px';

    // 如果捲軸還沒滾超過 mainLeftElement 的位置
    // 卡片的 top 就為 0
    } else if (mainLeftElementClientRect.y >= 0) {
        cardElement.style.top = 0;

    // 如果捲軸已經滾到 mainLeftElement 扣掉卡片的高度及預留空間後
    // 最下方的位置，卡片的 bottom 就為 0
    } else if (mainLeftElementClientRect.bottom <= 510) {
        cardElement.style.top = (mainLeftElementClientRect.height - cardElement.getBoundingClientRect().height) + 'px';
    }
}

// 當畫面滾動時
window.addEventListener('scroll', function() {
    setCardPosition();
});

setCardPosition();