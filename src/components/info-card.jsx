import React from "react";

import { Typography, Card, CardBody } from "@material-tailwind/react";



export function InfoCard({ title, children }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid px-0">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className=" font-normal">{children}</Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;