/* Hallmark · component: project card · genre: modern-minimal · theme: Shiro locked system
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass (token-dependent)
 * Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5
 */
import { MapPin } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { Badge } from "../ui/Badge";

export interface ProjectCardProps {
  project: Project;
  detailed?: boolean;
  className?: string;
}

export function ProjectCard({
  project,
  detailed = false,
  className = "",
}: ProjectCardProps) {
  return (
    <article className={`st-project-card ${detailed ? "st-project-card--detailed" : ""} ${className}`.trim()}>
      <div className="st-project-card__media">
        <Image
          src={project.images[0]}
          alt={project.imageAlts[0]}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="st-project-card__image"
        />
        <Badge className="st-project-card__category" tone="inverse">
          {project.category}
        </Badge>
      </div>
      <div className="st-project-card__body">
        {project.isPlaceholder ? (
          <p className="st-project-card__notice">Contenido de referencia temporal</p>
        ) : null}
        <h3 className="st-project-card__title">{project.title}</h3>
        <p className="st-project-card__location">
          <MapPin aria-hidden="true" size={16} strokeWidth={1.8} />
          {project.location}
        </p>
        <p className="st-project-card__client">{project.client}</p>
        {detailed ? (
          <div className="st-project-card__details">
            <div>
              <h4>El problema</h4>
              <p>{project.problem}</p>
            </div>
            <div>
              <h4>La solución</h4>
              <p>{project.solution}</p>
            </div>
            <div>
              <h4>Resultado</h4>
              <p>{project.result}</p>
            </div>
          </div>
        ) : (
          <p className="st-project-card__summary">{project.solution}</p>
        )}
        <ul className="st-project-card__technologies" aria-label={`Tecnologías de ${project.title}`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

