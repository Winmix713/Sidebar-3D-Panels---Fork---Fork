import React from 'react';

export function isReactComponent(
component: unknown)
: component is React.ComponentType {
  return (
    typeof component === 'function' ||
    typeof component === 'object' &&
    component !== null &&
    (component as any).$$typeof === Symbol.for('react.element'));

}