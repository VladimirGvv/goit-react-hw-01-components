import PropTypes from 'prop-types';
import styles from './FriendListItem.module.scss'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    const {
        friend__item,
        online,
        offline,
        friend__item_status,
        friend__item_avatar,
        friend__item_name,
    } = styles
    return (
        <li className={friend__item}>
            <span className={`${friend__item_status} ${isOnline ? online : offline}`}></span>
            <img className={friend__item_avatar} src={avatar} alt="User avatar" width="48" />
            <p className={friend__item_name}>{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
};