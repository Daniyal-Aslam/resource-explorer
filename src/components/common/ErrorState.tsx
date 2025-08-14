import { Button } from '@/components/ui/button';

export default function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="text-center py-6">
      <p className="mb-4">Something went wrong. Please try again.</p>
      <Button onClick={onRetry}>Retry</Button>
    </div>
  );
}
