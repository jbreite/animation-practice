import { useReducer } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { MotiView } from 'moti';

function Shape({ visible }: { visible: boolean }) {
  return (
    <MotiView
      from={{
        opacity: 1,
        scale: 2,
      }}
      animate={{
        opacity: visible ? 1 : 0.1,
        scale: visible ? 1 : 0.5,
      }}
      transition={{
        type: 'timing',
        duration: 500,
      }}
      style={styles.shape}
    />
  );
}

export default function HelloWorld() {
  const [visible, toggle] = useReducer((s) => !s, false);

  return (
    <Pressable onPress={toggle} style={styles.container}>
      <Shape visible={visible} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#9c1aff',
  },
});