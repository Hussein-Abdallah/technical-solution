import {UsersList} from "./components";

import Users from "./data/Users.json";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <header className={styles.Header}>
        <h1>Technical Solution</h1>
      </header>
      <UsersList users={Users.users} />
    </div>
  );
}

export default App;
