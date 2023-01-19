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
import { ResourceGrid } from "./ResourceSection/ResourceGrid";

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
              <ResourceGrid>
                {content.projects.map((c: Course) => (
                  <ResourceCard
                    onSelect={renderProps.setSelectedResource}
                    key={c.id}
                    resource={c}
                  />
                ))}
              </ResourceGrid>
            ) : (
              <EmptyResourceSection resourceName="projects" variety="WIP" />
            );
          }}
          renderResourceDetail={(projectData: Project) => {
            console.log("renderResourceDetail", projectData);
            return <ResourceDetailCard resource={projectData} />;
          }}
        />
        <ResourceSection
          id="blogs"
          title="Blogs + Essays"
          renderChildren={(renderProps: ResourceRenderProps<Blog>) => {
            return content?.blogs?.length ? (
              <ResourceGrid>
                {content.blogs.map((b: Blog) => (
                  <ResourceCard
                    onSelect={renderProps.setSelectedResource}
                    key={b.id}
                    resource={b}
                  />
                ))}
              </ResourceGrid>
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
              <ResourceGrid>
                {content.courses.map((c: Course) => (
                  <ResourceCard
                    onSelect={renderProps.setSelectedResource}
                    key={c.id}
                    resource={c}
                  />
                ))}
              </ResourceGrid>
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
              <ResourceGrid>
                {content?.talks.map((t: Talk) => (
                  <ResourceCard
                    onSelect={renderProps.setSelectedResource}
                    key={t.id}
                    resource={t}
                  />
                ))}
              </ResourceGrid>
            ) : (
              <EmptyResourceSection resourceName="talks" variety="n/a" />
            );
          }}
          renderResourceDetail={(courseData: Course) => {
            return <ResourceDetailCard resource={courseData} />;
          }}
        />
      </Paper>
    </Section>
  );
};
