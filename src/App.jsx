import { RoutesMain as Routes } from "./routes";
import { UserProvider } from "./providers/UserContext";
import { TechProvider } from "./providers/TechContext";
import Global from "./styles/global";

function App() {
  return (
    <>
      <Global />
      <UserProvider>
        <TechProvider>
          <Routes />
        </TechProvider>
      </UserProvider>
    </>
  );
}

export default App;
