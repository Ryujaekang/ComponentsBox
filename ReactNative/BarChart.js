import React from "react";
import { StyleSheet, View, Text } from "react-native";

// data 형식
// const data = [
//   { percent: 30, colors: "#5AAAB1" },
//   { percent: 70, colors: "#589EE0" },
//   { percent: 100, colors: "#FDBF21" },
// ];

const BarChart = ({ data }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.MainContainer}>
        {data.map(({ percent, colors }, i) => {
          const barPercent = percent * 2;
          return (
            <View style={styles.BarChartContainer} key={i}>
              <View style={styles.unMakeBar}>
                <Text
                  style={[
                    styles.Number,
                    {
                      color: percent < 30 ? "#E04431" : "#000",
                    },
                  ]}
                >
                  {percent}%
                </Text>
                <View
                  style={[
                    styles.MakeBar,
                    {
                      height: percent > 100 ? 200 : barPercent,
                      backgroundColor: colors,
                    },
                  ]}
                />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: "90%",
    height: 205,
  },
  MainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },
  BarChartContainer: {
    justifyContent: "flex-end",
  },
  Number: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 2,
    marginHorizontal: -10,
  },
  unMakeBar: {
    justifyContent: "flex-end",
    backgroundColor: "#E6E6E6",
    width: 24,
    borderRadius: 8,
    height: 200,
  },
  MakeBar: {
    width: 24,
    borderRadius: 8,
  },
});

export default BarChart;
