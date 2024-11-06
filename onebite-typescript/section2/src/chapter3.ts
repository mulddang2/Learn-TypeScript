// object
let user: {
  // 객체 리터럴 타입
  id?: number;
  name: string;
} = {
  id: 1,
  name: '민스코',
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: 'MY API KEY',
};

// readonly 쓰는이유 이런짓거리 못하게함 ---> config.apiKey = 'hhh'
