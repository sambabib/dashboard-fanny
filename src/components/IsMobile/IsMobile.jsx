import './IsMobile.css';

// @image
import NotFound from '../../Images/404.jpg';

const IsMobile = () => {
  return (
    <div className='ismobile'>
      <div className='ismobile__info'>
        <img src={NotFound} alt='cannot view on mobile' />
        <h3>Cannot View on Mobile, Please View on Desktop</h3>
      </div>
    </div>
  );
};

export default IsMobile;
