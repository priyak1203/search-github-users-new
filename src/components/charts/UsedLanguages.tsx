import { Repository } from '@/types';
import { calculatePopularLanguages } from '@/utils';

function UsedLanguages({ respositories }: { respositories: Repository[] }) {
  const popularLanguages = calculatePopularLanguages(respositories);
  console.log(popularLanguages);

  return <div>UsedLanguages</div>;
}

export default UsedLanguages;
