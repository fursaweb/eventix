import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  console.log(params);
  return <h1>{params.id}</h1>;
};

export default Page;
