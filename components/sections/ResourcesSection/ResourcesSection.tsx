import { Badge, Card, Group, Paper, Stack, Text } from "@mantine/core";
import { Blog, Content, Course, Project } from "../../../lib/types/Content";
import { Section } from "../../common/layout/Section";
import { ResourceSection, ResourceRenderProps } from "./ResourceSection";
import Image from "next/image";
import { ResourceCard } from "./ResourceCard/ResourceCard";
import { useStyles } from "./styles";

interface ResourcesSectionContent {
  blogs: [];
  projects: [];
  resources: [];
}
export type IProps = Content<ResourcesSectionContent>;

export const ResourcesSection = (_props: IProps) => {
  const { classes } = useStyles();

  return (
    <Section
      className={classes.resourcesSection}
      id="resources"
      title="Resources"
    >
      <Paper>
        <ResourceSection
          id="projects"
          title="Projects"
          renderChildren={(renderProps: ResourceRenderProps<Project>) => <></>}
          renderResourceDetail={(projectData: Project) => {
            return <ResourceCard resource={projectData} />;
          }}
        />
        <ResourceSection
          id="blogs"
          title="Blogs + Essays"
          renderChildren={(renderProps: ResourceRenderProps<Blog>) => <></>}
          renderResourceDetail={(blogData: Blog) => {
            return <ResourceCard resource={blogData} />;
          }}
        />
        <ResourceSection
          id="courses"
          title="Courses + eBooks"
          renderChildren={(renderProps: ResourceRenderProps<Course>) => <></>}
          renderResourceDetail={(courseData: Course) => {
            return <ResourceCard resource={courseData} />;
          }}
        />
      </Paper>
    </Section>
  );
};
