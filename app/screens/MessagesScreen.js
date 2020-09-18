import React, { useState } from "react";
import { FlatList, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/vikas.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/vikas.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessage] = useState(initialMessages);
  const [refreshing, setRefresh] = useState(false);

  const handleDelete = (message) => {
    setMessage(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessage([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/vikas.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
