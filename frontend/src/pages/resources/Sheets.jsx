import { interviewSheets } from '../../data/resourcesData';
import ResourcePageWrapper from './ResourcePageWrapper';

export default function ISheets() {
  return <ResourcePageWrapper title="🧾 Interview Sheets" resources={interviewSheets} />;
}
 