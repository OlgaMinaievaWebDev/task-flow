import { GoInbox } from 'react-icons/go';

interface EmptyStateProps {
  title: string;
  description?: string;
}
function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-xl bg-white p-6 text-center">
      <GoInbox className="mx-auto text-3xl text-slate-400" aria-hidden="true" />
      <p className="mt-3 font-medium text-slate-700">{title}</p>
      {description && (
        <p className="mt-2 text-sm text-slate-500">{description}</p>
      )}
    </div>
  );
}

export default EmptyState;
