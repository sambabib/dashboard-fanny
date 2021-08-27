import {
  DescriptionRounded,
  VerifiedUserRounded,
  MoreHorizRounded,
  ArrowDropDownRounded,
} from '@material-ui/icons';

// @component
import Barchart from '../Chart/Barchart';
import Piechart from '../Chart/Piechart';
import './FeaturedInfo.css';

const FeaturedInfo = () => {
  return (
    <div className='featuredinfo'>
      <div className='featuredinfo__card'>
        <div className='featuredinfo__title'>
          <h3>Emails sent</h3>
          <h3 className='featuredinfo__week'>
            This week{' '}
            <span>
              <ArrowDropDownRounded style={{ marginTop: '.2rem' }} />
            </span>
          </h3>
        </div>

        <div className='featuredinfo-piechart__container'>
          <div className='piechart__container'>
            <Piechart />
          </div>

          <div className='featuredinfo-piechart__info'>
            <div className='featuredinfo-piechart__text'>
              <div className='featuredinfo-piechart__sent'>
                <span style={{ background: 'blue' }}></span> <h3>Sent</h3>
              </div>
              <p>345</p>
            </div>

            <div className='featuredinfo-piechart__text'>
              <div className='featuredinfo-piechart__received'>
                <span style={{ background: '#75E6DA' }}></span>{' '}
                <h3>Received</h3>
              </div>
              <p>194</p>
            </div>
          </div>
        </div>
      </div>

      {/* testing chart component out */}

      <div className='featuredinfo__card'>
        <div className='featuredinfo__title'>
          <h3>User Activity</h3>
          <h3 className='featuredinfo__week'>
            This week{' '}
            <span>
              <ArrowDropDownRounded style={{ marginTop: '.2rem' }} />
            </span>
          </h3>
        </div>
        <div className='featuredinfo__container'>
          <Barchart />
        </div>
      </div>

      <div className='featuredinfo__doubleCard'>
        <div className='featuredinfo-doubleCard__earnings'>
          <span className='featuredinfo-doubleCard__icon'>
            <DescriptionRounded style={{ fontSize: '1.2rem', color: 'blue' }} />
          </span>
          <div className='featuredinfo-doubleCard__info'>
            <span className='featuredinfo-doubleCard__number'>$4,280</span>
            <span className='featuredinfo-doubleCard__text'>
              Earned this month
            </span>
          </div>
          <span className='featuredinfo-doubleCard__menu'>
            <MoreHorizRounded style={{ color: 'gray', fontSize: '.9rem' }} />
          </span>
        </div>

        <div className='featuredinfo-doubleCard__clients'>
          <span className='featuredinfo-doubleCard__icon userdeets'>
            <VerifiedUserRounded
              style={{ fontSize: '1.2rem', color: 'green' }}
            />
          </span>
          <div className='featuredinfo-doubleCard__info'>
            <span className='featuredinfo-doubleCard__number'>769</span>
            <span className='featuredinfo-doubleCard__text'>New clients</span>
          </div>
          <span className='featuredinfo-doubleCard__menu'>
            <MoreHorizRounded style={{ color: 'gray', fontSize: '.9rem' }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
