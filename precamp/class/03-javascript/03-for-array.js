
const fruits=[
    {number:1, title:"레드향"},
    {number:2, title:"샤인머스켓"},
    {number:3, title:"산청딸기"},
    {number:4, title:"한라봉"},
    {number:5, title:"사과"},
    {number:6, title:"애플망고"},
    {number:7, title:"딸기"},
    {number:8, title:"천혜향"},
    {number:9, title:"과일선물세트"},
    {number:10, title:"귤"},
    
]
undefined
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i].number+" "+fruits[i].title)
}
// VM3770:2 1 레드향
// VM3770:2 2 샤인머스켓
// VM3770:2 3 산청딸기
// VM3770:2 4 한라봉
// VM3770:2 5 사과
// VM3770:2 6 애플망고
// VM3770:2 7 딸기
// VM3770:2 8 천혜향
// VM3770:2 9 과일선물세트
// VM3770:2 10 귤
// undefined
for(let i=0;i<fruits.length;i++){
    console.log(`${fruits[i].number} ${fruits[i].title}`)
}
// VM3817:2 1 레드향
// VM3817:2 2 샤인머스켓
// VM3817:2 3 산청딸기
// VM3817:2 4 한라봉
// VM3817:2 5 사과
// VM3817:2 6 애플망고
// VM3817:2 7 딸기
// VM3817:2 8 천혜향
// VM3817:2 9 과일선물세트
// VM3817:2 10 귤
undefined
for(let i=0;i<fruits.length;i++){
    console.log(`과일 차트${fruits[i].number}위는 ${fruits[i].title}입니다`)
}
// VM3913:2 과일 차트1위는 레드향입니다
// VM3913:2 과일 차트2위는 샤인머스켓입니다
// VM3913:2 과일 차트3위는 산청딸기입니다
// VM3913:2 과일 차트4위는 한라봉입니다
// VM3913:2 과일 차트5위는 사과입니다
// VM3913:2 과일 차트6위는 애플망고입니다
// VM3913:2 과일 차트7위는 딸기입니다
// VM3913:2 과일 차트8위는 천혜향입니다
// VM3913:2 과일 차트9위는 과일선물세트입니다
// VM3913:2 과일 차트10위는 귤입니다
// undefined

// 수학 객체
Math.floor(Math.random()*1000000)
    // 793011
    String(Math.floor(Math.random()*1000000)) 
    // random 함수 곱하기 100만을 floor함수에다가 넣고 문자열로 형변환 시킴
    // '551276'
    String(Math.floor(Math.random()*1000000))
    // '289095'
    String(Math.floor(Math.random()*1000000))
    // '149'
    String(Math.floor(Math.random()*1000000)).padStart(6,"0") 
    //위의 문자열로 형변환시킨 랜덤 숫자에서 floor함수로 버려진 앞자리 "0"을 다시 생성되게 만듬
    //.padStart(6,0)=>6짜리 숫자가 되지 않으면 앞에서부터 문자열 0을 채워줘라는 뜻
    // '093007'
    String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    // '125354'
    String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    // '407246'
    let result=String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    // undefined
    result
    // '067808'  //            
    result
    // '067808'
    result
    // '067808'

