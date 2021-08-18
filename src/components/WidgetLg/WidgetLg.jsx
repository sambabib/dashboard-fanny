import './WidgetLg.css';

// @data
import { widgetlg } from '../../data';

const WidgetLg = () => {
  const Status = ({ type }) => {
    return <div className={'widgetlg__type' + type}>{type}</div>;
  };

  return (
    <div className='widgetlg'>
      <span className='widgetlg__header'>Latest Transactions</span>
      <table className='widgetlg__table'>
        <tr className='widgetlg__tr'>
          <th className='widgetlg__th'>Customer</th>
          <th className='widgetlg__th'>Date</th>
          <th className='widgetlg__th'>Amount</th>
          <th className='widgetlg__th'>Status</th>
        </tr>

        {widgetlg.map((item) => (
          <tr className='widgetlg__tr'>
            <td className='widgetlg__user'>
              <img
                src={item.img}
                alt='widgetlguser'
                className='widgetlg__img'
              />
              <span className='widgetlg__name'>{item.name}</span>
            </td>
            <td className='widgetlg__date'>{item.date}</td>
            <td className='widgetlg__amt'>${item.amt}</td>
            <td className='widgetlg__status'>
              <Status type={item.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetLg;
