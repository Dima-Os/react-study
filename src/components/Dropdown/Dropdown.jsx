import s from './Dropdown.module.css';
import { Component } from 'react';

class Dropdown extends Component {
  state = { visible: false };
  togleMenu = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };
  // showMenu=()=> {
  //     this.setState({visible:true})
  // }
  // hideMenu=()=> {
  //     this.setState({visible:false})
  // }
  render() {
    return (
      <div className={s.wrapper}>
        <button type="button" onClick={this.togleMenu}>
          {this.state.visible ? 'Скрить' : 'Показать'}
        </button>
        {/* <button type='button' onClick={this.hideMenu}  >
                    Скрыть
                </button>
                <button type='button' onClick={this.showMenu} >
                    Показать
                </button> */}
        {this.state.visible && <div className={s.menu}>Выпадашка</div>}
      </div>
    );
  }
}

export default Dropdown;
