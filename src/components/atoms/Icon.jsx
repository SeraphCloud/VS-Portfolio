import { icons } from '../../data/icons';

const Icon = ({ name, ariaLabel, ...props }) => {
  const iconData = icons[name];

  if (!iconData) {
    return null;
  }

  const label =
    ariaLabel || `${name.charAt(0).toUpperCase() + name.slice(1)} icon`;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-label={label}
      {...props}
    >
      <path d={iconData.path} />
    </svg>
  );
};

export default Icon;
