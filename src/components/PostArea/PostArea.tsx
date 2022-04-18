import React, { memo } from "react";
import classes from "./PostArea.module.scss";
import { Button, styled } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const Input = styled("input")({
  display: "none",
});

type Props = {
  handleInputText: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
  inputText: string;
  previewImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetSelectedFile: (e: React.MouseEvent<HTMLButtonElement>) => void;
  fileUrl: string;
  image: string;
  addTodos: () => void;
};

const PostArea: React.VFC<Props> = memo((props) => {
  const {
    handleInputText,
    inputText,
    previewImage,
    resetSelectedFile,
    fileUrl,
    image,
    addTodos,
  } = props;
  console.log("PostArea通過");

  return (
    <div className={classes.postArea}>
      <form className={classes.inputAndPostArea}>
        <div className={classes.userAndInputArea}>
          <div className={classes.userArea}>
            <img src={image} className={classes.userImage} alt="" />
            <p className={classes.userName}>user name</p>
          </div>
          <div className={classes.inputTextArea}>
            <TextField
              id="outlined-multiline-flexible"
              label="post your content"
              multiline
              maxRows={4}
              onChange={handleInputText}
              className={classes.inputText}
              value={inputText}
            />
          </div>
        </div>
        <div className={classes.postArea}>
          <div className={classes.inputFileArea}>
            <div className={classes.inputFileButtonArea}>
              {fileUrl === "" ? (
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={previewImage}
                  />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label>
              ) : (
                <Button
                  variant="contained"
                  size="small"
                  onClick={resetSelectedFile}
                >
                  RESET
                </Button>
              )}
            </div>
          </div>

          <Button variant="contained" onClick={() => addTodos()}>
            POST
          </Button>
        </div>

        <div className={classes.inputFilePreview}>
          <img className={classes.inputFileImage} alt="" src={fileUrl} />
        </div>
      </form>
    </div>
  );
});

export default PostArea;
