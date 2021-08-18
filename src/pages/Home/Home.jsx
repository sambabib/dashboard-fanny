// @components
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import WidgetLg from '../../components/WidgetLg/WidgetLg';

// @styling
import './Home.css';

import { AddRounded } from '@material-ui/icons';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__description'>
          <h2 className='home__title'>Home</h2>
          <p>Welcome to your home</p>
        </div>
        <div className='home__add'>
          <AddRounded style={{ color: 'grey', marginRight: '8px' }} />
          <span>Add Widget</span>
        </div>
      </div>

      <div className='home__cards'>
        <FeaturedInfo />
      </div>

      <div className='home__widgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
