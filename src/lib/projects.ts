import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type ProjectData = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  wide?: boolean;
  gallery: string[];
};

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getAllProjects(): ProjectData[] {
  // Check if directory exists, if not return empty array
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the project metadata section
      const matterResult = matter(fileContents);
      
      const { title, category, image, description, wide, gallery } = matterResult.data;

      return {
        id,
        title,
        category,
        image,
        description: description || '',
        wide: wide === true,
        gallery: gallery || [image],
      } as ProjectData;
    });

  // Sort projects if needed (you could add a 'date' or 'order' field to frontmatter)
  return projects;
}
