import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';

type UserCardProps = {
  avatarUrl: string;
  bio: string;
  name: string;
  url: string;
};

function UserCard({ avatarUrl, bio, name, url }: UserCardProps) {
  return (
    <Card className="w-full lg:w-1/2 mb-8">
      <CardHeader className="flex-row gap-x-8 items-center">
        <img
          src={avatarUrl}
          alt={name}
          className="w-36 h-36 rounded object-cover"
        />

        <div className="flex flex-col gap-y-2">
          <CardTitle>{name || 'Coding Addict'}</CardTitle>
          <CardDescription>
            {bio || 'Passionate about coding and technology.'}
          </CardDescription>
          <Button asChild size="sm" className="w-1/2 mt-2">
            <a href={url} target="_blank" rel="noreferrer">
              Follow
            </a>
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}

export default UserCard;
