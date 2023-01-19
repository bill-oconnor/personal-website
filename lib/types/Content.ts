export interface Content<T> {
  content: T;
}

export type Blog = {
  title: string;
  id: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
  type: "blog";
};

export type Course = {
  title: string;
  id: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
  type: "course";
};

export type Project = {
  title: string;
  id: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
  type: "project";
};

export type Talk = {
  title: string;
  id: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
  type: "talk";
};

export type Resource = Blog | Course | Project;
