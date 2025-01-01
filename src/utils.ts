import { Repository } from './types';

/**
 * Calculates the top 5 most forked repositories
 * @param repos Array of repository data from Github API
 * @returns Array of objects containing repository names and their fork counts
 * Example return : [{repo: "react", count: 1000}, {repo: "vue", count: 500}]
 */

export const calculateMostForkedRepos = (
  repos: Repository[]
): { repo: string; count: number }[] => {
  // Return empty array if no repositories are provided
  if (repos.length === 0) {
    return [];
  }

  // Transform repository data into simplified objects containing only name and fork count
  const forkedRepos = repos
    .map((repo) => ({
      repo: repo.name, // Extract repository name
      count: repo.forkCount, // Extract number of forks
    }))
    .sort((a, b) => b.count - a.count) // Sort by fork count in descending order
    .slice(0, 5); // Select only the top 5  repositories

  return forkedRepos;
};

/**
 * Calculates the top 5 most starred repositories
 * @param repos Array of repository data from Github API
 * @returns Array of objects containing repository names and their star counts
 * Example return  [{repo: "tensorflow", stars: 5000}, {repo: "linux", stars: 4000}]
 */

export const calculateMostStarredRepos = (
  repos: Repository[]
): { repo: string; stars: number }[] => {
  // Return empty array if no repositories are provided
  if (repos.length === 0) {
    return [];
  }

  // Transform repository data into simplified objects containing only name and stars count
  const starredRepos = repos
    .map((repo) => ({
      repo: repo.name, // Extract repository name
      stars: repo.stargazerCount, // Extract number of stars (stargazers)
    }))
    .sort((a, b) => b.stars - a.stars) // Sort by star count in descending order
    .slice(0, 5); // Take only the top 5 repositories

  return starredRepos;
};

/**
 * Calculates the top 5 most used programming languages across all repositories
 * @param repos Array of repository data from Github API
 * @returns Array of objects containing language names and their occurrence count
 * Example return : [{language: "JavaScript", count: 10}, {language: "Python", count:7}]
 */

export const calculatePopularLanguages = (
  repos: Repository[]
): { language: string; count: number }[] => {
  // Return empty array if no repositories are provided
  if (repos.length === 0) {
    return [];
  }

  // Initialize a map to track how many times each language appears
  // Example: {"JavaScript": 5, "Python": 3, "TypeScript": 2}

  const languageMap: { [key: string]: number } = {};

  repos.forEach((repo) => {
    // Skip repositories with no languages
    if (repo.languages.edges.length === 0) {
      return;
    }

    // Iterate through each language in the repository
    // languages.edges comes from Github's GraphQL API structure
    repo.languages.edges.forEach((language) => {
      const { name } = language.node;
      // Increment the count for this language, initialize to 1 if it's the first occurence
      languageMap[name] = (languageMap[name] || 0) + 1;
    });
  });

  // If no languages were found in any repository, return empty array
  if (Object.keys(languageMap).length === 0) {
    return [];
  }

  // Convert the language map into an array of objects and sort them
  return Object.entries(languageMap)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([language, count]) => ({ language, count }));
};

/**
 * Calculates the top 5 most starred programming languages across all repositories
 * @param repos Array of repository data from Github API
 * @returns Array of objects containing language names and their stars count
 * Example return : [{language: "JavaScript", stars: 10}, {language: "Python", stars:7}]
 */

export const calculateStarsPerLanguage = (
  repos: Repository[]
): { language: string; stars: number }[] => {
  // Return empty array if no repositories are provided
  if (repos.length === 0) {
    return [];
  }

  // Initialize a map to track how many stars for each language
  // Example: {"JavaScript": 5, "Python": 3, "TypeScript": 2}

  const languageMap: { [key: string]: number } = {};

  repos.forEach((repo) => {
    // Skip repositories with no languages
    if (repo.languages.edges.length === 0) {
      return;
    }
    const { stargazerCount } = repo;

    // Iterate through each language in the repository
    // languages.edges comes from Github's GraphQL API structure
    repo.languages.edges.forEach((language) => {
      const { name } = language.node;
      // Increment the count for this language, initialize to 1 if it's the first occurence
      languageMap[name] = (languageMap[name] || 0) + stargazerCount;
    });
  });

  // If no languages were found in any repository, return empty array
  if (Object.keys(languageMap).length === 0) {
    return [];
  }

  // Convert the language map into an array of objects and sort them
  return Object.entries(languageMap)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([language, stars]) => ({ language, stars }));
};
