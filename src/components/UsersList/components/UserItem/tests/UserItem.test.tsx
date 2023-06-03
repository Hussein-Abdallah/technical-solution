import {mount} from "@shopify/react-testing";
import type {User} from "../../../UsersList";
import {UserItem} from "../UserItem";
import {GroupItem} from "../../GroupItem";

const mockProps: Omit<User, "id"> = {
  firstName: "John",
  lastName: "Doe",
  email: "test1@sample.com",
  groups: [1, 2],
};

describe("UserItem", () => {
  it("renders a table row", () => {
    const wrapper = mount(<UserItem {...mockProps} />);
    expect(wrapper).toContainReactComponent("tr");
  });

  it("renders the user name", () => {
    const wrapper = mount(<UserItem {...mockProps} />);
    expect(wrapper).toContainReactText(
      `${mockProps.firstName} ${mockProps.lastName}`,
    );
  });

  it("renders the user email", () => {
    const wrapper = mount(<UserItem {...mockProps} />);
    expect(wrapper).toContainReactText(`${mockProps.email}`);
  });

  it("renders the user groups", () => {
    const wrapper = mount(<UserItem {...mockProps} />);
    expect(wrapper).toContainReactComponentTimes(
      GroupItem,
      mockProps.groups.length,
    );
  });
});
