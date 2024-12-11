type UserProfileProps = {
  userName: string;
};

function UserProfile({ userName }: UserProfileProps) {
  return <h1 className="text-2xl font-bold">UserProfile - {userName}</h1>;
}

export default UserProfile;
