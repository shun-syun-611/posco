import React, {memo} from 'react'
import classes from './TimeLineArea.module.scss'

// ここをまとめる方法を調べる
type Todos = {
  task: string,
  favorites: number,
  image?: string,
}

type Props = {
    todos: Todos[];
    image: string;
    favoritesCount: (index: number) => void;
}

const TimeLineArea:React.VFC<Props> = memo((props) => { 
 
const {todos, image, favoritesCount} = props;
console.log("TimeLineArea通過");

return (
 
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
                <span className={outputText.favorites ? classes.heartIconActive : classes.heartIcon}></span>
                <span className={classes.favoritesNumber}>{outputText.favorites}</span>
                {/* <span className={classes.favoritesNumber}>{outputText.favorites}</span> */}
                </div>
            </div>
            );
            })
            }
    </div>
    )
});

export default TimeLineArea