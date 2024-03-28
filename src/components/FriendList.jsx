// import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  const friendList = friends.friendsArr;
  // accessing friends list in the friends object from friends.json
  return (
    <ul className="friend-list">
      {friendList.map(friend => (
        <FriendListItem key={friend.id} friend={friend}></FriendListItem>
      ))}
    </ul>
  );
};