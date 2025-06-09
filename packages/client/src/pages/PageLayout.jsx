import { Outlet } from "react-router-dom";
import SideNav from "../Commons/SideNav";
import styles from "./PageLayout.module.css";

export function PageLayout() {
  const width =  document.body
  return (
    <div className={styles.layout}>
      <SideNav />
      <div className={styles["content-wrapper"]}>
        <Outlet />
      </div>
    </div>
  );
}
