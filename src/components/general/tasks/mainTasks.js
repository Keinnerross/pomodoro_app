import { View, StyleSheet, Text } from "react-native";
import ListCard from "./components/listCard";
import AddListCard from "./components/addListCard";
import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useEffect, useState } from "react";

const MainTasks = () => {
  const [lists, setLists] = useState([]);

  /*Functions Controllers List and Task */

  const addList = async (values) => {
    try {
      const docRef = addDoc(collection(db, "lists"), {
        listName: values,
        tasks: [],
      });
      getData();
      console.log("add or update success");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getData = async () => {
    const listsArr = [];
    onSnapshot(collection(db, "lists"), (query) => {
      query.forEach((doc) => {
        console.log(doc.data());
        listsArr.push({ ...doc.data(), id: doc.id });
      });
      console.log(listsArr);
      setLists(listsArr);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.mainTasksContainer}>
      <View style={styles.mainTaskSection}>
        <AddListCard addList={addList} />
        {lists.map((list) => (
          <ListCard listName={list.listName} id={list.id} key={list.id} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTasksContainer: {
    maxWidth: "100%",
    height: "100%",
  },
  mainTaskSection: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: "3.5%",
  },
});

export default MainTasks;
