import { resumeResources } from '../../data/resourcesData';
import ResourcePageWrapper from './ResourcePageWrapper';

export default function Resume() {
  return <ResourcePageWrapper title="📄 Resume & Portfolio Resources" resources={resumeResources} />;
}
