import React from "react";

import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";

export default function App(props) {
  return (
    <Screen>
      <AppPicker placeholder="Category" icon="apps" />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}
