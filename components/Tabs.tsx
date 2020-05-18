import React from "react";
import styles from "./tabs.module.scss";
import { useRouter } from "next/router";
import DashboardIcon from "@material-ui/icons/DashboardRounded";
import SearchIcon from "@material-ui/icons/SearchRounded";
import PortfolioIcon from "@material-ui/icons/AccountCircleRounded";

import useTheme from "@material-ui/core/styles/useTheme";

interface IProps {
  currentPage: "dashboard" | "search" | "portfolio";
}

const defaultStyles = {
  fontSize: 20,
  height: 70,
  width: "95%",
  marginTop: 20,
  marginBottom: 20,
  padding: 20,
  cursor: "pointer"
};

const currentTab = {
  marginTop: 15,
  marginBottom: 15,
  width: 5,
  borderRadius: 5,
  height: 80
};

export default function Tabs({ currentPage }: IProps) {
  const router = useRouter();
  const theme = useTheme();
  return (
    <div className={styles.root}>
      <img src={"https://via.placeholder.com/80x80"} alt={"Logo"} />

      <div className={styles.buttons}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <DashboardIcon
            onClick={() => {
              router.push("/dashboard");
            }}
            style={{
              ...defaultStyles,
              color:
                currentPage === "dashboard"
                  ? theme.palette.primary.main
                  : "#5B5E86"
            }}
          />
          <div
            style={{
              ...currentTab,
              backgroundColor: theme.palette.primary.main,
              display: currentPage === "dashboard" ? "inline" : "none"
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SearchIcon
            onClick={() => {
              router.push("/search");
            }}
            style={{
              ...defaultStyles,
              color:
                currentPage === "search"
                  ? theme.palette.primary.main
                  : "#5B5E86"
            }}
          />
          <div
            style={{
              ...currentTab,
              backgroundColor: theme.palette.primary.main,
              display: currentPage === "search" ? "inline" : "none"
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <PortfolioIcon
            onClick={() => {
              router.push("/portfolio");
            }}
            style={{
              ...defaultStyles,
              color:
                currentPage === "portfolio"
                  ? theme.palette.primary.main
                  : "#5B5E86"
            }}
          />
          <div
            style={{
              ...currentTab,
              backgroundColor: theme.palette.primary.main,
              display: currentPage === "portfolio" ? "inline" : "none"
            }}
          />
        </div>
      </div>
    </div>
  );
}
