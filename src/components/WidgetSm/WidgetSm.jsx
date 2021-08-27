import { VisibilityRounded } from '@material-ui/icons';
import './WidgetSm.css';

// @data
import { widgetsm } from '../../data/';

const WidgetSm = () => {
  return (
    <div className='widgetsm'>
      <span className='widgetsm__header'>New Members</span>
      {widgetsm.map((item) => (
        <ul className='widgetsm__list' key={item.username}>
          <li className='widgetsm__listItem'>
            <img src={item.img} alt='widgetimg' className='widgetsm__img' />
            <div className='widgetsm__user'>
              <span className='widgetsm__username'>{item.username}</span>
              <span className='widgetsm__title'>{item.title}</span>
            </div>
          </li>
          <div className='widgetsm__visibility'>
            <VisibilityRounded style={{ fontSize: '1.2rem' }} />
          </div>
        </ul>
      ))}
    </div>
  );
};

export default WidgetSm;
