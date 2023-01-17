import { Content } from "../../../lib/types/Content";
import { Section } from "../../common/layout/Section";

interface ResourcesSectionContent {}
export type IProps = Content<ResourcesSectionContent>;

export const ResourcesSection = (_props: IProps) => {
  return <Section></Section>;
};
