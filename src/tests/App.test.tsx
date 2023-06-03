import {mount} from "@shopify/react-testing";
import App from "../App";
import {UsersList} from "../components";
import Users from "../data/Users.json";

describe("App", () => {
  it("renders header text", async () => {
    const wrapper = mount(<App />);
    const header = wrapper.find("h1")!;
    expect(header.text()).toBe("Technical Solution");
  });

  it("renders UsersList component", async () => {
    const wrapper = mount(<App />);
    expect(wrapper).toContainReactComponent(UsersList, {users: Users.users});
  });
});
