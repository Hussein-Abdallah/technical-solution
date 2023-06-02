import classNames from "classnames";
import {GroupItem} from "./components";

import styles from "./UsersList.module.css";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  groups: number[];
};

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
          <tr key={user.id}>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{user.email}</td>
            <td>
              <ul className={styles.GroupList}>
                {user.groups.map((group) => (
                  <GroupItem key={group} id={group} />
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
