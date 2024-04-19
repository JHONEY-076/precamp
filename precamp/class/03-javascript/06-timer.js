let isStarted= false;

let auth=()=>{
    
if(isStarted=== false){
    //타이머가 작동중이 아닐때
isStarted=true
document.getElementById("finish").disabled=false
 const token=String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("target").innerText=token
    document.getElementById("target").style.color="#"+token


let time=10
let timer


timer=setInterval(function () {
    if(time>=0){
    let min=Math.floor(time/60)
    let sec=String(time%60).padStart(2,"0")
    document.getElementById("timer").innerText=min+":"+sec
 
    time=time-1
    }else{
        document.getElementById("finish").disabled=true
        isStarted=false
        console.log("타이머 작동중")
        clearInterval(timer)
    }
},1000)


}else{

    // 타이머가 작동중일때

}
} 

//alert(): 화면 창에 메세지를 지정할 수 있는 경고 대화상자를 띄우는 함수
//settimeout(기능,시간): 시간 지연함수로 입력 시간이 만료된 후, 함수나 지정할 코드를 실행한다.
//setinterval(기능,시간): 시간 반복함수로 입력한 시간마다 함수를 반복적으로 호출하거나 코드를 
//실행시킵니다.
//위의 settimeout(기능,시간),setinterval(기능,시간)함수의 시간은 밀리세컨드 단위로
//1초에 1000밀리세컨드
//2초에 2000밀리세컨드
//10초에 10000밀리세컨드 
