import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { FilterByTime } from "./FilterByTime";
import MetricsI18n from "../Metrics-i18n.json";

export default {
  title: "Components/Metrics/FilterByTime",
  component: FilterByTime,
  args: {
    keyText: "string",
    disableToolbar: false,
    ariaLabel: "the aria label",
    duration: 60,
  },
  parameters: {
    i18n: MetricsI18n,
  },
} as ComponentMeta<typeof FilterByTime>;

const Template: ComponentStory<typeof FilterByTime> = (args) => (
  <FilterByTime {...args} />
);

export const Story = Template.bind({});
Story.args = {};