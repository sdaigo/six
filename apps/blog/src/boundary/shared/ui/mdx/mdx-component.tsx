import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

import "github-markdown-css";

const components = {
  Image,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div style={{ backgroundColor: "transparent" }} className="markdown-body">
      <Component components={components} />
    </div>
  );
}
