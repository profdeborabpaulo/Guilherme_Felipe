//Importando os componentes do react-native
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const[tarefa, setTarefa]=useState('');
  const[tarefas, setTarefas]=useState('');
  'Estudar React-Native',
  return(
    <view>
      <text> Gerenciador de Tarefas</text>

      <TextInput
      placeholder='Digite uma tarefa: '
      />

    </view>
  );

}
// Criando o Estilo para o index.tsx
const styles=StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
  }
})