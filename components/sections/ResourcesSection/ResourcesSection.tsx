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
        <ResourceSection<Project>
          id="projects"
          title="Projects"
          renderChildren={(renderProps: ResourceRenderProps<Project>) => {
            return projects?.length ? (
              <ResourceGrid>
                {(projects as Project[]).map((p: Project) => (
                  <ResourceCard
                    selected={renderProps.selectedResourceId === p.id}
                    onSelect={(p: Resource) =>
                      renderProps.setSelectedResource(p as Project)
                    }
                    key={p.id}
                    resource={p}
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
        <ResourceSection<Blog>
          id="blogs"
          title="Blogs + Essays"
          renderChildren={(renderProps: ResourceRenderProps<Blog>) => {
            return content?.blogs?.length ? (
              <ResourceGrid>
                {content.blogs.map((b: Blog) => (
                  <ResourceCard
                    selected={renderProps.selectedResourceId === b.id}
                    onSelect={(b: Resource) =>
                      renderProps.setSelectedResource(b as Blog)
                    }
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
            return <ResourceDetailCard resource={courseData} />;
          }}
        /> */}
        <ResourceSection<Talk>
          id="talks"
          title="Talks + Presentations"
          renderChildren={(renderProps: ResourceRenderProps<Talk>) => {
            return content?.talks?.length ? (
              <ResourceGrid>
                {content?.talks.map((t: Talk) => (
                  <ResourceCard
                    selected={renderProps.selectedResourceId === t.id}
                    onSelect={(t: Resource) =>
                      renderProps.setSelectedResource(t as Talk)
                    }
                    key={t.id}
                    resource={t}
                  />
                ))}
              </ResourceGrid>
            ) : (
              <EmptyResourceSection resourceName="talks" variety="n/a" />
            );
          }}
          renderResourceDetail={(courseData: Talk) => {
            return <ResourceDetailCard resource={courseData} />;
          }}
        />
      </Paper>
    </Section>
  );
};
