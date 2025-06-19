import { webResources } from '../../data/resourcesData';
import ResourcePageWrapper from './ResourcePageWrapper';

export default function WebDev() {
  return <ResourcePageWrapper title="🌐 Web Development Resources" resources={webResources} />;
}
