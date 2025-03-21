//Importa o componente Status bar do Expo, que permite customizar a barra de status do dispositivo
//Importa os módulos necessários para navegação no aplicativo

// Importa os modulos necessarios para navegação no aplicativo
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importa as telas que serão utilizadas na navegação
import HomeScreen from './screens/HomeScreen';
// import DetailScreen from './screens/DetailScreen';

//Define os tipos das rotas para garantir tipagem segura no typescript
type RootStackParamList = {
  Home: undefined; // A tela home não recebe nenhum parametros
  Details: undefined; // A tela de detalhes não recebe nenhum parametro
};

//Cria o stack navigator, que gerencia a navegação entre as telas
const Stack = createStackNavigator<RootStackParamList>();

//Componentes principais do aplicativo
const App: React.FC = () => {
  return (
    // O navigatorContainer é o elemento principal que envolve toda a navegação do aplicativo
    <NavigationContainer>
      {/* Define as rotas do aplicativo */}
      <Stack.Navigator initialRouteName='Home'>
        {/* Define a rota inicial do aplicativo */}
        <Stack.Screen name="Home"
          component={HomeScreen}
          options={{ title: 'HomePage' }}
        />
        {/* Define a rota para a tela de detalhes */}
        {/* <Stack.Screen name="Details"
          component={DetailsScreen}
          options={{ title: 'Details Page' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//  Exporta o componente App
export default App;