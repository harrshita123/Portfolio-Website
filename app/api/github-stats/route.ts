import { NextResponse } from "next/server";

const USERNAME = "harrshita123";
const REVALIDATE_SECONDS = 300;

interface GitHubUser {
    public_repos?: number;
}

interface GitHubRepository {
    stargazers_count?: number;
}

interface GitHubSearchResult {
    total_count?: number;
}

interface ContributionResult {
    total?: Record<string, number>;
}

async function fetchJson<T>(url: string): Promise<T | null> {
    const token = process.env.GITHUB_TOKEN;
    const response = await fetch(url, {
        headers: {
            Accept: "application/vnd.github+json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
        return null;
    }

    return response.json() as Promise<T>;
}

export const revalidate = 300;

export async function GET() {
    const [user, repositories, pullRequests, issues, contributions] = await Promise.all([
        fetchJson<GitHubUser>(`https://api.github.com/users/${USERNAME}`),
        fetchJson<GitHubRepository[]>(
            `https://api.github.com/users/${USERNAME}/repos?per_page=100&type=owner&sort=updated`
        ),
        fetchJson<GitHubSearchResult>(
            `https://api.github.com/search/issues?q=${encodeURIComponent(`author:${USERNAME} is:pr`)}&per_page=1`
        ),
        fetchJson<GitHubSearchResult>(
            `https://api.github.com/search/issues?q=${encodeURIComponent(`author:${USERNAME} is:issue`)}&per_page=1`
        ),
        fetchJson<ContributionResult>(
            `https://github-contributions-api.jogruber.de/v4/${USERNAME}`
        ),
    ]);

    const totalStars = repositories
        ? repositories.reduce((sum, repository) => sum + (repository.stargazers_count ?? 0), 0)
        : null;
    const totalContributions = contributions?.total
        ? Object.values(contributions.total).reduce((sum, count) => sum + count, 0)
        : null;

    return NextResponse.json(
        {
            totalRepos: user?.public_repos ?? null,
            totalPRs: pullRequests?.total_count ?? null,
            totalIssues: issues?.total_count ?? null,
            totalStars,
            totalContributions,
        },
        {
            headers: {
                "Cache-Control": `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=600`,
            },
        }
    );
}
