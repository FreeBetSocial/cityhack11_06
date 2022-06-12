import classes from "./dash.module.scss"
import img1 from "../../img/avatar_profile.png"

const Dash =()=>{
    return (
        <div className={"content"}>
            <div className={classes.Dash}>
                <h1>Доска почета</h1>
                    <div className={classes.row_dash}>
                        <div className={classes.banner6}>
                            <div className={classes.col_dash}>
                               <img src={img1}/> 
                            </div>
                            <div className={classes.col_dash}>
                               <img src={img1}/> 
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Dash;