import { ArrowForwardIosOutlined } from "@mui/icons-material";
import "./list.scss"
import ListItem from "../listItem/ListItem.jsx"

import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';


function List() {
  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlinedIcon className="sliderArrow left"/>
            <div className="container">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
            <ArrowForwardIosOutlinedIcon className="sliderArrow right"/>
        </div>
    </div>
  )
};

export default List;