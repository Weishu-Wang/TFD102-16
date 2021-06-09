$('.map span').click(function (e) { 
    e.preventDefault();
    $(this).addClass('active').parent().siblings().find('.active').removeClass('active');
    $(this).parent().addClass('active').siblings().removeClass('active');

});

$('.map li').click(function (e) { 
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    $(this).children().addClass('active').parent().siblings().find('.active').removeClass('active');

});




document.getElementById("auckland-btn").addEventListener("click",showAuckland);
document.getElementById("rotoura-btn").addEventListener("click",showRotoura);
document.getElementById("toupo-btn").addEventListener("click",showToupo);
document.getElementById("wellington-btn").addEventListener("click",showWellington);
document.getElementById("christchurch-btn").addEventListener("click",showChristchurch);
document.getElementById("tekapo-btn").addEventListener("click",showTekapo);
document.getElementById("wanaka-btn").addEventListener("click",showWanaka);
document.getElementById("queenstown-btn").addEventListener("click",showQueenstown);
document.getElementById("hobbiton-btn").addEventListener("click",showHobbiton);
document.getElementById("waitomo-btn").addEventListener("click",showWaitomo);
document.getElementById("tongariro-btn").addEventListener("click",showTongariro);
document.getElementById("dunedin-btn").addEventListener("click",showDunedin);
document.getElementById("joseph-btn").addEventListener("click",showJoseph);
document.getElementById("milfordsound-btn").addEventListener("click",showMilfordsound);


// 抓畫面
let auckland = document.getElementById("auckland-text");
let rotoura = document.getElementById("rotoura-text");
let toupo = document.getElementById("toupo-text");
let wellington = document.getElementById("wellington-text");
let christchurch = document.getElementById("christchurch-text");
let tekapo = document.getElementById("tekapo-text");
let wanaka = document.getElementById("wanaka-text");
let queenstown = document.getElementById("queenstown-text");
let hobbiton = document.getElementById("hobbiton-text");
let waitomo = document.getElementById("waitomo-text");
let tongariro = document.getElementById("tongariro-text");
let dunedin = document.getElementById("dunedin-text");
let joseph = document.getElementById("joseph-text");
let milfordsound = document.getElementById("milfordsound-text");

function showAuckland(){
    auckland.style.display="block";
    rotoura.style.display="none";
    toupo.style.display="none";
    wellington.style.display="none";
    christchurch.style.display="none";
    tekapo.style.display="none";
    wanaka.style.display="none";
    queenstown.style.display="none";
    hobbiton.style.display="none";
    waitomo.style.display="none";
    tongariro.style.display="none";
    dunedin.style.display="none";
    joseph.style.display="none";
    milfordsound.style.display="none";
}
function showRotoura(){
    auckland.style.display="none";
    rotoura.style.display="block";
    toupo.style.display="none";
    wellington.style.display="none";
    christchurch.style.display="none";
    tekapo.style.display="none";
    wanaka.style.display="none";
    queenstown.style.display="none";
    hobbiton.style.display="none";
    waitomo.style.display="none";
    tongariro.style.display="none";
    dunedin.style.display="none";
    joseph.style.display="none";
    milfordsound.style.display="none";
}
function showToupo(){
    auckland.style.display="none";
    rotoura.style.display="none";
    toupo.style.display="block";
    wellington.style.display="none";
    christchurch.style.display="none";
    tekapo.style.display="none";
    wanaka.style.display="none";
    queenstown.style.display="none";
    hobbiton.style.display="none";
    waitomo.style.display="none";
    tongariro.style.display="none";
    dunedin.style.display="none";
    joseph.style.display="none";
    milfordsound.style.display="none";
}
function showWellington(){
    auckland.style.display="none";
    rotoura.style.display="none";
    toupo.style.display="none";
    wellington.style.display="block";
    christchurch.style.display="none";
    tekapo.style.display="none";
    wanaka.style.display="none";
    queenstown.style.display="none";
    hobbiton.style.display="none";
    waitomo.style.display="none";
    tongariro.style.display="none";
    dunedin.style.display="none";
    joseph.style.display="none";
    milfordsound.style.display="none";
}
function showChristchurch(){
    auckland.style.display="none";
    rotoura.style.display="none";
    toupo.style.display="none";
    wellington.style.display="none";
    christchurch.style.display="block";
    tekapo.style.display="none";
    wanaka.style.display="none";
    queenstown.style.display="none";
    hobbiton.style.display="none";
    waitomo.style.display="none";
    tongariro.style.display="none";
    dunedin.style.display="none";
    joseph.style.display="none";
    milfordsound.style.display="none";
}
function showTekapo(){
    auckland.style.display="none";
    rotoura.style.display="none";
    toupo.style.display="none";
    wellington.style.display="none";
    christchurch.style.display="none";
    tekapo.style.display="block";
    wanaka.style.display="none";
    queenstown.style.display="none";
    hobbiton.style.display="none";
    waitomo.style.display="none";
    tongariro.style.display="none";
    dunedin.style.display="none";
    joseph.style.display="none";
    milfordsound.style.display="none";
}
function showWanaka(){
    auckland.style.display="none";
    rotoura.style.display="none";
    toupo.style.display="none";
    wellington.style.display="none";
    christchurch.style.display="none";
    tekapo.style.display="none";
    wanaka.style.display="block";
    queenstown.style.display="none";
    hobbiton.style.display="none";
    waitomo.style.display="none";
    tongariro.style.display="none";
    dunedin.style.display="none";
    joseph.style.display="none";
    milfordsound.style.display="none";
}
function showQueenstown(){
    auckland.style.display="none";
    rotoura.style.display="none";
    toupo.style.display="none";
    wellington.style.display="none";
    christchurch.style.display="none";
    tekapo.style.display="none";
    wanaka.style.display="none";
    queenstown.style.display="block";
    hobbiton.style.display="none";
    waitomo.style.display="none";
    tongariro.style.display="none";
    dunedin.style.display="none";
    joseph.style.display="none";
    milfordsound.style.display="none";
}
function showHobbiton(){
    auckland.style.display="none";
    rotoura.style.display="none";
    toupo.style.display="none";
    wellington.style.display="none";
    christchurch.style.display="none";
    tekapo.style.display="none";
    wanaka.style.display="none";
    queenstown.style.display="none";
    hobbiton.style.display="block";
    waitomo.style.display="none";
    tongariro.style.display="none";
    dunedin.style.display="none";
    joseph.style.display="none";
    milfordsound.style.display="none";
}
function showWaitomo(){
    auckland.style.display="none";
    rotoura.style.display="none";
    toupo.style.display="none";
    wellington.style.display="none";
    christchurch.style.display="none";
    tekapo.style.display="none";
    wanaka.style.display="none";
    queenstown.style.display="none";
    hobbiton.style.display="none";
    waitomo.style.display="block";
    tongariro.style.display="none";
    dunedin.style.display="none";
    joseph.style.display="none";
    milfordsound.style.display="none";
}
function showTongariro(){
    auckland.style.display="none";
    rotoura.style.display="none";
    toupo.style.display="none";
    wellington.style.display="none";
    christchurch.style.display="none";
    tekapo.style.display="none";
    wanaka.style.display="none";
    queenstown.style.display="none";
    hobbiton.style.display="none";
    waitomo.style.display="none";
    tongariro.style.display="block";
    dunedin.style.display="none";
    joseph.style.display="none";
    milfordsound.style.display="none";
}
function showDunedin(){
    auckland.style.display="none";
    rotoura.style.display="none";
    toupo.style.display="none";
    wellington.style.display="none";
    christchurch.style.display="none";
    tekapo.style.display="none";
    wanaka.style.display="none";
    queenstown.style.display="none";
    hobbiton.style.display="none";
    waitomo.style.display="none";
    tongariro.style.display="none";
    dunedin.style.display="block";
    joseph.style.display="none";
    milfordsound.style.display="none";
}
function showJoseph(){
    auckland.style.display="none";
    rotoura.style.display="none";
    toupo.style.display="none";
    wellington.style.display="none";
    christchurch.style.display="none";
    tekapo.style.display="none";
    wanaka.style.display="none";
    queenstown.style.display="none";
    hobbiton.style.display="none";
    waitomo.style.display="none";
    tongariro.style.display="none";
    dunedin.style.display="none";
    joseph.style.display="block";
    milfordsound.style.display="none";
}
function showMilfordsound(){
    auckland.style.display="none";
    rotoura.style.display="none";
    toupo.style.display="none";
    wellington.style.display="none";
    christchurch.style.display="none";
    tekapo.style.display="none";
    wanaka.style.display="none";
    queenstown.style.display="none";
    hobbiton.style.display="none";
    waitomo.style.display="none";
    tongariro.style.display="none";
    dunedin.style.display="none";
    joseph.style.display="none";
    milfordsound.style.display="block";
}

document.getElementById("pick-auckland").addEventListener("click",rwdAuckland);
document.getElementById("pick-rotorua").addEventListener("click",rwdRotoura);



