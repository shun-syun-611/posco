import React, { useState } from 'react';
import './reset.css'
import classes from './App.module.scss'
import image from './img/user.jpeg';

function App() {

// 投稿内容の入力
const [inputText, setInputText] = useState("");
const handleInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setInputText(e.target.value);
}

// 投稿内容の出力
const postInputText = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  setInputText('');
}

// 投稿画像のプレビューの出力
const [fileUrl, setFileUrl] = useState<string>("");
const previewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  if(!e.target.files) return
  const imageFile = e.target.files[0];
  const imageUrl = URL.createObjectURL(imageFile);
  setFileUrl(imageUrl)
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
                          <input onChange={previewImage} className={classes.inputFile} type="file" accept="image/*" />
                            ファイル添付
                        </label>
                        <span className={classes.inputFileAttention}>選択されていません</span>
                        <div className={classes.inputFilePreview}>
                          <img className={classes.inputFileImage} src={fileUrl} alt="" />
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

        {/* ここをmap関数などで繰り返し処理 */}
          <div className={classes.timeLineCard}>
            <div className={classes.timeLineContents}>
              <div className={classes.userArea}>
                  <img src={image} className={classes.userImage} alt=""/>
                  <p className={classes.userName}>user name</p>
              </div>
              <div className={classes.timeLineContent}>
                <p className={classes.timeLineText}>タイムラインテキストタイムラインテキストタイムラインテキストタイムラインテキストタイムラインテキストタイムラインテキストタイムラインテキストタイムラインテキストタイムラインテキストタイムラインテキストタイムラインテキストタイムラインテキストタイムラインテキストタイムラインテキストタイムラインテキストタイムラインテキスト</p>
              </div>
            </div>

            <div className={classes.favotitesButton}>
              <span className={classes.heartIcon}></span>
              <span className={classes.favoritesNumber}>0</span>
            </div>
          </div>

        </div>

      </main>
      <footer className={classes.footer}>POSCO</footer>
    </div>
  );
}

export default App;
