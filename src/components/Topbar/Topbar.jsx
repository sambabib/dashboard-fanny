// @icons
import { NotificationsNoneRounded, ArrowDropDownRounded, SearchRounded } from '@material-ui/icons/';

import Avatar from '../../Images/avatar.jpg';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbar__wrapper'>
        <div className='topbar__left'>
          <span className='topbar__logo'>board.fanny</span>
          <div className="topbar__search">
            <SearchRounded style={{ fontSize: '1rem', color: 'gray' }} />
            <input type="text" placeholder='Search for anything' />
          </div>
        </div>
        <div className='topbar__right'>
          <div className='topbar__iconContainer'>
            <div className='topbar-iconContainer__text'>
              <p>
                You have <span>15</span> new leads 👉
              </p>
            </div>
          </div>
          <div className='topbar__iconContainer'>
            <NotificationsNoneRounded style={{ fontSize: '1 rem' }} />
            <span className='topbar-icon__badge'>5</span>
          </div>
          <div className='topbar__image'>
            <img src={Avatar} alt='Zulmaury Saavedra via Unsplash' />
            <ArrowDropDownRounded
              style={{ fontSize: '0.3 rem', marginLeft: '4px', color: 'gray' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
