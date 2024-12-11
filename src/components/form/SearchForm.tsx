type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

function SearchForm({ userName, setUserName }: SearchFormProps) {
  return <div>Search Form - {userName}</div>;
}

export default SearchForm;
