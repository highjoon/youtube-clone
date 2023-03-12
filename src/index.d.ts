declare module '*.mdx';

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

interface Props {
  className?: string;
}

interface PropsWithStringChildren extends Props {
  children: string;
}

interface PropsWithReactNodeChildren extends Props {
  children: React.ReactNode;
}
