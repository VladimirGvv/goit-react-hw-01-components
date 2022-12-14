import PropTypes from 'prop-types';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';

export const FriendList = ({ friends }) => {

  return (
    <section>
      <ul>
        {friends.length > 0 &&
          friends.map(({ avatar, name, isOnline, id }) => (
            <FriendsListItem
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
  friends: PropTypes.array,
};