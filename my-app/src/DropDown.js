import React from 'react'
 
class DropDownMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
    }
  }
 
  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }))
  }
 
  handleClickMenu(val) {
    this.setState({
      listOpen: false,
    })
    alert(val)
  }
 
  render() {
    const { listOpen } = this.state
    return (
      <div style={styles.dropDownMenu}>
        <div onClick={this.toggleList.bind(this)} style={styles.menuButton}>
        <div className="menu-list-text">個人のお客様</div>
        </div>
        {listOpen && (
          <div style={styles.menuBox}>
            <div style={styles.menuContent}>
              <div onClick={this.handleClickMenu.bind(this, 1)}>menu 1</div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
 
const styles = {
  dropDownMenu: {
    position: 'relative',
    color: "white",
  },
  menuButton: {
    display: 'inline',
    cursor: 'pointer',
    border: '1px solid black',
    padding: '3px 5px',
  },
  menuBox: {
    position: 'absolute',
    width: '800px',
    zIndex: 1,
    cursor: 'pointer',
    background:"red",
    border: '1px solid black',
  },
  menuContent: {
 
  },
  lastMenuContent: {
  
  },
}
 
export default DropDownMenu