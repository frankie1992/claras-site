import React from 'react';

export type ProjectItemProps = {
  /** Small title label shown at the top-left of the block */
  title: string;
  /** Custom content for the block (text, images, components, etc.) */
  children: React.ReactNode;
  /** Optional id for anchor links */
  id?: string;
  /** Additional container classes */
  className?: string;
};

/**
 * ProjectItem – a generic block used to compose sections within a project page.
 * Displays a small label in the corner and any custom content below it.
 */
export default function ProjectItem({ title, children, id, className }: ProjectItemProps) {
  return (
    <section id={id} className={`bg-white ${className ?? ''}`}>
      <div className="mx-auto px-4 md:px-4 lg:px-8 py-6 md:py-8">
        <p className="text-sm text-slate-500">{title}</p>
        <div className="mt-3">
          {children}
        </div>
      </div>
    </section>
  );
}