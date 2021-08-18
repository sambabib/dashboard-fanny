import {
  HomeRounded,
  BarChartRounded,
  PeopleRounded,
  DashboardRounded,
  MailRounded,
  AccountBalanceRounded,
  TrendingUpRounded,
  ExitToAppRounded,
} from '@material-ui/icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__wrapper'>
        <div className='sidebar__menu'>
          <ul className='sidebar__list'>
            <li className='sidebar__listItem active'>
              <HomeRounded 
              style={{ fontSize: '1.2rem' }} 
              />
            </li>
            <li className='sidebar__listItem'>
              <BarChartRounded 
              style={{ fontSize: '1.2rem' }} 
              />
            </li>
            <li className='sidebar__listItem'>
              <PeopleRounded 
              style={{ fontSize: '1.2rem' }} 
              />
            </li>
            <li className='sidebar__listItem'>
              <DashboardRounded 
              style={{ fontSize: '1.2rem' }} 
              />
            </li>
            <li className='sidebar__listItem'>
              <MailRounded 
              style={{ fontSize: '1.2rem' }} 
              />
            </li>
            <li className='sidebar__listItem'>
              <AccountBalanceRounded 
              style={{ fontSize: '1.2rem' }} 
              />
            </li>
            <li className='sidebar__listItem'>
              <TrendingUpRounded 
              style={{ fontSize: '1.2rem' }} 
              />
            </li>
          </ul>
          <div className='sidebar__logout'>
            <ExitToAppRounded 
            style={{ fontSize: '1.2rem' }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
