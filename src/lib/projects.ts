import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export const categories = {
  graphics: 'Graphics & Games',
  ml: 'Machine Learning',
  misc: 'Miscellaneous',
} as const;

const categoryOrder = Object.keys(categories);

export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort(
    (a, b) =>
      categoryOrder.indexOf(a.data.category) - categoryOrder.indexOf(b.data.category) ||
      a.data.order - b.data.order,
  );
}

export function coverOf(project: Project) {
  const first = project.data.media[0];
  return 'image' in first ? first.image : first.poster;
}

export const legacyIds: Record<string, string> = { engine: 'sauce3d' };
