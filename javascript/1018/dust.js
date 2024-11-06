// 나는 미세먼지 농도를 알고 있고,
// 그 농도에 따른 지수를 알고싶음.

const dust = 50.5;

if (0 <= dust && dust <= 50) {
  console.log('좋음');
}

if (51 <= dust && dust <= 100) {
  console.log('보통');
}

if (101 <= dust && dust <= 250) {
  console.log('나쁨');
}

if (251 <= dust) {
  console.log('매우나쁨');
}

if (0 <= dust && dust <= 50) {
  console.log('좋음');
} else if (dust <= 100) {
  console.log('보통');
} else if (dust <= 250) {
  console.log('나쁨');
} else {
  console.log('매우나쁨');
}
