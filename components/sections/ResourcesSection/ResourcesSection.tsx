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
  Resource,
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
import { projects } from "../../../content/projects";
import { useBreakpoint } from "../../../lib/hooks/useBreakpoint";
import breakpoints from "../../../constants/breakpoints";

interface ResourcesSectionContent {
  blogs: [];
  projects: [];
  courses: [];
  talks: [];
}
export type IProps = Content<ResourcesSectionContent>;

export const ResourcesSection = (props: IProps) => {
  const breakpoint = useBreakpoint();
  const { classes } = useStyles();
  const { content } = props;

  return (
    <Section
      className={classes.resourcesSection}
      id="resources"
      title="Resources"
    >
      <ResourceSection<Project>
        id="projects"
        title="Projects"
        renderChildren={(renderProps: ResourceRenderProps<Project>) => {
          return projects?.length ? (
            <ResourceGrid>
              {(projects as Project[]).map((p: Project) =>
                breakpoint < breakpoints.MEDIUM &&
                renderProps.selectedResourceId === p.id ? (
                  <ResourceDetailCard resource={p} />
                ) : (
                  <ResourceCard
                    selected={renderProps.selectedResourceId === p.id}
                    onSelect={(p: Resource) =>
                      renderProps.setSelectedResource(p as Project)
                    }
                    key={p.id}
                    resource={p}
                  />
                )
              )}
            </ResourceGrid>
          ) : (
            <EmptyResourceSection resourceName="projects" variety="WIP" />
          );
        }}
        renderResourceDetail={(projectData: Project) => {
          return breakpoint >= breakpoints.MEDIUM ? (
            <ResourceDetailCard resource={projectData} />
          ) : null;
        }}
      />
      <ResourceSection<Blog>
        id="blogs"
        title="Blogs + Essays"
        renderChildren={(renderProps: ResourceRenderProps<Blog>) => {
          return content?.blogs?.length ? (
            <ResourceGrid>
              {content.blogs.map((b: Blog) =>
                breakpoint < breakpoints.MEDIUM &&
                renderProps.selectedResourceId === b.id ? (
                  <ResourceDetailCard resource={b} />
                ) : (
                  <ResourceCard
                    selected={renderProps.selectedResourceId === b.id}
                    onSelect={(b: Resource) =>
                      renderProps.setSelectedResource(b as Blog)
                    }
                    key={b.id}
                    resource={b}
                  />
                )
              )}
            </ResourceGrid>
          ) : (
            <EmptyResourceSection resourceName="blog posts" variety="WIP" />
          );
        }}
        renderResourceDetail={(blogData: Blog) => {
          return breakpoint >= breakpoints.MEDIUM ? (
            <ResourceDetailCard resource={blogData} />
          ) : null;
        }}
      />
      {/* <ResourceSection
          id="courses"
          title="Courses + eBooks"
          renderChildren={(renderProps: ResourceRenderProps<Course>) => {
            return content?.courses?.length ? (
              <ResourceGrid>
                {content.courses.map((c: Course) => (
                  <ResourceCard
                    selected={renderProps.selectedResourceId === c.id}
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
            return breakpoint >= breakpoints.MEDIUM ? <ResourceDetailCard resource={courseData} /> : null;
          }}
        /> */}
      <ResourceSection<Talk>
        id="talks"
        title="Talks + Presentations"
        renderChildren={(renderProps: ResourceRenderProps<Talk>) => {
          return content?.talks?.length ? (
            <ResourceGrid>
              {content?.talks.map((t: Talk) =>
                breakpoint < breakpoints.MEDIUM &&
                renderProps.selectedResourceId === t.id ? (
                  <ResourceDetailCard resource={t} />
                ) : (
                  <ResourceCard
                    selected={renderProps.selectedResourceId === t.id}
                    onSelect={(t: Resource) =>
                      renderProps.setSelectedResource(t as Talk)
                    }
                    key={t.id}
                    resource={t}
                  />
                )
              )}
            </ResourceGrid>
          ) : (
            <EmptyResourceSection resourceName="talks" variety="n/a" />
          );
        }}
        renderResourceDetail={(courseData: Talk) => {
          return breakpoint >= breakpoints.MEDIUM ? (
            <ResourceDetailCard resource={courseData} />
          ) : null;
        }}
      />
    </Section>
  );
};
