import { Badge, Card, Group, Paper, Stack, Text } from "@mantine/core";
import { Blog, Content, Course, Project } from "../../../lib/types/Content";
import { Section } from "../../common/layout/Section";
import {
  ResourceSection,
  ResourceRenderProps,
  EmptyResourceSection,
} from "./ResourceSection";
import { ResourceCard } from "./ResourceCard/ResourceCard";
import { useStyles } from "./styles";
import { ResourceDetailCard } from "./ResourceDetailCard";

interface ResourcesSectionContent {
  blogs: [];
  projects: [];
  courses: [];
}
export type IProps = Content<ResourcesSectionContent>;

export const ResourcesSection = (props: IProps) => {
  const { classes } = useStyles();
  const { content } = props;

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
          renderChildren={(renderProps: ResourceRenderProps<Project>) => {
            return content?.projects?.length ? (
              <>
                {content.projects.map((p: Project) => (
                  <ResourceCard key={p.id} resource={p} />
                ))}
              </>
            ) : (
              <EmptyResourceSection resourceName="projects" />
            );
          }}
          renderResourceDetail={(projectData: Project) => {
            return <ResourceCard resource={projectData} />;
          }}
        />
        <ResourceSection
          id="blogs"
          title="Blogs + Essays"
          renderChildren={(renderProps: ResourceRenderProps<Blog>) => {
            return content?.blogs?.length ? (
              <>
                {content.blogs.map((b: Blog) => (
                  <ResourceCard key={b.id} resource={b} />
                ))}
              </>
            ) : (
              <EmptyResourceSection resourceName="blog posts" />
            );
          }}
          renderResourceDetail={(blogData: Blog) => {
            return <ResourceDetailCard resource={blogData} />;
          }}
        />
        <ResourceSection
          id="courses"
          title="Courses + eBooks"
          renderChildren={(renderProps: ResourceRenderProps<Course>) => {
            return content?.courses?.length ? (
              <>
                {content.courses.map((c: Course) => (
                  <ResourceCard key={c.id} resource={c} />
                ))}
              </>
            ) : (
              <EmptyResourceSection resourceName="courses" />
            );
          }}
          renderResourceDetail={(courseData: Course) => {
            return <ResourceCard resource={courseData} />;
          }}
        />
      </Paper>
    </Section>
  );
};
