import { useViewportSize } from "@mantine/hooks";
import { getBreakpointForSize } from "../../constants/breakpoints";

export function useBreakpoint() {
  const { width: screenWidth } = useViewportSize();
  return getBreakpointForSize(screenWidth);
}
