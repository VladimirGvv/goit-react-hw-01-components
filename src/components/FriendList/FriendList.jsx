import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import styles from './FriendList.module.scss'

export const FriendList = ({ friends }) => {
  const { friend__list } = styles
  return (
    <section>
      <ul className={friend__list}>
        {friends.length > 0 &&
          friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              key={id}
            />
          ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};