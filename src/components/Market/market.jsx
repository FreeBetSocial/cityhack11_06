import classes from "./market.module.scss"
import ItemCard from "../ItemCard/itemCard"
import avatar_profile  from "../../img/avatar_profile.png"

const markets = [
    {
        img:avatar_profile,
        title:"Благотворительная акция",
        desc:"г. Ростов-на-Дону, пл. Гагарина 1",
        price:"27.05 - 29.05",
        id:""
    },
    {
        img:avatar_profile,
        title:"Благотворительная акция",
        desc:"г. Ростов-на-Дону, пл. Гагарина 1",
        price:"27.05 - 29.05",
        id:""
    },
    {
        img:avatar_profile,
        title:"Благотворительная акция",
        desc:"г. Ростов-на-Дону, пл. Гагарина 1",
        price:"27.05 - 29.05",
        id:""
    },
    {
        img:avatar_profile,
        title:"Благотворительная акция",
        desc:"г. Ростов-на-Дону, пл. Гагарина 1",
        price:"27.05 - 29.05",
        id:""
    },
    {
        img:avatar_profile,
        title:"Благотворительная акция",
        desc:"г. Ростов-на-Дону, пл. Гагарина 1",
        price:"27.05 - 29.05",
        id:""
    },
    {
        img:avatar_profile,
        title:"Благотворительная акция",
        desc:"г. Ростов-на-Дону, пл. Гагарина 1",
        price:"27.05 - 29.05",
        id:""
    },
    {
        img:avatar_profile,
        title:"Благотворительная акция",
        desc:"г. Ростов-на-Дону, пл. Гагарина 1",
        price:"27.05 - 29.05",
        id:""
    },
    {
        img:avatar_profile,
        title:"Благотворительная акция",
        desc:"г. Ростов-на-Дону, пл. Гагарина 1",
        price:"27.05 - 29.05",
    }

]
const Market = ()=>{
    return (
        <div className="content">
            <div className={classes.Market}>
                {markets.map((e,i)=>(
                    <ItemCard type="market" key={i} item={e}/>
                ))}
            </div>
        </div>
    )
}

export default Market;