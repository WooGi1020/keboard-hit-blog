import React from "react";

function page({ params }: { params: { slug: any } }) {
  return <div>{params.slug}</div>;
}

export default page;
