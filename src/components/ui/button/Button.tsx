import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

class Button extends React.Component<ButtonProps, any> {
  render(): React.ReactNode {
    const { children } = this.props;
    return (
      <div>
        <div>{children}</div>
      </div>
    );
  }
}

export default Button;
