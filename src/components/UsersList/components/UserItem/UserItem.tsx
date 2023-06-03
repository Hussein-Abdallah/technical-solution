import {GroupItem} from "../GroupItem";

import styles from "./UserItem.module.css";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  groups: number[];
}

export function UserItem({firstName, lastName, email, groups}: Props) {
  return (
    <tr>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{email}</td>
      <td>
        {groups.length > 0 && (
          <ul className={styles.GroupList}>
            {groups.map((group) => (
              <GroupItem key={group} id={group} />
            ))}
          </ul>
        )}
      </td>
    </tr>
  );
}
