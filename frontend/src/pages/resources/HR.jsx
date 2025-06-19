// HR.jsx
import { hrResources } from '../../data/resourcesData';
import ResourceCard from './ResourceCard';
import ResourcePageWrapper from './ResourcePageWrapper';

export default function HR() {
  return <ResourcePageWrapper title="🗣️ HR Interview Resources" resources={hrResources} />;
}

