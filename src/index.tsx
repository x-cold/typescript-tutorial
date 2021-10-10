import React, { useState } from 'react';

interface Props {
  firstName: string;
};

interface FormProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

const HelloWorld: React.FC<Props> = ({ firstName }) => {
  const [state] = useState<{ lastName: string }>({ lastName: '' });

  return <div>hello {firstName} {state.lastName}</div>
}

const Form = <T extends {}>({ values, children }: FormProps<T>) => {
  return children(values);
}

const App: React.FC = () => {
  const [val] = useState(() => 1);
  return <div className="App">
    <Form<{ lastName: string | null }> values={{ lastName: '' }}>
      {values => <div>{values.lastName}</div>}
    </Form>
  </div>
};
