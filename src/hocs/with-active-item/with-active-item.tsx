import * as React from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: null,
      };

      this._setActiveItem = this._setActiveItem.bind(this);
    }

    _setActiveItem(item) {
      if (item) {
        this.setState({activeItem: item});
      } else {
        this.setState({activeItem: null});
      }
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          onItemClick={this._setActiveItem}
        />
      );
    }
  }

  return WithActiveItem;
};


export default withActiveItem;
