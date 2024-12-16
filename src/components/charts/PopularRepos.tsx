import { type Repository } from '@/types';
import { calculateMostStarredRepos } from '@/utils';

function PopularRepos({ repositories }: { repositories: Repository[] }) {
  const mostStarred = calculateMostStarredRepos(repositories);
  console.log(mostStarred);

  return <div>PopularRepos</div>;
}

export default PopularRepos;
