import Link from "next/link";
import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

function CustomLink({
  children,
  href,
  ...props
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link href={href || "#"} {...props} target="_blank">
      {children}
    </Link>
  );
}

const components = {
  a: CustomLink,
};

export default components;
