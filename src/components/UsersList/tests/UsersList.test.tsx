import {mount} from "@shopify/react-testing";
import {UsersList} from "../UsersList";
import type {User} from "../UsersList";
import {UserItem} from "../components";

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

  it("renders UserItem for each user", () => {
    const wrapper = mount(<UsersList users={mockUser} />);

    expect(wrapper).toContainReactComponentTimes(UserItem, mockUser.length);
  });
});
