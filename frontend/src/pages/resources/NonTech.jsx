// NonTech.jsx
import { nonTechResources } from '../../data/resourcesData';
import ResourceCard from './ResourceCard';
import ResourcePageWrapper from './ResourcePageWrapper';

export default function NonTech() {
  return <ResourcePageWrapper title="📊 Non-Tech Interview Resources" resources={nonTechResources} />;
}
