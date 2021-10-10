import React, { PropsWithChildren } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

// Type whatever you expect in 'this.props.match.params.*'
type PathParamsType = {
  keyword: string;
}

// Your component own properties
type Props = RouteComponentProps<PathParamsType> & {
  onSelected(itemId: number): void;
}

const ItemList: React.FC<PropsWithChildren<Props>> = (props) => {
  // props.match.params.
  return null;
}


export default withRouter(ItemList);
