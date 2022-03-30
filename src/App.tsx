import React, { useState } from 'react';
import './reset.css'
import classes from './App.module.scss'
import PostArea from './components/PostArea/PostArea';
import TimeLineArea from './components/TimeLineArea/TimeLineArea';
import image from './img/user.jpeg';

function App() {

// 投稿内容の入力
const [inputText, setInputText] = useState("");

type Todos = {
  task: string,
  favorites: number,
  image?: string,
}

const [todos, setTodos] = useState<Todos[]>([]);

console.log("通過して初期化されてる");
console.log(todos);
const handleInputText = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
  setInputText(e.target.value);
}

// いいねボタンのクリックイベント
const [count, setCount] = useState<number>(0);
const favoritesCount = (index:number) => {
  const newTodos = [...todos];
  newTodos[index].favorites = newTodos[index].favorites + 1;
  console.log("いいね!を追加したよ!");
  setTodos(newTodos);
  console.log(todos);
}

// 投稿内容の出力
const postInputText = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  if (inputText === "") {
    alert("テキストを入力してください。")
    return;
  }
  const NewTodos = setTodos(
    [...todos, {task: inputText, favorites: count, image: fileUrl }]
  );
  setInputText('');
  setFileUrl('');
}

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
      <header className={classes.header}>POSCO</header>
      <main className={classes.main}>

        {/* 投稿エリア */}
        <PostArea 
          handleInputText={handleInputText}
          inputText={inputText}
          previewImage={previewImage}
          resetSelectedFile={resetSelectedFile}
          fileUrl={fileUrl}
          postInputText={postInputText}
          image={image}
        />

        {/* タイムラインエリア */}
       <TimeLineArea 
        todos={todos}
        image={image}
        favoritesCount={favoritesCount} 
        />

      </main>
      <footer className={classes.footer}>POSCO</footer>
    </div>
  );
}

export default App;
