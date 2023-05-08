//封面显示日期和时间
function getDate() {
    let date = new Date();
    let year = date.getFullYear(); //获取年份
    let month = date.getMonth() + 1; //获取月份
    let day = date.getDate(); //获取日期
    return year + ' 年 ' + month + ' 月 ' + day + ' 日 '
}
function getTime() {
    let date = new Date();
    let hour = date.getHours(); //获取小时
    hour = hour < 10 ? '0' + hour : hour;
    let minute = date.getMinutes(); // 获取分
    minute = minute < 10 ? '0' + minute : minute;
    let seconds = date.getSeconds(); //获取秒
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return hour + ' : ' + minute + ' : ' + seconds;
}
setInterval(function() {
    document.querySelector('#date').innerHTML = getDate();
    document.querySelector('#time').innerHTML = getTime();
}, 1000)

//滑动条在顶部时，导航栏透明
window.addEventListener('scroll', function(){
    let homeHead = window.document.querySelector(".home-head")
    let prehead = this.scrollY
    if (window.scrollY !== 0){
       homeHead.classList.add("navTran") 
    }else{
       homeHead.classList.remove("navTran")
    }
})


//监控选择器infor以控制导航栏隐藏出现行为
function hiddenNav(entries) {
    // 拿到 IntersectionObserverEntry 对象
    const informEntry = entries[0];

    if (informEntry.intersectionRatio == 0) {
        navg.classList.add('hidden');
    } else {
        navg.classList.remove('hidden');
    }
}

const inform = document.querySelector(".info");
const navg = document.querySelector("nav");
// 使用[交叉观察器]
const io = new IntersectionObserver(hiddenNav);
// 监控选择器infor
io.observe(inform);


//封面轮播图
let carousel = document.querySelector("#carousel");
let iteams = carousel.children;
let index = 0;
iteams[index].className = 'activeImg'
setInterval(function () {    
    iteams[index].className = ""
    if (index == iteams.length - 1) {
        index = -1
    }
    index ++
    iteams[index].className = 'activeImg'
}, 6000)


// 导航栏菜单底部动画
// const activeMenus = document.querySelector('activeMenus')
// document.addEventListener("click", function(   
// ))



