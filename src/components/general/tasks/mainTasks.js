import { View, StyleSheet, Text } from "react-native";
import ListCard from "./components/listCard";
import DraggableFlatList from "react-native-draggable-flatlist";
import AddListCard from "./components/addListCard";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  onSnapshot,
  getDocs,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../../../firebase";
import { useEffect, useState } from "react";

const MainTasks = () => {
  const [lists, setLists] = useState([]);

  /*Functions Controllers List and Task */

  /*Añadir lista */
  const addList = async (values) => {
    try {
      const orderValue = lists.length + 1;
      addDoc(collection(db, "lists"), {
        listName: values,
        order: orderValue,
      });
      getData();
      console.log("add or update success");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  /*Obtener Listas */
  const getData = async () => {
    const listsArr = [];

    const q = query(collection(db, "lists"), orderBy("order", "desc"));
    const querySnapshot = await getDocs(q);
    const lists = querySnapshot.docs.map((doc) =>
      listsArr.push({ ...doc.data(), id: doc.id })
    );

    console.log(listsArr);
    setLists(listsArr);
  };

  /*Actualizar Lista */

  const updateList = async (newNameList, idList) => {
    try {
      const docRef = doc(db, "lists", idList);
      await updateDoc(docRef, {
        listName: newNameList, // Agregamos la tarea a la lista
      });
      console.log("add task success");
      getData();
    } catch (e) {
      console.log("Algo salió mal", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.mainTasksContainer}>
      <View style={styles.mainTaskSection}>
        <AddListCard addList={addList} />
        {lists.map((list) => (
          <ListCard
            listName={list.listName}
            idList={list.id}
            key={list.id}
            updateList={updateList}
            render={getData}
          />
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
