import {mount} from "@shopify/react-testing";
import {GroupItem} from "../GroupItem";
import Groups from "../../../../../data/Groups.json";

const mockGroup = Groups.groups[0];

describe("GroupItem", () => {
  it("renders a list item", () => {
    const wrapper = mount(<GroupItem id={mockGroup.id} />);
    expect(wrapper).toContainReactComponent("li");
  });

  it("renders the group name", () => {
    const wrapper = mount(<GroupItem id={mockGroup.id} />);
    expect(wrapper).toContainReactText(mockGroup.name);
  });

  it("renders null if group id is not found", () => {
    const wrapper = mount(<GroupItem id={999} />);
    expect(wrapper).not.toContainReactComponent("li");
  });
});
