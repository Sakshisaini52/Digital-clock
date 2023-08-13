let section = document.querySelector("section");
let icons = document.querySelector(".icons");

icons.onclick = () =>{
    section.classList.toggle("dark");
};



setInterval( () =>{
    let date = new Date(),
        hour = date.getHours(),
        mins = date.getMinutes(),
        sec = date.getSeconds();

    const weekday=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day=weekday[date.getDay()];
    //getDay() func returns value from (0-6)

    let d;
    //determining am or pm using ternary operator
    d = (hour < 12) ? "AM" : "PM";
    hour = (hour > 12) ? (hour-12) : hour;
    hour = (hour == 0) ? (hour=12) : hour;   //if hr=0 =>hr=12

    //adding 0 for one digit value
    hour = (hour < 10) ? ("0" + hour) : hour;
    mins = (mins < 10)? ("0" + mins) : mins;
    sec = (sec < 10) ? ("0" + sec) : sec;

    document.querySelector(".hour").innerText = hour; 
    document.querySelector(".min").innerText = mins; 
    document.querySelector(".sec").innerText = sec; 
    document.querySelector(".day").innerText = day; 
    document.querySelector(".am_pm").innerText = d; 
},10);  //10 milisecond