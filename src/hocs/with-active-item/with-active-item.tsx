import * as React from "react";
import {Subtract} from 'utility-types';


interface State {
  currentActiveItem: {} | string;
}
interface InjectingProps {
  ActiveItem: {} | string;
  onItemClick(): void;
}

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;
  class WithActiveItem extends React.PureComponent<T, State> {

    constructor(props) {
      super(props);

      this.state = {
        currentActiveItem: null,
      };

      this._setActiveItem = this._setActiveItem.bind(this);
    }

    _setActiveItem(item) {
      if (item) {
        this.setState({currentActiveItem: item});
      } else {
        this.setState({currentActiveItem: null});
      }
    }

    render() {


      return (
        <Component
          {...this.props}
          activeItem={this.state.currentActiveItem}
          onItemClick={this._setActiveItem}
        />
      );
    }
  }

  return WithActiveItem;
};


export default withActiveItem;
