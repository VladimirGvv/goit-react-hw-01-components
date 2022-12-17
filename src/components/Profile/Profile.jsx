import PropTypes from 'prop-types';
import styles from './Profile.module.scss' 

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  const {
    profile,
    profile__box,
    profile__avatar,
    profile__name,
    profile__tag,
    profile__location,
    profile__data,
    profile__data_item,
    profile__data_label,
    profile__data_quantity
  } = styles;

  return (
    <section>
      <div className={profile}>
        <div className={profile__box}>
          <img className={profile__avatar}
            src={avatar}
            alt="User avatar"
            width="100"
            height="100"
          />
          <p className={profile__name}>{username}</p>
          <p className={profile__tag}>@{tag}</p>
          <p className={profile__location}>{location}</p>
        </div>
        <ul className={profile__data}>
            <li className={profile__data_item}>
              <span className={profile__data_label}>Followers</span>
              <span className={profile__data_quantity}>{followers ? followers : 0}</span>
            </li>
            <li className={profile__data_item}>
            <span className={profile__data_label}>Views</span>
            <span className={profile__data_quantity}>{views ? views : 0}</span>
            </li>
          <li className={profile__data_item}>
            <span className={profile__data_label}>Likes</span>
            <span className={profile__data_quantity}>{likes ? likes : 0}</span>
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