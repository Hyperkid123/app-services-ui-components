import OutlinedQuestionCircleIcon from "@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon";
import { VoidFunctionComponent } from "react";
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Title,
  Popover,
} from "@patternfly/react-core";

export const ConsumerGroups: VoidFunctionComponent = () => {
  return (
    <React.Fragment>
      <Card isFullHeight data-testid="TopicPartitions">
        <CardTitle component="h3">
          Consumer groups {""}
          <Popover
            aria-label="{title}"
            headerContent={<div>"title"</div>}
            bodyContent={<div>"description"</div>}
          >
            <OutlinedQuestionCircleIcon />
          </Popover>
        </CardTitle>
        <CardBody>
          <Title headingLevel="h3" size="4xl">
            3
          </Title>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};