import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

import styles from "./result.module.scss";

interface IProps {
  quoteType: string;
  symbol: string;
  longname: string;
}

export default function Result({ quoteType, symbol, longname }: IProps) {
  return (
    <Link href={`/details/${symbol}`}>
      <div className={styles.root}>
        <Typography variant="h5" color={"primary"}>
          {symbol}
        </Typography>

        <Typography variant="h6">{longname}</Typography>
      </div>
    </Link>
  );
}
