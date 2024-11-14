import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/slices/postsSlice';
// 새 글 작성 입력창 만들기
export default function CreatePost() {
  useState;
  //입력된 데이터를 store에 저장해야 한다.

  //컴포넌트에서 상태관리를 위한 useState가 필요
  const [formData, setFormData] = useState({ title: '', content: '' });
  const dispatch = useDispatch(); // reducer의 트리거(setter를 실행 시키는 함수), 아무렇게나 setter를 호출할 수 있는게 아님!
  //dispatch는 reducer를 실행시키는 함수

  function handleChange(e) {
    //input의 value를 state에 넣고싶어
    const inputValue = e.target.value;

    // setFormData({
    //   title: inputValue,
    //   content: formData.content, //setter의 경우 수정이 아니라 교체이기 때문에 content도 넣어줘야 한다.
    // });

    // //FormData의 입력값이 여러가지인데, 하나만 변경되는 경우라면 스프레드 연산자를 활용
    // setFormData({
    //   ...formData,
    //   title: inputValue,
    // });

    //title, content 각각 변화할 때 handleTitleChange 두 개의 반복된 함수를 만들면 비효율적

    // key 값으로 사용되는게, 태그의 name 속성임
    const key = e.target.name;
    setFormData({
      //입력값을 state에 동기화
      ...formData,
      // key : inputValue, // 이렇게 작성하면 key 자리라 문자열로 인식, 변수를 넣고싶다면 [] 로 감싸준다
      [key]: inputValue,
    });
    // console.log(formData);
  }

  // 또 다른 방식으로는 data = new FormData(form) 을 이용하기도 함
  // form 태그를 입력받아서 그것을 data로 변환시켜주는 동작을 함

  //데이터를 store로 저장하자 (서버 붙으면 fetch로 post요청으로 변경) : useLocation 활용
  function handleSubmit(e) {
    e.preventDefault(); //form의 submit 동작 발생시 새로운 요청(화면 깜빡)이 발생하기 때문에 막음
    console.log(formData);

    //store에 저장된 데이터를 변경할거기때문에 setter즉, reducer가 필요하다.
    //입력받은 data를 가지고 posts를 생성하는 recuder를 만들고 call 해야한다! (reducer 만들러 가자)
    dispatch(addPost({ ...formData, id: Date.now() })); // payload로 formData를 전달 (reducer를 호출(트리거)하기 위해서는 dispatch를 활용)
  }

  return (
    <>
      <h3>게시글 생성</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          id="title"
          //input이 입력되었을 때 우리의 state를 변경하고 싶어
          onChange={handleChange}
        />

        {/* name, id 적기 귀찮으니까, 이렇게 적기도 함 */}
        <label htmlFor="">
          내용 :{' '}
          <textarea name="content" id="" onClick={handleChange}></textarea>
        </label>
        <button>제출</button>
      </form>
    </>
  );
}

//1. form에 있는 action, method 속성을 통해서 서버로 데이터를 전송
//2. data를 수집 -> ajax를 통해 fetch (✅)
//                지금 수업에서는 fetch대신 store를 사용 중
//2.1 data 수집을 위해 변수가 필요
//2.2 수집한 data를 관리하기위해 state가 필용
//3.3 수집한 데이터를 store에 저장
