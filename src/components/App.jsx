import user from '../user.json';
import data from '../data.json';

import { Profile } from './Profile';
import { Statistics } from './Statistics';

export const App = () => {
  return (
    <div>
      <Profile user={user}></Profile>
      <Statistics data={data}></Statistics>
    </div>
  );
};
