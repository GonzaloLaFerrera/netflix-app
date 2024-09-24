import './watch.scss';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Watch = () => {
  return (
    <div className='watch'>
        <div className='back'>
            <ArrowBackOutlinedIcon />
            Home
        </div>
        <iframe /* width="560" height="315" */ 
            src="https://www.youtube.com/embed/P5ieIbInFpg?si=mMA7OOU_ouM9t7Js&amp;start=14&autoplay=1&muted=1" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullscreen 
          >
        </iframe>
    </div>
  )
}

export default Watch;