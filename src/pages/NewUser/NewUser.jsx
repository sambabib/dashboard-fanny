import './NewUser.css';

const NewUser = () => {
  return (
    <div className='newuser'>
      <h3 className='newuser__title'>New User</h3>
      <form className='newuser__form'>
        <div className='newuser__item'>
          <label>Username</label>
          <input type='text' placeholder='john' />
        </div>
        <div className='newuser__item'>
          <label>Full Name</label>
          <input type='text' placeholder='John Smith' />
        </div>
        <div className='newuser__item'>
          <label>Email</label>
          <input type='email' placeholder='john@gmail.com' />
        </div>
        <div className='newuser__item'>
          <label>Password</label>
          <input type='password' placeholder='password' />
        </div>
        <div className='newuser__item'>
          <label>Phone</label>
          <input type='text' placeholder='+1 123 456 78' />
        </div>
        <div className='newuser__item'>
          <label>Address</label>
          <input type='text' placeholder='New York | USA' />
        </div>
        <div className='newuser__item'>
          <label>Gender</label>
          <div className='newuser__gender'>
            <input type='radio' name='gender' id='male' value='male' />
            <label for='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label for='female'>Female</label>
            <input type='radio' name='gender' id='other' value='other' />
            <label for='other'>Other</label>
          </div>
        </div>
        <div className='newuser__item'>
          <label>Active</label>
          <select className='newuser__select' name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='newuser__button'>Create</button>
      </form>
    </div>
  );
};

export default NewUser;
