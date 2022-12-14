import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    // const { id, label, percentage } = stats;
    return (
        <section class="statistics">
            <h2 class="title">{title}</h2>

            <ul class="stat-list">
                {stats.map(({ id, label, percentage }) => (
                    <li key={id}>
                        <span>{label}</span>
                        <span>{percentage}</span>
                    </li>
                ))}
           
            </ul>
        </section>
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};