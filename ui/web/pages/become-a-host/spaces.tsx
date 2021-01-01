import React, { useState } from "react";
import Router from "next/router";

/** components */
import { Layout } from "@layout";
import { Prototype as CreatePrototype } from "@prototype/create";

/** context */
import { useStayDispatch, useStayState } from "@context/stay";

const AmenitiesPage = () => {
  const stayDispatch = useStayDispatch();
  const { spaces } = useStayState();
  const [data, setData] = useState({
    spaces,
  });

  const proceed = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      Router.push("/become-a-host/photos");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/amenities");
    }, 500);
  };

  return (
    <Layout
      variant="create"
      left={
        <CreatePrototype
          title="Amenities"
          variant="spaces"
          data={data}
          setData={setData}
        />
      }
      percentage={30}
      next={proceed}
      back={revert}
    />
  );
};

export default AmenitiesPage;