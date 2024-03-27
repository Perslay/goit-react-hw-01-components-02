// import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  const friendList = friends.friends;
  // accessing friends list in the friends object from friends.json
  return (
    <ul className="friend-list">
      {friendList.map(friend => (
        <FriendListItem key={friend.name} friend={friend}></FriendListItem>
      ))}
    </ul>
  );
};
