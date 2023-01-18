import { Badge, Card, Group, Paper, Stack, Text } from "@mantine/core";
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
              <>
                {content.projects.map((p: Project) => (
                  <ResourceCard key={p.id} resource={p} />
                ))}
              </>
            ) : (
              <EmptyResourceSection resourceName="projects" variety="WIP" />
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
              <>
                {content.courses.map((c: Course) => (
                  <ResourceCard key={c.id} resource={c} />
                ))}
              </>
            ) : (
              <EmptyResourceSection resourceName="courses" variety="WIP" />
            );
          }}
          renderResourceDetail={(courseData: Course) => {
            return <ResourceCard resource={courseData} />;
          }}
        />
        <ResourceSection
          id="talks"
          title="Talks + Presentations"
          renderChildren={(renderProps: ResourceRenderProps<Course>) => {
            return content?.talks?.length ? (
              <>
                {content.talks.map((t: Talk) => (
                  <ResourceCard key={t.id} resource={t} />
                ))}
              </>
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
