import React, { useState, useCallback } from 'react';
import './reset.css'
import classes from './App.module.scss'
import PostArea from './components/PostArea/PostArea';
import TimeLineArea from './components/TimeLineArea/TimeLineArea';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import image from './img/user.jpeg';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { addTodoAction, addFavoritesAction } from './redux/Todos/actions';

function App() {

  // reduxを用いた状態管理
  const todosState = useSelector( (state:RootState) => state.todos )
  console.log(todosState.posts);

  
  const dispatch = useDispatch();

  const addTodos = () => {
    if (inputText !== "") {
      dispatch(addTodoAction(inputText, fileUrl))
      setInputText("");
      setFileUrl("");
    }
  }

   const addFavorites = (id:number, favorites:number) => {
      dispatch(addFavoritesAction(id, favorites))
  }


  // reduxを用いた状態管理 ここまで


// 投稿内容の入力
const [inputText, setInputText] = useState("");

console.log("通過して初期化されてる");
const handleInputText = useCallback((e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
  setInputText(e.target.value);
}, [setInputText]);

// 投稿画像のプレビューの出力
const [fileUrl, setFileUrl] = useState<string>("");
const previewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  const imageFile = e.target.files![0];
  const imageUrl = URL.createObjectURL(imageFile);
  setFileUrl(imageUrl);
  // 同じ画像を選択してもイベントが発火するために最後にvalueを空にする
  e.target.value = "";
}

// 投稿画像の選択取消
const resetSelectedFile = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  setInputText('');
  setFileUrl('');
}

  return (
    <div className={classes.app}>

      <Header />

      <main className={classes.main}>

        {/* 投稿エリア */}
        <PostArea 
          handleInputText={handleInputText}
          inputText={inputText}
          previewImage={previewImage}
          resetSelectedFile={resetSelectedFile}
          fileUrl={fileUrl}
          image={image}
          addTodos={addTodos}
        />

        {/* タイムラインエリア */}
       <TimeLineArea 
        image={image}
        todosState={todosState}
        addFavorites={addFavorites}
        />

      </main>

      <Footer />
      
    </div>
  );
}

export default App;
