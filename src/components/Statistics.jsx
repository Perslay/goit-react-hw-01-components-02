import PropTypes from 'prop-types';
import css from '../css/Statistics.module.css';

// randomise background color for list item
const randomiseColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // return randomColor.trim() === '#' ? '#FF0000' : randomColor;
  const paddedColor = randomColor.padStart(6, '0');
  return `#${paddedColor}`;
};

// calculate background lightness
const calculateLuminance = color => {
  const hexToRgb = hex =>
    hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (r, g, b) => '#' + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map(x => parseInt(x, 16));

  const [r, g, b] = hexToRgb(color);

  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
};

// calculate contrast text color
const getTextColor = color => {
  const luminance = calculateLuminance(color);
  return luminance > 0.5 ? '#000000' : '#ffffff';
};

export const Statistics = ({ data }) => {
  const { title, stats } = data;
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => {
          // creating styling variables
          const backgroundColor = randomiseColor();
          const textColor = getTextColor(backgroundColor);

          return (
            <li
              key={stat.id}
              className={css.item}
              // using styles
              style={{ backgroundColor, color: textColor }}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
      })
    ),
  }).isRequired,
};
