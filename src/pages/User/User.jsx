import {
  CalendarTodayRounded,
  LocationSearchingRounded,
  MailRounded,
  PermIdentityRounded,
  PhoneAndroidRounded,
  PublishRounded,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './User.css';

const User = () => {
  return (
    <div className='user'>
      <div className='user__titleContainer'>
        <h3 className='user__title'>Edit User</h3>
        <Link to='/newUser'>
          <button className='user__addButton'>Create</button>
        </Link>
      </div>

      <div className='user__container'>
        <div className='user__show'>
          <div className='user-show__top'>
            <img
              src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='user-show__img'
            />
            <div className='user-show__topTitle'>
              <span className='user-show__username'>Anna Becker</span>
              <span className='user-show__userTitle'>Software Engineer</span>
            </div>
          </div>

          <div className='user-show__bottom'>
            <span className='user-show__bottomTitle'>Account Details</span>
            <div className='user-show__bottomInfo'>
              <PermIdentityRounded style={{ fontSize: '1.2rem' }} />
              <span className='user-show__infoTitle'>annabeck99</span>
            </div>
            <div className='user-show__bottomInfo'>
              <CalendarTodayRounded style={{ fontSize: '1.2rem' }} />
              <span className='user-show__infoTitle'>10.12.1989</span>
            </div>
            <div className='user-show__bottomInfo'>
              <PhoneAndroidRounded style={{ fontSize: '1.2rem' }} />
              <span className='user-show__infoTitle'>+1 498 102 39</span>
            </div>
            <div className='user-show__bottomInfo'>
              <MailRounded style={{ fontSize: '1.2rem' }} />
              <span className='user-show__infoTitle'>annabeck99@gmail.com</span>
            </div>
            <div className='user-show__bottomInfo'>
              <LocationSearchingRounded style={{ fontSize: '1.2rem' }} />
              <span className='user-show__infoTitle'>New York | USA</span>
            </div>
          </div>
        </div>

        <div className='user__update'>
          <span className='user-update__title'>Edit</span>
          <form className='user-update__form'>
            <div className='user-update__left'>
              <div className='user-update__item'>
                <label>Username</label>
                <input
                  type='text'
                  placeholder='enter username...'
                  className='user-update__input'
                />
              </div>
              <div className='user-update__item'>
                <label>Full Name</label>
                <input
                  type='text'
                  placeholder='enter full name...'
                  className='user-update__input'
                />
              </div>
              <div className='user-update__item'>
                <label>Email</label>
                <input
                  type='text'
                  placeholder='enter email...'
                  className='user-update__input'
                />
              </div>
              <div className='user-update__item'>
                <label>Phone</label>
                <input
                  type='text'
                  placeholder='enter phone number...'
                  className='user-update__input'
                />
              </div>
              <div className='user-update__item'>
                <label>Address</label>
                <input
                  type='text'
                  placeholder='enter city...'
                  className='user-update__input'
                />
              </div>
            </div>
            <div className='user-update__right'>
              <div className='user-update__upload'>
                <img
                  className='user-update__img'
                  src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                  alt=''
                />
                <label htmlFor='file'>
                  <PublishRounded style={{ fontSize: '.9rem', cursor: 'pointer'}} />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <button className='user-update__button'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
