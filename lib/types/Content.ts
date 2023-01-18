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
};

export type Course = {
  title: string;
  id: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
};

export type Project = {
  title: string;
  id: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
};

export type Talk = {
  title: string;
  id: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
};

export type Resource = Blog | Course | Project;
