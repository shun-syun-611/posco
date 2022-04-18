import React, { memo } from "react";
import classes from "./TimeLineArea.module.scss";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";

// ここをまとめる方法を調べる

type Props = {
  image: string;
  todosState: any;
  addFavorites: (id: number, favorites: number) => void;
};

const TimeLineArea: React.VFC<Props> = memo((props) => {
  const { image, todosState, addFavorites } = props;
  console.log("TimeLineArea通過");

  // dots menu

  const options = ["削除", "編集"];
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // dots menu ここまで

  return (
    <div className={classes.timeLineArea}>
      <p className={classes.timeLineTitle}>タイムライン</p>

      <div>
        <ul>
          {todosState.posts.map((todo: any) => {
            return (
              todo.task !== "" && (
                <div key={todo.id} className={classes.timeLineCard}>
                  <div className={classes.timeLineContents}>
                    <div className={classes.userArea}>
                      <img src={image} className={classes.userImage} alt="" />
                      <p className={classes.userName}>user name</p>
                    </div>
                    <div className={classes.timeLineContent}>
                      <p className={classes.timeLineText}>{todo.task}</p>
                      <img
                        className={classes.inputFileImage}
                        alt=""
                        src={todo.image}
                      />
                    </div>
                  </div>

                  <div className={classes.favotitesButton}>
                    <FavoriteIcon
                      className={`${classes.heartIcon} ${
                        todo.favorites ? classes.active : ""
                      }`}
                      onClick={() => addFavorites(todo.id, todo.favorites)}
                    />
                    <span className={classes.favoritesNumber}>
                      {todo.favorites}
                    </span>
                  </div>
                  <div>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      className={classes.TimeLinedotsManu}
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          selected={option === "Pyxis"}
                          onClick={handleClose}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </div>
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
});

export default TimeLineArea;
