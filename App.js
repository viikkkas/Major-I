import React from "react";

import AppTextInput from "./app/components/AppTextInput"
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";

const categories = [
  { label: "Furniture", value: 1},
  { label: "Clothing", value: 2},
  { label: "Cameras", value: 3},
]

export default function App(props) {
  return (
    <Screen>
      <AppPicker items = {categories} placeholder="Category" icon="apps" />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}
