import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export function Install({ p }) {
  return (
    <Tabs
      defaultValue="yarn"
      values={[
        { label: "Yarn", value: "yarn" },
        { label: "npm", value: "npm" },
      ]}
    >
      <TabItem value="yarn">
        <CodeBlock>yarn add {p}</CodeBlock>
      </TabItem>
      <TabItem value="npm">
        <CodeBlock>npm install {p}</CodeBlock>
      </TabItem>
    </Tabs>
  );
}
