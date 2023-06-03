import {mount} from "@shopify/react-testing";
import {UsersList} from "../UsersList";
import type {User} from "../UsersList";

const mockUser: User[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "test1@sample.com",
    groups: [1, 2],
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    email: "test2@sample.com",
    groups: [1, 3],
  },
];

describe("UsersList", () => {
  it("renders a table", () => {
    const wrapper = mount(<UsersList users={mockUser} />);
    expect(wrapper.find("table")).not.toBeNull();
  });

  it("renders rows for each user", () => {
    const wrapper = mount(<UsersList users={mockUser} />);

    const tbody = wrapper.find("tbody")!;
    expect(tbody).not.toBeNull();

    const userRows = tbody.findAll("tr");
    expect(userRows.length).toBe(2);
  });
});
