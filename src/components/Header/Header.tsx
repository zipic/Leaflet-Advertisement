import './style.scss';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const handleShowMenu = () => {
    navigate('/add');
  }
  return (
    <div className="header">
      <img className="header__logo" src={`${process.env.PUBLIC_URL}/img/icons/logo.svg`} alt="logo" />
      <button 
        className="header__add"
        onClick={() => handleShowMenu()}
      >
        <p className='header__add-name'>Додати оголошення</p>
      </button>
    </div>
  );
};

export default Header;