declare module 'carbon-components-react' {
  import * as React from 'react';

  export interface Props {
    disabled?: boolean;
  }

  export class Button extends React.PureComponent<Props> {
    render(): React.ReactNode | null;
  }
  export class Slider extends React.PureComponent<Props> {
    render(): React.ReactNode | null;
  }

  export class InlineLoading extends React.PureComponent<{ style?: object; description?: string }> {
    render(): React.ReactNode | null;
  }
}
