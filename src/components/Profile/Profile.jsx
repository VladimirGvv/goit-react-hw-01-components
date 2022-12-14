import PropTypes from 'prop-types';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <section>
      <div>
        <div>
          <img
            src={avatar}
            alt="User avatar"
            width="100"
            height="100"
          />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
        </div>
        <ul>
            <li>
                <span>Followers</span>
                <span>{followers ? followers : 0}</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity">{views ? views : 0}</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity">{likes ? likes : 0}</span>
            </li>
        </ul>

      </div>
    </section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};