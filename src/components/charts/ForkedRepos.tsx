import { type Repository } from '@/types';
import { calculateMostForkedRepos } from '@/utils';

function ForkedRepos({ repositories }: { repositories: Repository[] }) {
  const mostForkedRepos = calculateMostForkedRepos(repositories);
  console.log(mostForkedRepos);

  return <div>ForkedRepos</div>;
}

export default ForkedRepos;
