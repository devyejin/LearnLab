// default module을 import할 때는 alias가 아니여도 임의의 이름 가능

import something from './export_default.mjs';

console.log(something.name);
something.greet();
