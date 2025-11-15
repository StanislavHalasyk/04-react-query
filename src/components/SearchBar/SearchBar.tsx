"use client";

import { toast } from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  async function handleSubmit(formData: FormData) {
    const query = formData.get("query");

    if (typeof query !== "string" || query.trim() === "") {
      toast.error("Please enter your search query.");
      return;
    }

    onSubmit(query.trim());
  }

  return (
    <form action={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        name="query"
        placeholder="Search movies..."
        autoComplete="off"
        autoFocus
      />

      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};
