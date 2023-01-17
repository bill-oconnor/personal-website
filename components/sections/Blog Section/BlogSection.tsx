import {
  Card,
  Grid,
  Spoiler,
  Stack,
  Title,
  Text,
  Badge,
  Button,
  UnstyledButton,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Post } from "../../../lib/types";
import { Tag } from "../../../lib/types/Tag";

interface IProps {
  posts: Post[];
}

export const BlogSection = (props: IProps) => {
  const [filteredPosts, setFilteredPosts] = useState(props.posts);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const allTags: Tag[] = Array.from(
    props.posts.reduce((tags, post) => {
      post.tags?.forEach((t: Tag) => tags.add(t));
      return tags;
    }, new Set<Tag>())
  );

  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredPosts(props.posts);
    } else {
      setFilteredPosts(
        props.posts.filter((post) => {
          // if any of the post's tags are in selectedTags
          return post.tags.some((t: Tag) => selectedTags.includes(t.id));
        })
      );
    }
  }, [selectedTags]);

  const selectTag = (tag: string) => {
    const tagAlreadySelected = selectedTags.includes(tag);
    if (tagAlreadySelected) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags(selectedTags.concat(tag));
    }
  };

  return (
    <Stack>
      <Spoiler maxHeight={800} showLabel="Show more" hideLabel="Hide">
        <Grid>
          {filteredPosts.map((post: Post) => {
            return (
              <a key={post.id} href={post.url}>
                <Card>
                  <Title order={4}>{post.title}</Title>
                  <Text>{post.description}</Text>
                </Card>
              </a>
            );
          })}
        </Grid>
      </Spoiler>
      <Stack>
        {allTags.map((tag: Tag) => (
          <UnstyledButton key={tag.id} onClick={() => selectTag(tag.id)}>
            <Badge
              variant={selectedTags.includes(tag.id) ? "filled" : "outline"}
            >
              {tag.name}
            </Badge>
          </UnstyledButton>
        ))}
      </Stack>
    </Stack>
  );
};
