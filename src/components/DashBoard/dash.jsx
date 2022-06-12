import classes from "./dash.module.scss"
import ava from "../../img/avatar_profile.png"


const items = [
    {
        img:ava,
        name:"sdffsd",
        count:0
    },
    {
        img:ava,
        name:"sdffsd",
        count:0
    },
    {
        img:ava,
        name:"sdffsd",
        count:0
    },
    {
        img:ava,
        name:"sdffsd",
        count:0
    }
    ,{
        img:ava,
        name:"sdffsd",
        count:0
    }
    ,{
        img:ava,
        name:"sdffsd",
        count:0
    }
    ,{
        img:ava,
        name:"sdffsd",
        count:0
    }
    ,{
        img:ava,
        name:"sdffsd",
        count:0
    }
]

const Dash =()=>{
    return (
        <div className={"content"}>
            <div className={classes.Dash}>
                <h1>Доска почета</h1>
                <div className={classes.items}>
                    {items.map((e,i)=>(
                        <div>
                            <img src={e.img}/>
                            <h3>{e.name}</h3>
                            <p>Посещено мероприятий:</p>
                            <p data-value>{e.count}</p>
                            <div>{i+1} место</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Dash;