import { LucideIcon } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  onClick?: () => void;
}

export function ModuleCard({ title, icon: Icon, description, onClick }: ModuleCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center rounded-lg border bg-card p-4 text-card-foreground transition-colors hover:bg-accent"
    >
      <Icon className="h-8 w-8 text-primary" />
      <h3 className="mt-2 text-sm font-medium">{title}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{description}</p>
    </button>
  );
}