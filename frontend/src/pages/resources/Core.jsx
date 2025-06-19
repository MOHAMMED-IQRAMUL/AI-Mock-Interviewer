// Core.jsx
import { coreResources } from '../../data/resourcesData';
import ResourceCard from './ResourceCard';
import ResourcePageWrapper from './ResourcePageWrapper';

export default function Core() {
  return <ResourcePageWrapper title="🧠 Core CS Resources" resources={coreResources} />;
}
