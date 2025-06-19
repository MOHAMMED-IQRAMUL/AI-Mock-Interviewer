import { projectResources } from '../../data/resourcesData';
import ResourcePageWrapper from './ResourcePageWrapper';

export default function Projects() {
  return <ResourcePageWrapper title="💼 Project Resources" resources={projectResources} />;
}
