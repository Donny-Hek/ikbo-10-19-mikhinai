import classes from './header.module.css';
import logo from '../logo.svg';
import { Link } from "react-router-dom";

// function Header() {
//     return (
//         <header className={classes.header}>
//             <img className={classes.img_style} src={logo} alt="logo" />
//             {/* <img className={classes.img_style}
//                 src='https://www.mirea.ru/upload/medialibrary/281/IIT_colour.jpg' /> */}
//         </header>
//     );
// }
// function Header(props) {
//     return (
//         <div>
//             <p>{props.qoute}, {props.author}</p>
//             <a href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer">
//                 Learn React
//             </a>
//         </div>
//     );
// }
function Header() {
    return (
        <div className={classes.div}>
            <Link to="/">Exit</Link>
            <img className={classes.img_style} src={logo} alt="logo" />
        </div>
    );
}
export default Header;
