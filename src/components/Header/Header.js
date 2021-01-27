import { Link } from 'react-router-dom';
import { Menu, Search } from 'semantic-ui-react';
import './Header.scss';

const Header = () => {
  return (
    <header className='Header'>
      <nav>
        <div className="ui inverted borderless py-2 top fixed fluid menu">
          <Link to='/home' className="header item">Experto Prenatal</Link>
          <div className="right menu">
            <Menu.Item>
            <Search
              input={{ icon: 'search', iconPosition: 'left' }}
            />
            </Menu.Item>
            <Menu.Item
              name='home'
            />
            <Menu.Item
              name='messages'
            />
            <Menu.Item
              name='messages'
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
 
export default Header;