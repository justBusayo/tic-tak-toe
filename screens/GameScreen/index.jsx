import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import backgroundImage from "../../assets/bg-app.png";
import AnimatedBomb from "../../assets/animated_bumb.png";
import AnimatedNinja from "../../assets/animated_ninja.png";
import Square from "../../components/Square";

const GameScreen = ({ route, navigation }) => {
  const { playerChar } = route.params;
  const computerChar = playerChar === "X" ? "O" : "X";
  const playerImage = playerChar === "X" ? AnimatedNinja : AnimatedBomb;
  const computerImage = computerChar === "X" ? AnimatedNinja : AnimatedBomb;

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(playerChar === "X");
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (!isPlayerTurn && !winner) {
      const timeout = setTimeout(() => makeComputerMove(), 500);
      return () => clearTimeout(timeout);
    }
  }, [isPlayerTurn, winner]);

  useEffect(() => {
    if (winner) {
      setTimeout(() => {
        navigation.navigate("ResultScreen", { winner, playerChar });
      }, 1000);
    }
  }, [winner, navigation, playerChar]);

  const handlePress = (index) => {
    if (board[index] || winner || !isPlayerTurn) return;

    const newBoard = board.slice();
    newBoard[index] = playerChar;
    setBoard(newBoard);
    setIsPlayerTurn(false);
    checkWinner(newBoard);
  };

  const makeComputerMove = () => {
    const availableMoves = board
      .map((val, idx) => (val === null ? idx : null))
      .filter((val) => val !== null);

    const move =
      availableMoves[Math.floor(Math.random() * availableMoves.length)];
    const newBoard = board.slice();
    newBoard[move] = computerChar;
    setBoard(newBoard);
    setIsPlayerTurn(true);
    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    if (!board.includes(null)) {
      setWinner("Draw");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(playerChar === "X");
    setWinner(null);
  };

  const getBorderStyle = (index) => {
    const styles = {};
    if (index < 6) styles.borderBottomWidth = 4;
    if (index % 3 !== 2) styles.borderRightWidth = 4;
    return styles;
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View
          style={[
            tw`bg-white w-[300px] h-[64px] border border-[#08A8FF] flex flex-row gap-3 items-center justify-center mb-5`,
            { borderRadius: 10 },
          ]}
        >
          <Text
            style={tw`text-[35px] text-[#08A8FF] leading-[42.46px] font-bold`}
          >
            IT’S{" "}
          </Text>
          <Text style={tw`text-[35px] leading-[42.46px] font-bold`}>{`'${
            isPlayerTurn ? playerChar : computerChar
          } TURN`}</Text>
        </View>
        <View>
          {[0, 1, 2].map((row) => (
            <View key={row} style={styles.row}>
              {[0, 1, 2].map((col) => {
                const index = row * 3 + col;
                return (
                  <Square
                    key={index}
                    value={board[index]}
                    playerImage={playerImage}
                    computerImage={computerImage}
                    onPress={() => handlePress(index)}
                    style={getBorderStyle(index)}
                  />
                );
              })}
            </View>
          ))}
        </View>
        <Button title="Restart Game" onPress={resetGame} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  board: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
  },
  status: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default GameScreen;
