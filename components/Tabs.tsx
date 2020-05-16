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
  width: "100%",
  marginTop: 20,
  marginBottom: 20,
  padding: 20,
  borderRight: "red 5px solid",
  cursor: "pointer"
};

export default function Tabs({ currentPage }: IProps) {
  const router = useRouter();
  const theme = useTheme();
  return (
    <div className={styles.root}>
      <img
        src={
          "https://lh3.googleusercontent.com/proxy/mdrER7gpHRg7DAj8ySS-yvlnJslI-EF5Vhoz6WgxJfoMqvTO_pJf_BAvcxp5TgSvIUH6SOXp_Tze4zllwC0Oui9NLEndIAn5Ty67cndDfs1G-dme7zpeNcTITmqIsw"
        }
        alt={"Logo"}
      />

      <div className={styles.buttons}>
        <DashboardIcon
          onClick={() => {
            router.push("/dashboard");
          }}
          style={{
            ...defaultStyles,
            color:
              currentPage === "dashboard"
                ? theme.palette.primary.main
                : "#5B5E86",
            borderRight:
              currentPage === "dashboard"
                ? `${theme.palette.primary.main} 5px solid`
                : "none"
          }}
        />
        <SearchIcon
          onClick={() => {
            router.push("/search");
          }}
          style={{
            ...defaultStyles,
            color:
              currentPage === "search" ? theme.palette.primary.main : "#5B5E86",
            borderRight:
              currentPage === "search"
                ? `${theme.palette.primary.main} 5px solid`
                : "none"
          }}
        />
        <PortfolioIcon
          onClick={() => {
            router.push("/portfolio");
          }}
          style={{
            ...defaultStyles,
            color:
              currentPage === "portfolio"
                ? theme.palette.primary.main
                : "#5B5E86",
            borderRight:
              currentPage === "portfolio"
                ? `${theme.palette.primary.main} 5px solid`
                : "none"
          }}
        />
      </div>
    </div>
  );
}
