function calculateDay(month,year  ){
    switch(month){
        case 1: case 3: case 5: case 7: case 8: case 10: case 12: return 31;
        case 2: if(isNhuan(year)) return 29; return 28;
        case 4: case 6: case 9: case 11: return 30;
        default: return 0;
    }
}

function isNhuan(year){
   return (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0 ));
}

function showDate(){
    var date_now = new Date();
    var y = date_now.getFullYear();
    var m = date_now.getMonth() + 1;
    var t = date_now.getDay() + 1;
    var day = date_now.getDate();
    document.getElementById("date").innerHTML = "Hôm nay, " + (t==1 ? " chủ nhật " : " thứ " + t) + " ngày " + day + " tháng "+ m + " năm " + y;
    setInterval(showTime, 1000);
}

function showTime(d){
    var date_now = new Date();
    var h = date_now.getHours();
    var m = date_now.getMinutes();
    var s = date_now.getSeconds();
    document.getElementById("time").innerHTML = h + ":" (m < 10 ? "0" + m :m) + ":" + (s < 10 ? "0" + s :s)
}