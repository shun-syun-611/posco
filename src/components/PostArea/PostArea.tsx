import React from 'react'
import classes from './PostArea.module.scss'

type Props = {
  handleInputText: (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => void;
  inputText: string;
  previewImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetSelectedFile: (e: React.MouseEvent<HTMLButtonElement>) => void;
  fileUrl: string;
  postInputText:  (e: React.MouseEvent<HTMLButtonElement>) => void;
  image: string;
}

const PostArea:React.VFC<Props> = (props) => {

  const {handleInputText ,inputText ,previewImage ,resetSelectedFile,fileUrl ,postInputText ,image} = props;

  return (
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
  )
}

export default PostArea

