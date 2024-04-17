import type { MenuProps } from "antd";
import { Menu } from "antd";
import "./filterMenu.css";
export default function FilterMenu() {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["sub1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
        className="filterMenu"
      />
    </>
  );
}

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuProps["items"] = [
  getItem("DANH MỤC", "sub1", "", [
    getItem("LỌ HOA", "sub1.1"),
    getItem("BỘ ẤM TRÀ", "sub1.2"),
    getItem("ĐỒ NHÀ BẾP", "sub1.3"),
    getItem("ĐỒ TRANG TRÍ", "sub1.4"),
    getItem("ĐỒ THỜ", "sub1.5"),
    getItem("ĐỒ THỦY TINH", "sub1.6"),
  ]),
  getItem("ĐÁNH GIÁ", "sub2", "", [
    getItem("Option 1", "sub2.1"),
    getItem("Option 2", "sub2.2"),
  ]),
  getItem("GIÁ", "sub3", "", [
    getItem("Dưới 500.000đ", "sub3.1"),
    getItem("500.000đ - 1.000.000đ", "sub3.2"),
    getItem("1.000.000đ - 1.500.000đ", "sub3.3"),
    getItem("1.500.000đ - 2.000.000đ", "sub3.4"),
    getItem("Trên 2.000.000đ", "sub3.5"),
  ]),
  getItem("KÍCH THƯỚC", "sub4", "", [
    getItem("Option 1", "sub4.1"),
    getItem("Option 2", "sub4.2"),
  ]),
  getItem("MÀU SẮC", "sub5", "", [
    getItem("Option 1", "sub5.1"),
    getItem("Option 2", "sub5.2"),
  ]),
];
// function getMenuItems(items) {}
