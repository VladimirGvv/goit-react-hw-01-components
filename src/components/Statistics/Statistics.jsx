import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';
import getRandomColor from 'components/getRandomColor/getRandomColor';

export const Statistics = ({ title, stats }) => {
    const {
        statistics,
        statistics__title,
        statistics__list,
        statistics__item,
        statistics__label,
        statistics__percentage,
    } = styles;

    return (
        <section className={statistics}>
            {title && <h2 className={statistics__title}>{title}</h2>}

            <ul className={statistics__list}>
                {stats.map(({ id, label, percentage }) => (
                    <li key={id} style={{ backgroundColor: getRandomColor() }}
            className={statistics__item}>
                        <span className={statistics__label}>{label}</span>
                        <span className={statistics__percentage}>{percentage}</span>
                    </li>
                ))}
           
            </ul>
        </section>
    );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};