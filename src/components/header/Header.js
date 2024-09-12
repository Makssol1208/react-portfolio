import "./style.css";
import myFile from '../../../myFile.pdf';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>Hi, my name is <em>Maks</em></strong><br />
            a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
          <a href={myFile} className="btn" download={myFile.pdf} target="_blank">Download CV</a>
        </div>
      </div>
  </header>
  );
}
 
export default Header;