import user from '../user.json';

export const Profile = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
