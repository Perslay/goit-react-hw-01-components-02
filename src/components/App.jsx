import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import items from '../data/transactions.json';

import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
// import { FriendListItem } from './FriendListItem';

export const App = () => {
  return (
    <div>
      <Profile user={user}></Profile>
      <Statistics data={data}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={items}></TransactionHistory>
    </div>
  );
};
