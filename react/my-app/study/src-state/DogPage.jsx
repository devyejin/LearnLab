import React from 'react';
//이미지들을 렌더링
export default function DogPage() {
  const imgUrls = [
    'https://images.dog.ceo/breeds/gaddi-indian/Gaddi.jpg',
    'https://images.dog.ceo/breeds/terrier-westhighland/n02098286_3154.jpg',
    'https://images.dog.ceo/breeds/malamute/n02110063_16752.jpg',
    'https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg',
  ];

  //style 속성은 객체 형태로 넣어준다! 객체는 key:value
  //height, width 속성을 숫자로 넣을땐 '' 안함
  const imgsJSX = imgUrls.map((url) => {
    return <img src={url} style={{ height: '200px', width: 200 }}></img>;
  });

  return (
    <>
      <h3>귀여운 강아지 사진 페이지</h3>
      <span>{imgsJSX}</span>
    </>
  );
}
