import PropTypes from 'prop-types';
import css from '../css/FriendListItem.module.css';
// zrobic kolorek na isOnline a nie napis

export const FriendListItem = ({ friend }) => {
  const {
    avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    name,
    isOnline,
  } = friend;
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }).isRequired,
};
