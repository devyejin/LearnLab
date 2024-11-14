import React, { useState } from 'react';
import { addPost } from '../store/slices/postsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//1. 사용자로부터 새로운 게시글에 대한 입력값을 받는다.
//2. 입력값이 발생하면 상태관리에 반영한다.
//3. submit 이벤트가 발생하면 store에 변화된 상태를 저장한다. (추후에는 fetch를 통해 db에 반영)

export default function PostCreate() {
  //component내에서 관리되는 useState
  const [formData, setFormData] = useState({ title: '', content: '' });
  const dispatch = useDispatch(); //reduce 함수 트리거(setter를 아무렇게나 호출할 수는 없다)
  const navigate = useNavigate();

  function handleChange(e) {
    // setFormData({ //setter의 경우, 수정이 아니라 교체이기 때문에 모든 데이터를 넣어야 함
    // 1.
    // title : e.target.value,
    // content : formData.content

    //2. 속성이 여러가지라면 -> 스프레드 연산자 활용
    // ...formData,
    // title : e.target.value
    // })
    //3. title이나 content나 동일한 기능에, key값만 변경되는 모습 -> 하나의 함수를 이용
    const key = e.target.name; // key
    const inputValue = e.target.value;

    //상태관리 값을 변경해준다.
    setFormData({
      ...formData,
      [key]: inputValue, // key 자리는 string으로 인식하기 때문에 대괄호로 감싸준다.
    });

    console.log(formData);
  }

  //submit 이벤트 발생시, 변화된 상태를 store에 반영한다.
  function handleSubmit(e) {
    e.preventDefault(); //submit 발생 시, 새롭게 요청보내는 기본기능 방지

    //store에 데이터를 변경할때는 reducer(setter)를 통해 한다.
    //입력받은 form데이터를 가지고 reducer를 call한다. (함수를 import)
    const id = Date.now();
    //reducer의 트리거(호출)는 dispatch를 활용 (규칙임)
    dispatch(addPost({ ...formData, id: id })); //payload로 데이터 전달

    //글 생성 요청 후 작업
    //case1. 글 목록으로 보낸다 case2.작성한 글로 보낸다. (상황에 맞게 선택)
    // useNavigate 훅을 사용
    navigate(`/posts/${id}`);
  }

  return (
    <>
      <h3>새 게시글 작성</h3>
      <form onSubmit={handleSubmit}>
        {/* input태그의 id속성은 label 태그의 htmlFor와 연결짓는 용 */}
        <label htmlFor="title">title : </label>
        <input
          type="text"
          name="title"
          id="title"
          //input이 입력되었을 때 컴포넌트에서 관리되는 데이터의 state(상태)를 변경
          onChange={handleChange}
        />

        {/* 써주는게 번거롭다면 label태그안에 input태그를 넣는 방법(좋지는 않음)*/}
        <label htmlFor="">
          content :{' '}
          <textarea type="text" name="content" onChange={handleChange} />
        </label>
        <button>전송</button>
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
