// export default 방식 : 모듈 당 하나만 가능
// 불로올 때 아무 이름이나 사용 가능
// 중괄호 없이 사용 가능

const obj = {
  name: '홍길동',
  greet() {
    console.log('안녕하세요, ' + this.name);
  }
}

export default obj