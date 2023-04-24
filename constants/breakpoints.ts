const breakpoints = {
  LARGE: 860,
  MEDIUM: 600,
  SMALL: 500,
  EXTRA_SMALL: 370,
};

export function getBreakpointForSize(screenWidth: number) {
  if (screenWidth >= breakpoints.LARGE) {
    return breakpoints.LARGE;
  } else if (screenWidth >= breakpoints.MEDIUM) {
    return breakpoints.MEDIUM;
  } else if (screenWidth >= breakpoints.SMALL) {
    return breakpoints.SMALL;
  } else {
    return breakpoints.EXTRA_SMALL;
  }
}

export default breakpoints;
