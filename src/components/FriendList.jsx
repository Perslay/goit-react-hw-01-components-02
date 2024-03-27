import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => <ul className="friend-list"></ul>;

FriendList.propTypes = {
  friends: PropTypes.shape({
    friends: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
