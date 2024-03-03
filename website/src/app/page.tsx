import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <main
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "4",
        width: "full",
        height: "svh",
      })}
    >
      <div
        className={css({
          width: "24",
          height: "24",
          backgroundColor: "royalblue",
          rounded: "md",
          slideInX: "-10",
        })}
      >
        dsa
      </div>
      {/* <div
        className={css({
          width: "24",
          height: "24",
          backgroundColor: "royalblue",
          rounded: "md",
          slideInX: "10",
          transition: "ease-in",
        })}
      >
        dsa
      </div> */}
    </main>
  );
}
