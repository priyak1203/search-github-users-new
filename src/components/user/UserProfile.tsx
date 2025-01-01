import { GET_USER } from '@/queries';
import { UserData } from '@/types';
import { useQuery } from '@apollo/client';
import UserCard from './UserCard';
import StatsContainer from './StatsContainer';
import ForkedRepos from '../charts/ForkedRepos';
import PopularRepos from '../charts/PopularRepos';
import UsedLanguages from '../charts/UsedLanguages';
import { Button } from '../ui/button';
import { useState } from 'react';
import UsedLanguagesPie from '../charts/UsedLanguagesPie';

import PopularReposPie from '../charts/PopularReposPie';
import ForkedReposPie from '../charts/ForkedReposPie';
import Loading from './Loading';
import PopularLanguages from '../charts/PopularLanguages';
import PopularLanguagesPie from '../charts/PopularLanguagesPie';

type UserProfileProps = {
  userName: string;
};

function UserProfile({ userName }: UserProfileProps) {
  const { loading, error, data } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  });

  const [pieChart, setPieChart] = useState(false);

  if (loading) return <Loading />;

  if (error) return <h2 className="text-xl">{error.message}</h2>;

  if (!data) return <h2 className="text-xl">User Not Found.</h2>;

  const {
    avatarUrl,
    bio,
    name,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user;

  return (
    <div>
      <UserCard avatarUrl={avatarUrl} bio={bio} name={name} url={url} />
      <StatsContainer
        totalRepos={repositories.totalCount}
        followers={followers.totalCount}
        following={following.totalCount}
        gists={gists.totalCount}
      />
      <Button
        className="text-center mb-10 flex border-0 text-xl"
        variant="secondary"
        onClick={() => setPieChart((value) => !value)}
      >
        {pieChart ? 'Bar Charts' : 'Pie Charts'}
      </Button>

      {repositories.totalCount > 0 && !pieChart && (
        <div className="grid md:grid-cols-2 gap-4">
          <UsedLanguages respositories={repositories.nodes} />
          <PopularRepos repositories={repositories.nodes} />
          <ForkedRepos repositories={repositories.nodes} />
          <PopularLanguages repositories={repositories.nodes} />
        </div>
      )}
      {repositories.totalCount > 0 && pieChart && (
        <div className="grid md:grid-cols-2 gap-4">
          <UsedLanguagesPie repositories={repositories.nodes} />
          <PopularReposPie repositories={repositories.nodes} />
          <ForkedReposPie repositories={repositories.nodes} />
          <PopularLanguagesPie repositories={repositories.nodes} />
        </div>
      )}
    </div>
  );
}

export default UserProfile;
