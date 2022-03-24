import React, { useState } from 'react';
import './reset.css'
import classes from './App.module.scss'
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
const handleInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setInputText(e.target.value);
}

// いいねボタンのクリックイベント
const [count, setCount] = useState<number>(0);
const favoritesCount = (index:number) => {
  const newTodos = [...todos];
  newTodos[index].favorites = newTodos[index].favorites + 1;
  console.log("いいね!を追加したよ!");
  setTodos(newTodos);
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
        <div className={classes.postArea}>
            <form className={classes.inputAndPostArea}>
                <div className={classes.userAndInputArea}>
                    <div className={classes.userArea}>
                        <img src={image} className={classes.userImage} alt=""/>
                        <p className={classes.userName}>user name</p>
                    </div>
                    <div className={classes.inputTextArea}>
                        <textarea onChange={handleInputText} className={classes.inputText} value={inputText}/>
                    </div>
                </div>
                <div className={classes.postArea}>
                    <div className={classes.inputFileArea}>
                        <label className={classes.inputFileLabel}>
                          <input className={classes.inputFile} type="file" accept="image/*" onChange={previewImage}/>
                            ファイル添付
                        </label>
                        {/* ここは、ファイル添付の状態によって、出しわける予定 */}
                        <span className={classes.inputFileAttention}>選択されていません</span>
                        <button className={classes.resetButton} onClick={resetSelectedFile}>リセット</button>
                        <div className={classes.inputFilePreview}>
                          <img className={classes.inputFileImage} alt="" src={fileUrl} />
                        </div>
                    </div>
                    <div className={classes.postBottunArea}>
                      <button onClick={postInputText} className={classes.postBottun}>POST</button>
                    </div>
                </div>
            </form>
        </div>

        {/* タイムラインエリア */}
        <div className={classes.timeLineArea}>

          <p className={classes.timeLineTitle}>タイムライン</p>

        {
        todos.map((outputText,index) => {
          return (
          <div key={index} className={classes.timeLineCard}>
            <div className={classes.timeLineContents}>
              <div className={classes.userArea}>
                  <img src={image} className={classes.userImage} alt=""/>
                  <p className={classes.userName}>user name</p>
              </div>
              <div className={classes.timeLineContent}>
                <p className={classes.timeLineText}>{outputText.task}</p>
                <img className={classes.inputFileImage} alt="" src={outputText.image} />
              </div>
            </div>

            <div className={classes.favotitesButton} onClick={()=>favoritesCount(index)}>
              <span className={classes.heartIcon}></span>
              <span className={classes.favoritesNumber}>{outputText.favorites}</span>
              {/* <span className={classes.favoritesNumber}>{outputText.favorites}</span> */}
            </div>
          </div>
          );
        })
        }

          {/* map関数テスト */}
          
          {/* <div>
            {arr.map((string, index) => <div key={index}>{`${string}のキーは、${index}です。`}</div>)}
          </div> */}

        </div>

      </main>
      <footer className={classes.footer}>POSCO</footer>
    </div>
  );
}

export default App;
