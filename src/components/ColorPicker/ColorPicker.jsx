const ColorPickerLable = ({ el }) => {
  return <span style={{ backgroundColor: el.color }}>{el.label}</span>;
};

const ColorPicker = ({ options }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option.lable}>
          <ColorPickerLable el={option} key={option.color} />
        </li>
      ))}
    </ul>
  );
};

export default ColorPicker;
