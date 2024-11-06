// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: '우정',
  nickname: '애정',
  birth: '2002.01.07',
  bio: '느좋',
  location: '서을시',
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  China: 'cn',
  UnitedKingDom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 주의: 인덱스시그니처의 값 타입과 같아야함
};

let countryNumberCodes: CountryNumberCodes = { Korea: 410 };
