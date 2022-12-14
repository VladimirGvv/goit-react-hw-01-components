import PropTypes from 'prop-types';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
    
    return (
        <li>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
};