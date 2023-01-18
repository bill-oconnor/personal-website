import {
  Badge,
  Card,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import {
  Blog,
  Content,
  Course,
  Project,
  Talk,
} from "../../../lib/types/Content";
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
  talks: [];
}
export type IProps = Content<ResourcesSectionContent>;

export const ResourcesSection = (props: IProps) => {
  const { classes } = useStyles();
  const { content } = props;

  console.log("resource content", content);

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
              <SimpleGrid cols={3}>
                {content.projects.map((p: Project) => (
                  <ResourceCard key={p.id} resource={p} />
                ))}
              </SimpleGrid>
            ) : (
              <EmptyResourceSection resourceName="projects" variety="WIP" />
            );
          }}
          renderResourceDetail={(projectData: Project) => {
            return <ResourceDetailCard resource={projectData} />;
          }}
        />
        <ResourceSection
          id="blogs"
          title="Blogs + Essays"
          renderChildren={(renderProps: ResourceRenderProps<Blog>) => {
            return content?.blogs?.length ? (
              <SimpleGrid cols={3}>
                {content.blogs.map((b: Blog) => (
                  <ResourceCard key={b.id} resource={b} />
                ))}
              </SimpleGrid>
            ) : (
              <EmptyResourceSection resourceName="blog posts" variety="WIP" />
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
              <SimpleGrid cols={3}>
                {content.courses.map((c: Course) => (
                  <ResourceCard key={c.id} resource={c} />
                ))}
              </SimpleGrid>
            ) : (
              <EmptyResourceSection resourceName="courses" variety="WIP" />
            );
          }}
          renderResourceDetail={(courseData: Course) => {
            return <ResourceDetailCard resource={courseData} />;
          }}
        />
        <ResourceSection
          id="talks"
          title="Talks + Presentations"
          renderChildren={(renderProps: ResourceRenderProps<Course>) => {
            return content?.talks?.length ? (
              <SimpleGrid cols={3}>
                {content.talks.map((t: Talk) => (
                  <ResourceCard key={t.id} resource={t} />
                ))}
              </SimpleGrid>
            ) : (
              <EmptyResourceSection resourceName="talks" variety="n/a" />
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
