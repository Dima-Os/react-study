import s from './ColorPicker.module.scss';

const ColorPickerLable = () => {
  return <span></span>;
};

const ColorPicker = ({ options }) => {
  return (
    <div className={s.container}>
      <h2 className={s.heading}>Color Picker</h2>
      <ul className={s.list}>
        {options.map(option => (
          <li
            className={s.item}
            key={option.label}
            style={{ backgroundColor: option.color }}
          >
            <ColorPickerLable el={option} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorPicker;
