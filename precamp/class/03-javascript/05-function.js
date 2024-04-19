let auth=()=>{
    const token=String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("target").innerText=token
    document.getElementById("target").style.color="#"+token
}
// -----------------------------------------------------------------------------
//alert() 화면 창에 메세지를 지정할 수 있는 경고 대화상자를 띄우는 함수
// --------------------------------------------------------------------------------
// ex1)
//
// function hello(name){
//     alert(name+"님 안녕하세요")
// }
// --------------------------------------------------------------------------------
// ex2)
//
// const hello=function(name){
//     alert(name+"님 안녕하세요")
// }
// --------------------------------------------------------------------------------
//ex3)
//
// //const hello=(name)=>{
//     alert(name+"님 안녕하세요")
// }