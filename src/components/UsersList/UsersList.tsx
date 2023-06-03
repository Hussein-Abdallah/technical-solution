import classNames from "classnames";
import {UserItem} from "./components";

import styles from "./UsersList.module.css";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  groups: number[];
}

interface Props {
  users: User[];
}

export function UsersList({users}: Props) {
  return (
    <table className={styles.Table} role="table" aria-label="Users list">
      <thead>
        <tr className={styles.TableHeader}>
          <th colSpan={3}>USERS LIST</th>
        </tr>
        <tr className={classNames(styles.TableHeader, styles.ColumnRow)}>
          <th>Name</th>
          <th>Email</th>
          <th>Groups</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserItem key={user.id} {...user} />
        ))}
      </tbody>
    </table>
  );
}
