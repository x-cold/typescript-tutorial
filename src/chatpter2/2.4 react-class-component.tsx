import React from 'react';

interface JsxClass<P, S> extends React.Component<P, S> {
  render(): React.ReactElement<P>;
}

interface Render<P> {
  render(): React.ReactElement<P>;
}

interface ReactCtor<P, S> {
  new(props: P): JsxClass<P, S>;
}

interface Props<T> {
  val: T;
  type: string;
}

class C<T> extends React.Component<Props<T>, {}> implements Render<Props<T>>  {
  constructor(props: Props<T>, context?: React.ContextType<any>) {
    super(props);
    // this.state = /* ... */
    // this.props.b = 1;
  }

  render(): React.ReactElement {
    return null;
  }
}

const C1: ReactCtor<Props<number>, {}> = C;


const node = <C1 val={1} type="input" />;
