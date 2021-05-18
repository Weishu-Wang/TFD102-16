function setCardPosition() {
    var cardElement = document.querySelector("div.key-notes");
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