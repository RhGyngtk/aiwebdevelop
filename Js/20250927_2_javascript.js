
//변수 : 데이터를 저장하는 저장 공간, 필요할 때 꺼내쓰고 다시 저장 가능
//=>변수 선언: var, let, const
//=>변수명 = 값; => 오른쪽에 있는 값을 왼쪽에 변수에 대입 (저장)한다
//=>변수명은 문자, 숫자, _ , $ 조합으로 만들 수 있다..
//=>변수명은 숫자로 시작할 수 없다.

//let으로 변수 선언 => let 은 값을 바꿀 수 있는 변수를 만들 때 사용
// name 이라는 변수를 만들고  '고길동' 이라는 문자열을 저장
let name = "고길동";
console.log("고길동"); 
console.log(name); //고길동

// name 이라는 변수의 값을 '둘리' 로 변경
name = "둘리";
console.log(name); //콘솔창에 "둘리" 출력

//let name = "마이콜"; //에러: 같은 이름의 변수를 중복 선언할 수 없다. 중복선언 불가

// const로 상수 선언 => const는 값을 바꿀 수 없는 변수를 만들 때 사용
const PI = 3.14;
console.log(PI) // 콘솔창에 3.14 출력 

//자료형: 숫자형, 문자형, 논리형, 객체형(배열, 함수, 객체) 변수에 담을 수 있는 데이터의 종류
//문자열 : 큰 따옴표 (""), 작은 따옴표 ('') 로 감싼 글자들의 나열
//숫자 : 정수, 실수
//불린 : true, false
let message = '안녕하세요 '; //문자열
let age = 20; //숫자
let isAdult = true; //불린

console.log(message);
console.log(age);
console.log(isAdult);
//typeof 연산자 : 변수에 담긴 데이터의 자료형을 알려주는 연산자
// => typeof 변수명 (값, 객체, 함수..)
console.log(typeof message); //string
console.log(typeof age); //number
console.log(typeof isAdult); //boolean

//배열 : 여러개의 데이터를 순서대로 나열한 자료형, 대괄호([])로 표현


// fruits 라는 이름의 변수에 여러개의 값을 배열로 저장 
let fruits = ['사과', '바나나', '딸기', '배']; //배열 선언
console.log(fruits); //콘솔창에 배열 출력

//배열의 첫번째 요소(항목)에 접근하기  =>  배열명[인덱스번호]
console.log(fruits[0]); //콘솔창에 '사과' 출력

//배열에 새로운 항목 추가 => 배열명.push(값);
fruits.push('샤인머스캣'); //배열에 '포도' 추가
console.log(fruits); //['사과', '바나나', '딸기', '배', '샤인머스캣']

//배열의 길이(항목의 개수) 확인 => 배열명.length
console.log(fruits.length); //5

//배열의 길이(항목의 개수) 확인 => 배열명.length
console.log(fruits.length); //5
