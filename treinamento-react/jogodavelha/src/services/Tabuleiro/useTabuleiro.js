import { useContext } from "react";
import TabuleiroContext from "./TabuleiroContext";

const useTabuleiro = () => useContext(TabuleiroContext);
export default useTabuleiro;