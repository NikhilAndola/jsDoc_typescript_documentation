import * as React from 'react';

/**
 * @type {children prop}- JSX.Element
 */
interface childProp {
  children: JSX.Element;
}
export default ({ children }) => <React.Fragment> {children}</React.Fragment>;
