// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ['1', 'im', 'winter'];

let boolArr: Array<boolean> = [true, false];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, 'hello'];

// 다차원 배열의 타입을 정의하는 법
let dbArr: number[][] = [
  [1, 2, 3],
  [9, 8],
];

// 튜플: 길이와 타입이 고정된 배열, 순서 바꾸기도 안됨
// 왜 쓰나? 배열 사용할 때 index의 위치에 따라 넣어야하는 값들이 이미 정해져 있고, 그 순서를 지키는게 중요할때 사용
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

const natures: [string, number][] = [
  ["숲", 1],
  ["바다", 2],
  ["하늘", 3],
  ["산", 4],
]