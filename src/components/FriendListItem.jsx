import PropTypes from 'prop-types';
import css from '../css/FriendListItem.module.css';
// zrobic kolorek na isOnline a nie napis

export const FriendListItem = ({ friend }) => {
  const {
    avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    name,
    isOnline,
  } = friend;

  let onlineColor;
  if (isOnline) {
    onlineColor = '#46b14a';
  }

  return (
    <li className={css.item}>
      <span className={css.status} style={{ backgroundColor: onlineColor }}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
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
