import { ArrowForwardIosOutlined } from "@mui/icons-material";
import "./list.scss"
import ListItem from "../listItem/ListItem.jsx"

import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useEffect, useRef, useState } from "react";


function List() {

  const [slideNumber, setSlideNumber ] = useState(0);
  const [ isMoved, setIsMoved ] = useState(false);

  const listRef = useRef()

  useEffect(() => {
    console.log(listRef)
  })

  const handleClick = (direction) =>{
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50
    if(direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }

    if(direction === 'right' && slideNumber < 5) {
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${- 230 + distance}px)`
    }
    console.log(distance)
  }

  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlinedIcon 
              className="sliderArrow left" 
              onClick={() => handleClick('left')}
              style={{display: !isMoved && 'none'}}  
            />
            <div className="container" ref={listRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>                
            </div>
            <ArrowForwardIosOutlinedIcon className="sliderArrow right" onClick={() => handleClick('right')}/>
        </div>
    </div>
  )
};

export default List;