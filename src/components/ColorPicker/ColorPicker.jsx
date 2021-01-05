import s from './ColorPicker.module.scss';
import { Component } from 'react';

const ColorPickerLable = ({ backgroundColor, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${s.button} ${active}`.trim()}
      type="button"
      style={{ backgroundColor: backgroundColor }}
    ></button>
  );
};

class ColorPicker extends Component {
  state = {
    activeOptionsIdx: 0,
  };
  setIdx = idx => {
    this.setState({ activeOptionsIdx: idx });
  };
  render() {
    const { options } = this.props;
    const { activeOptionsIdx } = this.state;
    const { label } = options[activeOptionsIdx];

    return (
      <div className={s.container}>
        <h2 className={s.heading}>Color Picker</h2>
        <p>Current color: {label}</p>
        <ul className={s.list}>
          {options.map((option, idx) => (
            <li className={s.item} key={option.label}>
              <ColorPickerLable
                backgroundColor={option.color}
                active={idx === activeOptionsIdx ? `${s.checked}` : ''}
                onClick={() => this.setIdx(idx)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ColorPicker;
