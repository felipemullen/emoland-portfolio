import { ProjectCard, ProjectCardProps } from './project-card';

export interface ProjectSectionProps {
    header: string;
    projects: ProjectCardProps[];
}

export function ProjectSection({ header, projects }: ProjectSectionProps) {
    return (
        <div className="pb-12">
            <h1 className="text-3xl font-bold uppercase text-right text-neutral-400 mb-4">{header}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}