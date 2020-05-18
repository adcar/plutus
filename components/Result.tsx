import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

import styles from "./result.module.scss";
import { useRouter } from "next/router";

interface IProps {
  quoteType: string;
  symbol: string;
  longname: string;
}

export default function Result({ quoteType, symbol, longname }: IProps) {
  const router = useRouter();
  function redirect() {
    router.push(`/details/${symbol}`);
  }
  return (
    <div
      className={styles.root}
      tabIndex={0}
      onClick={redirect}
      onKeyPress={e => {
        if (e.key === "Enter") {
          redirect();
        }
      }}
    >
      <Typography variant="h5" color={"primary"}>
        {symbol}
      </Typography>

      <Typography variant="h6">{longname}</Typography>
    </div>
  );
}
