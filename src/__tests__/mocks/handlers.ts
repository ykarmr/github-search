/* eslint-disable camelcase */
import { http, HttpResponse } from "msw";

export const handlers = [
  // GitHub API検索エンドポイントのモック
  http.get("https://api.github.com/search/repositories", ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get("q");

    // 検索クエリに基づいて異なるレスポンスを返す
    if (query === "react") {
      return HttpResponse.json({
        total_count: 2,
        incomplete_results: false,
        items: [
          {
            id: 10270250,
            name: "react",
            full_name: "facebook/react",
            owner: {
              login: "facebook",
              avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
            },
            html_url: "https://github.com/facebook/react",
            description: "The library for web and native user interfaces.",
            stargazers_count: 230000,
            forks_count: 47000,
            language: "JavaScript",
            topics: ["react", "javascript", "library", "ui"],
            updated_at: "2023-01-01T00:00:00Z",
            created_at: "2013-05-24T16:15:54Z",
            clone_url: "https://github.com/facebook/react.git",
            ssh_url: "git@github.com:facebook/react.git",
            default_branch: "main",
            open_issues_count: 1000,
            watchers_count: 230000,
            size: 50000,
          },
          {
            id: 123456,
            name: "react-router",
            full_name: "remix-run/react-router",
            owner: {
              login: "remix-run",
              avatar_url: "https://avatars.githubusercontent.com/u/12345?v=4",
            },
            html_url: "https://github.com/remix-run/react-router",
            description: "Declarative routing for React",
            stargazers_count: 50000,
            forks_count: 10000,
            language: "TypeScript",
            topics: ["react", "router", "routing"],
            updated_at: "2023-01-01T00:00:00Z",
            created_at: "2014-05-24T16:15:54Z",
            clone_url: "https://github.com/remix-run/react-router.git",
            ssh_url: "git@github.com:remix-run/react-router.git",
            default_branch: "main",
            open_issues_count: 200,
            watchers_count: 50000,
            size: 20000,
          },
        ],
      });
    }

    if (query === "vue") {
      return HttpResponse.json({
        total_count: 1,
        incomplete_results: false,
        items: [
          {
            id: 11730342,
            name: "vue",
            full_name: "vuejs/vue",
            owner: {
              login: "vuejs",
              avatar_url: "https://avatars.githubusercontent.com/u/6128107?v=4",
            },
            html_url: "https://github.com/vuejs/vue",
            description: "Vue.js is a progressive JavaScript framework",
            stargazers_count: 207000,
            forks_count: 33000,
            language: "TypeScript",
            topics: ["vue", "javascript", "framework"],
            updated_at: "2023-01-01T00:00:00Z",
            created_at: "2013-07-29T03:24:51Z",
            clone_url: "https://github.com/vuejs/vue.git",
            ssh_url: "git@github.com:vuejs/vue.git",
            default_branch: "main",
            open_issues_count: 500,
            watchers_count: 207000,
            size: 30000,
          },
        ],
      });
    }

    if (query === "nonexistent") {
      return HttpResponse.json({
        total_count: 0,
        incomplete_results: false,
        items: [],
      });
    }

    if (query === "error") {
      return HttpResponse.json(
        {
          message: "API rate limit exceeded",
          documentation_url:
            "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting",
        },
        { status: 403 },
      );
    }

    // デフォルトレスポンス
    return HttpResponse.json({
      total_count: 0,
      incomplete_results: false,
      items: [],
    });
  }),

  // GitHub API リポジトリ詳細エンドポイントのモック
  http.get("https://api.github.com/repos/:owner/:repo", ({ params }) => {
    const { owner, repo } = params;

    if (owner === "facebook" && repo === "react") {
      return HttpResponse.json({
        id: 10270250,
        name: "react",
        full_name: "facebook/react",
        owner: {
          login: "facebook",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        },
        html_url: "https://github.com/facebook/react",
        description: "The library for web and native user interfaces.",
        stargazers_count: 230000,
        forks_count: 47000,
        language: "JavaScript",
        topics: ["react", "javascript", "library", "ui"],
        updated_at: "2023-01-01T00:00:00Z",
        created_at: "2013-05-24T16:15:54Z",
        clone_url: "https://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        default_branch: "main",
        open_issues_count: 1000,
        watchers_count: 230000,
        size: 50000,
      });
    }

    return HttpResponse.json(
      {
        message: "Not Found",
        documentation_url:
          "https://docs.github.com/rest/reference/repos#get-a-repository",
      },
      { status: 404 },
    );
  }),
];
