import React, {memo} from 'react'
import classes from './TimeLineArea.module.scss'

// ここをまとめる方法を調べる

type Props = {
    image: string;
    todosState: any;
    addFavorites: (id: number, favorites: number) => void
}



const TimeLineArea:React.VFC<Props> = memo((props) => { 
 
const {image, todosState, addFavorites} = props;
console.log("TimeLineArea通過");

return (
 
    <div className={classes.timeLineArea}>
        <p className={classes.timeLineTitle}>タイムライン</p>

        <div>
        <ul>
            {
            todosState.posts.map((todo:any) => {
                return (
                todo.task !== "" &&
                <div key={todo.id} className={classes.timeLineCard}>
                <div className={classes.timeLineContents}>
                <div className={classes.userArea}>
                    <img src={image} className={classes.userImage} alt=""/>
                    <p className={classes.userName}>user name</p>
                </div>
                <div className={classes.timeLineContent}>
                    <p className={classes.timeLineText}>{todo.task}</p>
                    <img className={classes.inputFileImage} alt="" src={todo.image} />
                </div>
                </div>

                <div className={classes.favotitesButton} onClick={() => addFavorites(todo.id,todo.favorites)}>
                    <span className={todo.favorites ? classes.heartIconActive : classes.heartIcon}></span>
                    <span className={classes.favoritesNumber}>{todo.favorites}</span>
                </div>
            </div>
            )})
            }
        </ul>
        </div>
    </div>
    )
});

export default TimeLineArea