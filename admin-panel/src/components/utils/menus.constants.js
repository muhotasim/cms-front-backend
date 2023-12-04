import { Link, Navigate } from "react-router-dom";
import {
  ChevronsLeft,
  ChevronsRight,
  Home,
  Users,
  Table,
  Upload,
  File,
  Book,
  Grid,
  Tag,
  Settings
} from "react-feather";
const menuList = [
  {
    key: "/",
    icon: <Home size={18} />,
    label: <Link to={"/"}>Dashboard</Link>,
  },
  {
    key: "2",
    icon: <Users size={18} />,
    label: 'Users',
    children: [
      {
        key: "/users",
        label: <Link to={"/users"}>Users</Link>,
      },
      {
        key: "/users/create",
        label: <Link to={"/users/create"}>Create User</Link>,
      },
    ],
  },
  {
    key: "/files",
    icon: <Upload size={18} />,
    label: <Link to={"/files"}>Files</Link>,
  },
  
  {
    key: "6",
    icon: <Grid size={18} />,
    label: 'Categories',
    children: [
      {
        key: "/categories",
        label: <Link to={"/categories"}>Categories</Link>,
      },
      {
        key: "/categories/create",
        label: <Link to={"/categories/create"}>Create Category</Link>,
      },
    ],
  },
  {
    key: "7",
    icon: <Tag size={18} />,
    label: 'Tags',
    children: [
      {
        key: "/tags",
        label: <Link to={"/tags"}>Tags</Link>,
      },
      {
        key: "/tags/create",
        label: <Link to={"/tags/create"}>Create Tag</Link>,
      },
    ],
  },
  {
    key: "8",
    icon: <Settings size={18} />,
    label: 'Settings',
    children: [
      {
        key: "/menu-builder",
        label: <Link to={"/menu-builder"}>Top Menu</Link>,
      },
      {
        key: "/footer-builder",
        label: <Link to={"/footer-builder"}>Footer Menu</Link>,
      },
      {
        key: "/logs",
        label: <Link to={"/logs"}>Logs</Link>,
      },
      {
        key: "/settings",
        label: <Link to={"/settings"}>Others</Link>,
      },
    ],
  },
];
export default menuList;
