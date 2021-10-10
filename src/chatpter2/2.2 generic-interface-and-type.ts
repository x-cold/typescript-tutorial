// default value in generic types
interface Tab<K = any, E = HTMLDivElement> {
  title: string;
  key: K;
  element: E;
}

type DivTab = Tab<number, HTMLDivElement>;
type SpanTab = Tab<string, HTMLSpanElement>;

const tab1: DivTab = {
  title: 'tab1',
  key: 1,
  element: document.createElement('div'),
};

// Tab<any, HTMLDivElement>
const tab2: Tab = {
  ...tab1,
  title: 'tab2',
};

const tab3: SpanTab = {
  title: 'tab1',
  key: '1',
  element: document.createElement('span'),
};
