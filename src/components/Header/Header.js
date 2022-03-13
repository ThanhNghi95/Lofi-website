import LightSwitch from "../LightSwitch/LightSwitch";
import { Link } from "react-router-dom";
import { AiOutlineExclamation } from "@react-icons/all-files/ai/AiOutlineExclamation";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
// import {BsArrowsFullscreen} from "@react-icons/all-files/bs/BsArrowsFullscreen"
import { useSelector , useDispatch } from "react-redux";
import { LightSwitchMode } from "../../redux/actions/action";
import './Header.scss';

const Header = () => {
    const mode = useSelector((state)=>state.LightSwitchModeState)

    const dispatch = useDispatch()
    const handleLightSwitch = () =>{
        let status
        if(mode.mode === 'normal'){
            status = 'light'
        }else if(mode.mode ==='light'){
            status ='normal'
        }
        dispatch(LightSwitchMode(status) )
    }

  
    return ( 
        <nav className="wrap">
            <Link to='/'>
                <img src="/assets/img/Header.gif" alt="" className="logo" />
            </Link>
            <div className="menu">
                <Link to='/about'>
                    <AiOutlineExclamation className="github"/>
                    <span>About this project</span>
                </Link>
                <a 
                    href="https://github.com/nghilethanh2000"
                    target="_blank"
                    rel='noreferrer'
                >
                    <AiFillGithub className="github"/>
                    <span>Github</span>
                </a>
            </div>
            <div className="menu">
                <div onClick={handleLightSwitch}>
                    <LightSwitch/>
                </div>
              
                {/* <BsArrowsFullscreen className="fullscreen"/> */}
            </div>
        </nav>
     );
}
 
export default Header;
