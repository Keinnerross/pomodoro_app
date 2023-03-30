import React, { useContext } from "react";
// import { context } from "../../Components/context/store";
import { View, TouchableOpacity, StyleSheet } from "react-native";
// import { BsFillPlayFill, BsStopFill, BsFillPauseFill } from "react-icons/bs";
// import { MdOutlineRestartAlt } from "react-icons/md";

const ButtonsPomo = () => {
  //   const { setTime } = useContext(context);
  //   const { pomoSetting } = useContext(context);
  //   const { shortBreak } = useContext(context);
  //   const { longBreak } = useContext(context);
  //   const { pomoSession, setPomoSession } = useContext(context);
  //   const { isActive, setIsActive } = useContext(context);
  //   const { setCyclePomo } = useContext(context);
  //   const { sound, setSound } = useContext(context);

  //   const playAndLoadSound = () => {
  //     setIsActive(!isActive);
  //     sound.setVolumeAsync(0);
  //     sound.replayAsync();
  //   };
  //   const restButton = () => {
  //     if (window.confirm("¿are you sure?") == true) {
  //       if (pomoSession == "Pomodoro") {
  //         setTime(pomoSetting * 60);
  //       } else if (pomoSession == "Short") {
  //         setTime(shortBreak * 60);
  //       } else if (pomoSession == "Long") {
  //         setTime(longBreak * 60);
  //       }
  //     }

  //     setIsActive(false);
  //   };

  //   const stopButton = () => {
  //     if (window.confirm("¿are you sure?") == true) {
  //       setTime(pomoSetting * 60);
  //       setPomoSession("Pomodoro");
  //       setCyclePomo(0);
  //     }

  //     setIsActive(false);
  //   };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} /*onPress={() => restButton()}*/>
        {/* <MdOutlineRestartAlt size={30} /> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={/*isActive ? [styles.button, styles.active] : */ styles.button}
        /* onPress={() => playAndLoadSound()}*/
      >
        {
          /*isActive ? (
          <BsFillPauseFill size={25} />
        ) : ( */
          // <BsFillPlayFill size={30} />
          /*)*/
        }
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} /*onPress={() => stopButton()}*/>
        {/* <BsStopFill size={30} /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  active: {
    backgroundColor: "#42a5f5",
  },
});

export default ButtonsPomo;
