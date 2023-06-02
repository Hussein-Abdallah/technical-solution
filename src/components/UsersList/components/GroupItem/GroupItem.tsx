import Groups from "../../../../data/Groups.json";

interface Props {
  id: number;
}

export function GroupItem({id}: Props) {
  const groupDetails = Groups.groups.find((group) => group.id === id);
  const groupName = groupDetails ? groupDetails.name : null;
  return <li>{groupName}</li>;
}
