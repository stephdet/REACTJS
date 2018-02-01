import React from 'react';

class Hello extends React.Component {
render (){
  return (
          <div>
            Hello {this.props.name}
          </div>

          );


}

}

ReactDOM.render(
<Hello name="David" />,
);
