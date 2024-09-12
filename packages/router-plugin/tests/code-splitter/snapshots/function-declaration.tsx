const $$splitComponentImporter = () => import('function-declaration.tsx?tsr-split');
import { lazyRouteComponent } from '@tanstack/react-router';
const $$splitLoaderImporter = () => import('function-declaration.tsx?tsr-split');
import { lazyFn } from '@tanstack/react-router';
import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/posts')({
  loader: lazyFn($$splitLoaderImporter, 'loader'),
  component: lazyRouteComponent($$splitComponentImporter, 'component')
});
export function TSR_DummyComponent() {
  return null;
}