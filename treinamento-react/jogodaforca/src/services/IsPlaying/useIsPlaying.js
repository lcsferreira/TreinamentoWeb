import { useContext } from "react";
import isPlayingContext from "./IsPlayingContext";

const useIsPlaying = () => useContext(isPlayingContext);
export default useIsPlaying;