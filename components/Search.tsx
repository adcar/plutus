import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./search.module.scss";

export default function Search() {
  const router = useRouter();
  const [value, setValue] = useState(router.query.q);
  return (
    <form
      className={styles.form}
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <input
        className={styles.input}
        placeholder={"Search stocks and ETFs"}
        onChange={e => {
          // @ts-ignore
          setValue(e.target.value);
          router.push(`/search?q=${e.target.value}`);
        }}
        value={value}
      />
    </form>
  );
}
