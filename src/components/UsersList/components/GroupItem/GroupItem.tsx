import Groups from "../../../../data/Groups.json";

interface Props {
  id: number;
}

export function GroupItem({id}: Props) {
  const groupDetails = Groups.groups.find((group) => group.id === id);

  if (!groupDetails) return null;

  return <li>{groupDetails.name}</li>;
}
