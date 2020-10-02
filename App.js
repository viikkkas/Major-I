import React from "react";
import AppTextInput from "./app/components/AppTextInput";

import Screen from "./app/components/Screen";

export default function App(props) {
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}
