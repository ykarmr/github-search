/* eslint-disable camelcase */
import { RestEndpointMethodTypes } from "@octokit/rest";
import { http, HttpResponse } from "msw";

export const handlers = [
  // GitHub API検索エンドポイントのモック
  http.get("https://api.github.com/search/repositories", ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get("q");

    // 検索クエリに基づいて異なるレスポンスを返す
    if (query === "react") {
      return HttpResponse.json<
        RestEndpointMethodTypes["search"]["repos"]["response"]["data"]
      >({
        total_count: 2,
        incomplete_results: false,
        items: [
          {
            id: 10270250,
            node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
            name: "react",
            full_name: "facebook/react",
            private: false,
            owner: {
              login: "facebook",
              id: 69631,
              node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
              avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/facebook",
              html_url: "https://github.com/facebook",
              followers_url: "https://api.github.com/users/facebook/followers",
              following_url:
                "https://api.github.com/users/facebook/following{/other_user}",
              gists_url:
                "https://api.github.com/users/facebook/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/facebook/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/facebook/subscriptions",
              organizations_url: "https://api.github.com/users/facebook/orgs",
              repos_url: "https://api.github.com/users/facebook/repos",
              events_url:
                "https://api.github.com/users/facebook/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/facebook/received_events",
              type: "Organization",
              user_view_type: "public",
              site_admin: false,
            },
            html_url: "https://github.com/facebook/react",
            description: "The library for web and native user interfaces.",
            fork: false,
            url: "https://api.github.com/repos/facebook/react",
            forks_url: "https://api.github.com/repos/facebook/react/forks",
            keys_url:
              "https://api.github.com/repos/facebook/react/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
            teams_url: "https://api.github.com/repos/facebook/react/teams",
            hooks_url: "https://api.github.com/repos/facebook/react/hooks",
            issue_events_url:
              "https://api.github.com/repos/facebook/react/issues/events{/number}",
            events_url: "https://api.github.com/repos/facebook/react/events",
            assignees_url:
              "https://api.github.com/repos/facebook/react/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/facebook/react/branches{/branch}",
            tags_url: "https://api.github.com/repos/facebook/react/tags",
            blobs_url:
              "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/facebook/react/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/facebook/react/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/facebook/react/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/facebook/react/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/facebook/react/languages",
            stargazers_url:
              "https://api.github.com/repos/facebook/react/stargazers",
            contributors_url:
              "https://api.github.com/repos/facebook/react/contributors",
            subscribers_url:
              "https://api.github.com/repos/facebook/react/subscribers",
            subscription_url:
              "https://api.github.com/repos/facebook/react/subscription",
            commits_url:
              "https://api.github.com/repos/facebook/react/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/facebook/react/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/facebook/react/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/facebook/react/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/facebook/react/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
            merges_url: "https://api.github.com/repos/facebook/react/merges",
            archive_url:
              "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/facebook/react/downloads",
            issues_url:
              "https://api.github.com/repos/facebook/react/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/facebook/react/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/facebook/react/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/facebook/react/labels{/name}",
            releases_url:
              "https://api.github.com/repos/facebook/react/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/facebook/react/deployments",
            created_at: "2013-05-24T16:15:54Z",
            updated_at: "2025-09-03T09:17:00Z",
            pushed_at: "2025-09-02T21:38:57Z",
            git_url: "git://github.com/facebook/react.git",
            ssh_url: "git@github.com:facebook/react.git",
            clone_url: "https://github.com/facebook/react.git",
            svn_url: "https://github.com/facebook/react",
            homepage: "https://react.dev",
            size: 1108658,
            stargazers_count: 238587,
            watchers_count: 238587,
            language: "JavaScript",
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            has_wiki: false,
            has_pages: true,
            has_discussions: false,
            forks_count: 49245,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 1034,
            license: {
              key: "mit",
              name: "MIT License",
              spdx_id: "MIT",
              url: "https://api.github.com/licenses/mit",
              node_id: "MDc6TGljZW5zZTEz",
            },
            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,
            topics: [
              "declarative",
              "frontend",
              "javascript",
              "library",
              "react",
              "ui",
            ],
            visibility: "public",
            forks: 49245,
            open_issues: 1034,
            watchers: 238587,
            default_branch: "main",
            score: 1,
          },
          {
            id: 19872456,
            node_id: "MDEwOlJlcG9zaXRvcnkxOTg3MjQ1Ng==",
            name: "react-router",
            full_name: "remix-run/react-router",
            private: false,
            owner: {
              login: "remix-run",
              id: 64235328,
              node_id: "MDEyOk9yZ2FuaXphdGlvbjY0MjM1MzI4",
              avatar_url:
                "https://avatars.githubusercontent.com/u/64235328?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/remix-run",
              html_url: "https://github.com/remix-run",
              followers_url: "https://api.github.com/users/remix-run/followers",
              following_url:
                "https://api.github.com/users/remix-run/following{/other_user}",
              gists_url:
                "https://api.github.com/users/remix-run/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/remix-run/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/remix-run/subscriptions",
              organizations_url: "https://api.github.com/users/remix-run/orgs",
              repos_url: "https://api.github.com/users/remix-run/repos",
              events_url:
                "https://api.github.com/users/remix-run/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/remix-run/received_events",
              type: "Organization",
              user_view_type: "public",
              site_admin: false,
            },
            html_url: "https://github.com/remix-run/react-router",
            description: "Declarative routing for React",
            fork: false,
            url: "https://api.github.com/repos/remix-run/react-router",
            forks_url:
              "https://api.github.com/repos/remix-run/react-router/forks",
            keys_url:
              "https://api.github.com/repos/remix-run/react-router/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/remix-run/react-router/collaborators{/collaborator}",
            teams_url:
              "https://api.github.com/repos/remix-run/react-router/teams",
            hooks_url:
              "https://api.github.com/repos/remix-run/react-router/hooks",
            issue_events_url:
              "https://api.github.com/repos/remix-run/react-router/issues/events{/number}",
            events_url:
              "https://api.github.com/repos/remix-run/react-router/events",
            assignees_url:
              "https://api.github.com/repos/remix-run/react-router/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/remix-run/react-router/branches{/branch}",
            tags_url:
              "https://api.github.com/repos/remix-run/react-router/tags",
            blobs_url:
              "https://api.github.com/repos/remix-run/react-router/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/remix-run/react-router/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/remix-run/react-router/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/remix-run/react-router/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/remix-run/react-router/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/remix-run/react-router/languages",
            stargazers_url:
              "https://api.github.com/repos/remix-run/react-router/stargazers",
            contributors_url:
              "https://api.github.com/repos/remix-run/react-router/contributors",
            subscribers_url:
              "https://api.github.com/repos/remix-run/react-router/subscribers",
            subscription_url:
              "https://api.github.com/repos/remix-run/react-router/subscription",
            commits_url:
              "https://api.github.com/repos/remix-run/react-router/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/remix-run/react-router/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/remix-run/react-router/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/remix-run/react-router/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/remix-run/react-router/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/remix-run/react-router/compare/{base}...{head}",
            merges_url:
              "https://api.github.com/repos/remix-run/react-router/merges",
            archive_url:
              "https://api.github.com/repos/remix-run/react-router/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/remix-run/react-router/downloads",
            issues_url:
              "https://api.github.com/repos/remix-run/react-router/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/remix-run/react-router/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/remix-run/react-router/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/remix-run/react-router/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/remix-run/react-router/labels{/name}",
            releases_url:
              "https://api.github.com/repos/remix-run/react-router/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/remix-run/react-router/deployments",
            created_at: "2014-05-16T22:22:51Z",
            updated_at: "2025-09-02T23:54:56Z",
            pushed_at: "2025-09-02T07:07:34Z",
            git_url: "git://github.com/remix-run/react-router.git",
            ssh_url: "git@github.com:remix-run/react-router.git",
            clone_url: "https://github.com/remix-run/react-router.git",
            svn_url: "https://github.com/remix-run/react-router",
            homepage: "https://reactrouter.com",
            size: 41296,
            stargazers_count: 55440,
            watchers_count: 55440,
            language: "TypeScript",
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            has_discussions: true,
            forks_count: 10713,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 128,
            license: {
              key: "mit",
              name: "MIT License",
              spdx_id: "MIT",
              url: "https://api.github.com/licenses/mit",
              node_id: "MDc6TGljZW5zZTEz",
            },
            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,
            topics: [],
            visibility: "public",
            forks: 10713,
            open_issues: 128,
            watchers: 55440,
            default_branch: "main",
            score: 1,
          },
        ],
      });
    }

    if (query === "vue") {
      return HttpResponse.json<
        RestEndpointMethodTypes["search"]["repos"]["response"]["data"]
      >({
        total_count: 1,
        incomplete_results: false,
        items: [
          {
            id: 11730342,
            node_id: "MDEwOlJlcG9zaXRvcnkxMTczMDM0Mg==",
            name: "vue",
            full_name: "vuejs/vue",
            private: false,
            owner: {
              login: "vuejs",
              id: 6128107,
              node_id: "MDEyOk9yZ2FuaXphdGlvbjYxMjgxMDc=",
              avatar_url: "https://avatars.githubusercontent.com/u/6128107?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/vuejs",
              html_url: "https://github.com/vuejs",
              followers_url: "https://api.github.com/users/vuejs/followers",
              following_url:
                "https://api.github.com/users/vuejs/following{/other_user}",
              gists_url: "https://api.github.com/users/vuejs/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/vuejs/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/vuejs/subscriptions",
              organizations_url: "https://api.github.com/users/vuejs/orgs",
              repos_url: "https://api.github.com/users/vuejs/repos",
              events_url: "https://api.github.com/users/vuejs/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/vuejs/received_events",
              type: "Organization",
              user_view_type: "public",
              site_admin: false,
            },
            html_url: "https://github.com/vuejs/vue",
            description:
              "This is the repo for Vue 2. For Vue 3, go to https://github.com/vuejs/core",
            fork: false,
            url: "https://api.github.com/repos/vuejs/vue",
            forks_url: "https://api.github.com/repos/vuejs/vue/forks",
            keys_url: "https://api.github.com/repos/vuejs/vue/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/vuejs/vue/collaborators{/collaborator}",
            teams_url: "https://api.github.com/repos/vuejs/vue/teams",
            hooks_url: "https://api.github.com/repos/vuejs/vue/hooks",
            issue_events_url:
              "https://api.github.com/repos/vuejs/vue/issues/events{/number}",
            events_url: "https://api.github.com/repos/vuejs/vue/events",
            assignees_url:
              "https://api.github.com/repos/vuejs/vue/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/vuejs/vue/branches{/branch}",
            tags_url: "https://api.github.com/repos/vuejs/vue/tags",
            blobs_url: "https://api.github.com/repos/vuejs/vue/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/vuejs/vue/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/vuejs/vue/git/refs{/sha}",
            trees_url: "https://api.github.com/repos/vuejs/vue/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/vuejs/vue/statuses/{sha}",
            languages_url: "https://api.github.com/repos/vuejs/vue/languages",
            stargazers_url: "https://api.github.com/repos/vuejs/vue/stargazers",
            contributors_url:
              "https://api.github.com/repos/vuejs/vue/contributors",
            subscribers_url:
              "https://api.github.com/repos/vuejs/vue/subscribers",
            subscription_url:
              "https://api.github.com/repos/vuejs/vue/subscription",
            commits_url: "https://api.github.com/repos/vuejs/vue/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/vuejs/vue/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/vuejs/vue/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/vuejs/vue/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/vuejs/vue/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/vuejs/vue/compare/{base}...{head}",
            merges_url: "https://api.github.com/repos/vuejs/vue/merges",
            archive_url:
              "https://api.github.com/repos/vuejs/vue/{archive_format}{/ref}",
            downloads_url: "https://api.github.com/repos/vuejs/vue/downloads",
            issues_url:
              "https://api.github.com/repos/vuejs/vue/issues{/number}",
            pulls_url: "https://api.github.com/repos/vuejs/vue/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/vuejs/vue/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/vuejs/vue/notifications{?since,all,participating}",
            labels_url: "https://api.github.com/repos/vuejs/vue/labels{/name}",
            releases_url:
              "https://api.github.com/repos/vuejs/vue/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/vuejs/vue/deployments",
            created_at: "2013-07-29T03:24:51Z",
            updated_at: "2025-09-03T09:20:34Z",
            pushed_at: "2024-10-10T07:24:15Z",
            git_url: "git://github.com/vuejs/vue.git",
            ssh_url: "git@github.com:vuejs/vue.git",
            clone_url: "https://github.com/vuejs/vue.git",
            svn_url: "https://github.com/vuejs/vue",
            homepage: "http://v2.vuejs.org",
            size: 32152,
            stargazers_count: 209333,
            watchers_count: 209333,
            language: "TypeScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: true,
            forks_count: 33749,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 605,
            license: {
              key: "mit",
              name: "MIT License",
              spdx_id: "MIT",
              url: "https://api.github.com/licenses/mit",
              node_id: "MDc6TGljZW5zZTEz",
            },
            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,
            topics: ["framework", "frontend", "javascript", "vue"],
            visibility: "public",
            forks: 33749,
            open_issues: 605,
            watchers: 209333,
            default_branch: "main",
            score: 1,
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
      return HttpResponse.json<
        RestEndpointMethodTypes["repos"]["get"]["response"]["data"]
      >({
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description: "The library for web and native user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2025-09-03T09:26:44Z",
        pushed_at: "2025-09-02T21:38:57Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://react.dev",
        size: 1108658,
        stargazers_count: 238588,
        watchers_count: 238588,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: true,
        has_discussions: false,
        forks_count: 49245,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1034,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 49245,
        open_issues: 1034,
        watchers: 238588,
        default_branch: "main",
        temp_clone_token: null,
        custom_properties: {},
        organization: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        network_count: 49245,
        subscribers_count: 6712,
      });
    }

    // テスト用のエラーケース
    if (owner === "test-user" && repo === "language-error") {
      return HttpResponse.json<
        RestEndpointMethodTypes["repos"]["get"]["response"]["data"]
      >({
        id: 123456,
        node_id: "MDEwOlJlcG9zaXRvcnkxMjM0NTY=",
        name: "language-error",
        full_name: "test-user/language-error",
        private: false,
        owner: {
          login: "test-user",
          id: 99999,
          node_id: "MDQ6VXNlcjk5OTk5",
          avatar_url: "https://avatars.githubusercontent.com/u/99999?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/test-user",
          html_url: "https://github.com/test-user",
          followers_url: "https://api.github.com/users/test-user/followers",
          following_url:
            "https://api.github.com/users/test-user/following{/other_user}",
          gists_url: "https://api.github.com/users/test-user/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/test-user/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/test-user/subscriptions",
          organizations_url: "https://api.github.com/users/test-user/orgs",
          repos_url: "https://api.github.com/users/test-user/repos",
          events_url: "https://api.github.com/users/test-user/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/test-user/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/test-user/language-error",
        description: "Test repository for language error handling",
        fork: false,
        url: "https://api.github.com/repos/test-user/language-error",
        // 他の必須プロパティを簡略化
        forks_url: "",
        keys_url: "",
        collaborators_url: "",
        teams_url: "",
        hooks_url: "",
        issue_events_url: "",
        events_url: "",
        assignees_url: "",
        branches_url: "",
        tags_url: "",
        blobs_url: "",
        git_tags_url: "",
        git_refs_url: "",
        trees_url: "",
        statuses_url: "",
        languages_url: "",
        stargazers_url: "",
        contributors_url: "",
        subscribers_url: "",
        subscription_url: "",
        commits_url: "",
        git_commits_url: "",
        comments_url: "",
        issue_comment_url: "",
        contents_url: "",
        compare_url: "",
        merges_url: "",
        archive_url: "",
        downloads_url: "",
        issues_url: "",
        pulls_url: "",
        milestones_url: "",
        notifications_url: "",
        labels_url: "",
        releases_url: "",
        deployments_url: "",
        created_at: "2023-01-01T00:00:00Z",
        updated_at: "2023-01-01T00:00:00Z",
        pushed_at: "2023-01-01T00:00:00Z",
        git_url: "",
        ssh_url: "",
        clone_url: "",
        svn_url: "",
        homepage: null,
        size: 100,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
        temp_clone_token: null,
        network_count: 0,
        subscribers_count: 0,
      });
    }

    if (owner === "test-user" && repo === "commit-error") {
      return HttpResponse.json<
        RestEndpointMethodTypes["repos"]["get"]["response"]["data"]
      >({
        id: 789012,
        node_id: "MDEwOlJlcG9zaXRvcnk3ODkwMTI=",
        name: "commit-error",
        full_name: "test-user/commit-error",
        private: false,
        owner: {
          login: "test-user",
          id: 99999,
          node_id: "MDQ6VXNlcjk5OTk5",
          avatar_url: "https://avatars.githubusercontent.com/u/99999?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/test-user",
          html_url: "https://github.com/test-user",
          followers_url: "https://api.github.com/users/test-user/followers",
          following_url:
            "https://api.github.com/users/test-user/following{/other_user}",
          gists_url: "https://api.github.com/users/test-user/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/test-user/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/test-user/subscriptions",
          organizations_url: "https://api.github.com/users/test-user/orgs",
          repos_url: "https://api.github.com/users/test-user/repos",
          events_url: "https://api.github.com/users/test-user/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/test-user/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/test-user/commit-error",
        description: "Test repository for commit error handling",
        fork: false,
        url: "https://api.github.com/repos/test-user/commit-error",
        // 他の必須プロパティを簡略化
        forks_url: "",
        keys_url: "",
        collaborators_url: "",
        teams_url: "",
        hooks_url: "",
        issue_events_url: "",
        events_url: "",
        assignees_url: "",
        branches_url: "",
        tags_url: "",
        blobs_url: "",
        git_tags_url: "",
        git_refs_url: "",
        trees_url: "",
        statuses_url: "",
        languages_url: "",
        stargazers_url: "",
        contributors_url: "",
        subscribers_url: "",
        subscription_url: "",
        commits_url: "",
        git_commits_url: "",
        comments_url: "",
        issue_comment_url: "",
        contents_url: "",
        compare_url: "",
        merges_url: "",
        archive_url: "",
        downloads_url: "",
        issues_url: "",
        pulls_url: "",
        milestones_url: "",
        notifications_url: "",
        labels_url: "",
        releases_url: "",
        deployments_url: "",
        created_at: "2023-01-01T00:00:00Z",
        updated_at: "2023-01-01T00:00:00Z",
        pushed_at: "2023-01-01T00:00:00Z",
        git_url: "",
        ssh_url: "",
        clone_url: "",
        svn_url: "",
        homepage: null,
        size: 100,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
        temp_clone_token: null,
        network_count: 0,
        subscribers_count: 0,
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

  // GitHub API 言語統計エンドポイントのモック
  http.get(
    "https://api.github.com/repos/:owner/:repo/languages",
    ({ params }) => {
      const { owner, repo } = params;

      if (owner === "facebook" && repo === "react") {
        return HttpResponse.json<
          RestEndpointMethodTypes["repos"]["listLanguages"]["response"]["data"]
        >({
          JavaScript: 5171280,
          TypeScript: 2230082,
          HTML: 115354,
          CSS: 81054,
          "C++": 44290,
          CoffeeScript: 18760,
          C: 5227,
          Shell: 4401,
          Python: 259,
          Makefile: 189,
        });
      }

      // test-user/language-errorの場合はエラーを返す
      if (owner === "test-user" && repo === "language-error") {
        return HttpResponse.json(
          {
            message: "Server Error",
            documentation_url:
              "https://docs.github.com/rest/reference/repos#list-repository-languages",
          },
          { status: 500 },
        );
      }

      // test-user/commit-errorの場合は正常に空のオブジェクトを返す
      if (owner === "test-user" && repo === "commit-error") {
        return HttpResponse.json({});
      }

      return HttpResponse.json({});
    },
  ),

  // GitHub API コミット統計エンドポイントのモック
  http.get(
    "https://api.github.com/repos/:owner/:repo/commits",
    ({ params }) => {
      const { owner, repo } = params;

      if (owner === "facebook" && repo === "react") {
        return HttpResponse.json<
          RestEndpointMethodTypes["repos"]["listCommits"]["response"]["data"]
        >([
          {
            sha: "ac3e705a18696168acfcaed39dce0cfaa6be8836",
            node_id:
              "C_kwDOAJy2KtoAKGFjM2U3MDVhMTg2OTYxNjhhY2ZjYWVkMzlkY2UwY2ZhYTZiZTg4MzY",
            commit: {
              author: {
                name: "Eugene Choi",
                email: "4eugenechoi@gmail.com",
                date: "2025-09-02T21:38:57Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-09-02T21:38:57Z",
              },
              message:
                '[compiler][playground] (2/N) Config override panel (#34344)\n\n<!--\n  Thanks for submitting a pull request!\nWe appreciate you spending the time to work on these changes. Please\nprovide enough information so that others can review your pull request.\nThe three fields below are mandatory.\n\nBefore submitting a pull request, please make sure the following is\ndone:\n\n1. Fork [the repository](https://github.com/facebook/react) and create\nyour branch from `main`.\n  2. Run `yarn` in the repository root.\n3. If you\'ve fixed a bug or added code that should be tested, add tests!\n4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch\nTestName` is helpful in development.\n5. Run `yarn test --prod` to test in the production environment. It\nsupports the same options as `yarn test`.\n6. If you need a debugger, run `yarn test --debug --watch TestName`,\nopen `chrome://inspect`, and press "Inspect".\n7. Format your code with\n[prettier](https://github.com/prettier/prettier) (`yarn prettier`).\n8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only\ncheck changed files.\n  9. Run the [Flow](https://flowtype.org/) type checks (`yarn flow`).\n  10. If you haven\'t already, complete the CLA.\n\nLearn more about contributing:\nhttps://reactjs.org/docs/how-to-contribute.html\n-->\n\n## Summary\n\nPart 2 of adding a "Config Override" panel to the React compiler\nplayground. Added sync from the config editor (still only accessible\nwith the "showConfig" param) to the main source code editor. Adding a\nvalid config to the editor will add/replace the `@OVERRIDE` pragma above\nthe source code. Additionally refactored the old implementation to\nremove `useEffect`s and unnecessary renders.\n\nRealized upon testing that the user experience is quite jarring,\nplanning to add a `sync` button in the next PR to fix this.\n\n## How did you test this change?\n\n<!--\nDemonstrate the code is solid. Example: The exact commands you ran and\ntheir output, screenshots / videos if the pull request changes the user\ninterface.\nHow exactly did you verify that your PR solves the issue you wanted to\nsolve?\n  If you leave this empty, your PR will very likely be closed.\n-->\n\n\n\nhttps://github.com/user-attachments/assets/a71b1b5f-0539-4c00-8d5c-22426f0280f9',
              tree: {
                sha: "858d9e2fba923e67a126117a42298528380df4c7",
                url: "https://api.github.com/repos/facebook/react/git/trees/858d9e2fba923e67a126117a42298528380df4c7",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/ac3e705a18696168acfcaed39dce0cfaa6be8836",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJot2PxCRC1aQ7uu5UhlAAA5ZwQACAT/sHK192lTex+0nRmcfAT\nL3R/cELjSYSX7FUVwZgkxEGkxGz+iah5n7676W0MS74Dhhp71Kl+fbhi9H8BgrJ4\n5fFk4S8g5G9pqQrDF2vgGb9SLwd9Ji9V9LaowcMN2XOFh/JMz+RXvZEbw38yDu2f\nHjoHj6jrvghHo3rbgfkQeCtkt0I3Rr4JlHuIxleg1NZojZML0FxvBD0J9fwEdQMp\nUnBniBeyn3KJEnu9VU6Psfzap0zCkQ6GZl3jEjGUfPfKEqND7KBpCo+fV+buXX4G\neJ3j6pbtoVLOu7ff03jpEX+rolPDm3b9G5tVCAE3pMVYADDEFgwsN3WH1ybGZ82A\n3pU3nmOVOvSzr6iwRnVjX54ULNWHeBZrJI2nLyUlinYRau897JQhyMgEFknM8mGF\nVStdqeZXAKxKmECgwCW/31s6PsgZCc/TfOzc9b61IulS2M1MXl3HaLStM2AevbD8\nHMpY3bEWsv8k9utIYJGskre7tC2ynF84BJIj5AYCyLvu2Q/AjNGbJVw9sAL2pd4l\nQT+p45QElA2v8Ht1Aa4lUS5GfkKZCamt7TevUgmBaaCHef8F/fTEMnnwi3n49ur4\n8Dvjjbw4oinxcCvFDd3rx0YW1XC2fgbUQqHNHqVt9ggYltDszM0IXNm0hxExwpmx\nJg/VyoslFebPtwHYrmGV\n=cmXE\n-----END PGP SIGNATURE-----\n",
                payload:
                  'tree 858d9e2fba923e67a126117a42298528380df4c7\nparent 8e60cb7ed55a3dce35bd809b4cf1ad803c59abfd\nauthor Eugene Choi <4eugenechoi@gmail.com> 1756849137 -0400\ncommitter GitHub <noreply@github.com> 1756849137 -0400\n\n[compiler][playground] (2/N) Config override panel (#34344)\n\n<!--\n  Thanks for submitting a pull request!\nWe appreciate you spending the time to work on these changes. Please\nprovide enough information so that others can review your pull request.\nThe three fields below are mandatory.\n\nBefore submitting a pull request, please make sure the following is\ndone:\n\n1. Fork [the repository](https://github.com/facebook/react) and create\nyour branch from `main`.\n  2. Run `yarn` in the repository root.\n3. If you\'ve fixed a bug or added code that should be tested, add tests!\n4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch\nTestName` is helpful in development.\n5. Run `yarn test --prod` to test in the production environment. It\nsupports the same options as `yarn test`.\n6. If you need a debugger, run `yarn test --debug --watch TestName`,\nopen `chrome://inspect`, and press "Inspect".\n7. Format your code with\n[prettier](https://github.com/prettier/prettier) (`yarn prettier`).\n8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only\ncheck changed files.\n  9. Run the [Flow](https://flowtype.org/) type checks (`yarn flow`).\n  10. If you haven\'t already, complete the CLA.\n\nLearn more about contributing:\nhttps://reactjs.org/docs/how-to-contribute.html\n-->\n\n## Summary\n\nPart 2 of adding a "Config Override" panel to the React compiler\nplayground. Added sync from the config editor (still only accessible\nwith the "showConfig" param) to the main source code editor. Adding a\nvalid config to the editor will add/replace the `@OVERRIDE` pragma above\nthe source code. Additionally refactored the old implementation to\nremove `useEffect`s and unnecessary renders.\n\nRealized upon testing that the user experience is quite jarring,\nplanning to add a `sync` button in the next PR to fix this.\n\n## How did you test this change?\n\n<!--\nDemonstrate the code is solid. Example: The exact commands you ran and\ntheir output, screenshots / videos if the pull request changes the user\ninterface.\nHow exactly did you verify that your PR solves the issue you wanted to\nsolve?\n  If you leave this empty, your PR will very likely be closed.\n-->\n\n\n\nhttps://github.com/user-attachments/assets/a71b1b5f-0539-4c00-8d5c-22426f0280f9',
                verified_at: "2025-09-02T21:38:58Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/ac3e705a18696168acfcaed39dce0cfaa6be8836",
            html_url:
              "https://github.com/facebook/react/commit/ac3e705a18696168acfcaed39dce0cfaa6be8836",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/ac3e705a18696168acfcaed39dce0cfaa6be8836/comments",
            author: {
              login: "EugeneChoi4",
              id: 20482229,
              node_id: "MDQ6VXNlcjIwNDgyMjI5",
              avatar_url:
                "https://avatars.githubusercontent.com/u/20482229?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/EugeneChoi4",
              html_url: "https://github.com/EugeneChoi4",
              followers_url:
                "https://api.github.com/users/EugeneChoi4/followers",
              following_url:
                "https://api.github.com/users/EugeneChoi4/following{/other_user}",
              gists_url:
                "https://api.github.com/users/EugeneChoi4/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/EugeneChoi4/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/EugeneChoi4/subscriptions",
              organizations_url:
                "https://api.github.com/users/EugeneChoi4/orgs",
              repos_url: "https://api.github.com/users/EugeneChoi4/repos",
              events_url:
                "https://api.github.com/users/EugeneChoi4/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/EugeneChoi4/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "8e60cb7ed55a3dce35bd809b4cf1ad803c59abfd",
                url: "https://api.github.com/repos/facebook/react/commits/8e60cb7ed55a3dce35bd809b4cf1ad803c59abfd",
                html_url:
                  "https://github.com/facebook/react/commit/8e60cb7ed55a3dce35bd809b4cf1ad803c59abfd",
              },
            ],
          },
          {
            sha: "8e60cb7ed55a3dce35bd809b4cf1ad803c59abfd",
            node_id:
              "C_kwDOAJy2KtoAKDhlNjBjYjdlZDU1YTNkY2UzNWJkODA5YjRjZjFhZDgwM2M1OWFiZmQ",
            commit: {
              author: {
                name: 'Sebastian "Sebbie" Silbermann',
                email: "sebastian.silbermann@vercel.com",
                date: "2025-09-02T12:59:15Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-09-02T12:59:15Z",
              },
              message:
                "[DevTools] Remove markers from Suspense timeline (#34357)",
              tree: {
                sha: "5207904aaedafc1787184cb1da39e4c206a7aa32",
                url: "https://api.github.com/repos/facebook/react/git/trees/5207904aaedafc1787184cb1da39e4c206a7aa32",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/8e60cb7ed55a3dce35bd809b4cf1ad803c59abfd",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJotuojCRC1aQ7uu5UhlAAAP9oQAAoULIU22iNXVpG715aZmuUC\ny8Q/AqDMOK1N9KHIwOikIfTdCPb7f66+JSXKqLbR8WpNbRLPSLB+cQGQiW3iWfb4\n/r9dt0+a0GSmIRHibL2X47GQCvmQbHzBH419yRAaSPQV4PLDkEPhV2Qrx9rt5jOI\neJH3jl5CcaO+QMJNx0tDSUsSpl2Hk0LQ2FoDJaz2WuZL6E7n7f7Q8u47ThyYLsXf\n2zFSXYC3FxlJBwAsZ7VrYB8P/vZNQ6BV8htIa/sbK3cE43hCcOH67OAWNhsblAtT\nCeRYGY6ygHnZ2VsFygXcuidgW8K9uOHf/YpyO4Y0fOG66CR+QQCLEiavRu2rwNsd\ntCLCIB7zjQn9cjYdrCCGvt4u+NR13Q/VHXknvMPJrfGCnFk2LclJfdwBj81JHRek\n4p3bLRjDcMXVS6xijpJckzMDi0p4JSL/DGHyje+/fRtv+ZXBfuWJFMdWE6FSyQiX\n2d1TTuobewu510oTC66SkmjXOjLChwu5TlDegkP0lDjVXZ5kLHBuAh/nmr7ZEs9Y\nCLYSgHtckYJ8B6hMDYHcRglodg6zfPU/L+BRIni8kd8FUX/XYr/3UN2mfI43e5LK\ng+0yPSFwyNA6UDxWSvnFX4EJdYXKeViBYyokZZrsz9n6X0OQBsOkeMlnSUhEjv0N\nXMmFZ9AolQLCdj4FJsgh\n=n0z/\n-----END PGP SIGNATURE-----\n",
                payload:
                  'tree 5207904aaedafc1787184cb1da39e4c206a7aa32\nparent 6a58b80020457e2976e3139fb825ce5ed0030dd2\nauthor Sebastian "Sebbie" Silbermann <sebastian.silbermann@vercel.com> 1756817955 +0200\ncommitter GitHub <noreply@github.com> 1756817955 +0200\n\n[DevTools] Remove markers from Suspense timeline (#34357)\n\n',
                verified_at: "2025-09-02T12:59:15Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/8e60cb7ed55a3dce35bd809b4cf1ad803c59abfd",
            html_url:
              "https://github.com/facebook/react/commit/8e60cb7ed55a3dce35bd809b4cf1ad803c59abfd",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/8e60cb7ed55a3dce35bd809b4cf1ad803c59abfd/comments",
            author: {
              login: "eps1lon",
              id: 12292047,
              node_id: "MDQ6VXNlcjEyMjkyMDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/12292047?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/eps1lon",
              html_url: "https://github.com/eps1lon",
              followers_url: "https://api.github.com/users/eps1lon/followers",
              following_url:
                "https://api.github.com/users/eps1lon/following{/other_user}",
              gists_url: "https://api.github.com/users/eps1lon/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/eps1lon/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/eps1lon/subscriptions",
              organizations_url: "https://api.github.com/users/eps1lon/orgs",
              repos_url: "https://api.github.com/users/eps1lon/repos",
              events_url:
                "https://api.github.com/users/eps1lon/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/eps1lon/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "6a58b80020457e2976e3139fb825ce5ed0030dd2",
                url: "https://api.github.com/repos/facebook/react/commits/6a58b80020457e2976e3139fb825ce5ed0030dd2",
                html_url:
                  "https://github.com/facebook/react/commit/6a58b80020457e2976e3139fb825ce5ed0030dd2",
              },
            ],
          },
          {
            sha: "6a58b80020457e2976e3139fb825ce5ed0030dd2",
            node_id:
              "C_kwDOAJy2KtoAKDZhNThiODAwMjA0NTdlMjk3NmUzMTM5ZmI4MjVjZTVlZDAwMzBkZDI",
            commit: {
              author: {
                name: 'Sebastian "Sebbie" Silbermann',
                email: "sebastian.silbermann@vercel.com",
                date: "2025-09-02T10:40:54Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-09-02T10:40:54Z",
              },
              message:
                "[DevTools] Only inspect elements on left mouseclick (#34361)",
              tree: {
                sha: "58c43564330093b97dcde893a4d664d59cf49db5",
                url: "https://api.github.com/repos/facebook/react/git/trees/58c43564330093b97dcde893a4d664d59cf49db5",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/6a58b80020457e2976e3139fb825ce5ed0030dd2",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJotsm2CRC1aQ7uu5UhlAAA40wQADBRz/WyP/gxc0iiILVp9kf9\nWtOzzPuRhGw5oxNyqmy3WV/RuEV61VTdRu3SUiHkuDkTp5dMpCJXVu/4yH6EFCgc\nJhgm5c1rRcGsAWZSuNq+TeKrTF7JUy3Q0LIWlMgOWb2NuGDWp0IkZOCzJy/IAdui\nK+nDJvqnZvnlJOdNjw+bIMj7+rLa9AGDtSuNfdexyAqQ9M121PYQNUbpW0dEgg+g\nyaXgv1zujmKGSxNNnk+Ufy5v4w6pzeWmRSTtwWLPWYR9TQqVO+2OmexbRwLE2iW5\n9njbHwRPLtdwLlEMCat2WcXwwNdH6NYKBIbJQ5zrii5TTekfcmD6x9eBxMb/52h7\nLHhPyLoJyPgx7yz4cb/FZXamUR9OQ9hWqgoqTYvrBFBt8hgx56CwdS0mjF4jNSSi\nIE2WL7fbwYYiOuAMF2hJZlmatmPbbFzPa2+LOR0mTc3ZrLLqDcEri8scx6in+wY7\n4u74hC90l/PXsnzJIXFLVFJhP+ON2o/rtLVKkofchpqlowQ8Zr5t36La/TFueT0I\nYEkSMdGz+/9mOVzItcpnp8rYbgprNtVQ+akiLbL5coiUynEd7+VjAnrQnn5N5OQl\nX7i3pUICSRyfdKcAD98eJDdGByInOaHpsQS9B2ZyJJjoq5v6j4rOQZ22Pxc1kW73\ny4GS7wl92WYc2YfJfalR\n=ysug\n-----END PGP SIGNATURE-----\n",
                payload:
                  'tree 58c43564330093b97dcde893a4d664d59cf49db5\nparent b1b0955f2b34286a7408e58463f4cc429627f9a8\nauthor Sebastian "Sebbie" Silbermann <sebastian.silbermann@vercel.com> 1756809654 +0200\ncommitter GitHub <noreply@github.com> 1756809654 +0200\n\n[DevTools] Only inspect elements on left mouseclick (#34361)\n\n',
                verified_at: "2025-09-02T10:40:55Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/6a58b80020457e2976e3139fb825ce5ed0030dd2",
            html_url:
              "https://github.com/facebook/react/commit/6a58b80020457e2976e3139fb825ce5ed0030dd2",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/6a58b80020457e2976e3139fb825ce5ed0030dd2/comments",
            author: {
              login: "eps1lon",
              id: 12292047,
              node_id: "MDQ6VXNlcjEyMjkyMDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/12292047?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/eps1lon",
              html_url: "https://github.com/eps1lon",
              followers_url: "https://api.github.com/users/eps1lon/followers",
              following_url:
                "https://api.github.com/users/eps1lon/following{/other_user}",
              gists_url: "https://api.github.com/users/eps1lon/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/eps1lon/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/eps1lon/subscriptions",
              organizations_url: "https://api.github.com/users/eps1lon/orgs",
              repos_url: "https://api.github.com/users/eps1lon/repos",
              events_url:
                "https://api.github.com/users/eps1lon/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/eps1lon/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "b1b0955f2b34286a7408e58463f4cc429627f9a8",
                url: "https://api.github.com/repos/facebook/react/commits/b1b0955f2b34286a7408e58463f4cc429627f9a8",
                html_url:
                  "https://github.com/facebook/react/commit/b1b0955f2b34286a7408e58463f4cc429627f9a8",
              },
            ],
          },
          {
            sha: "b1b0955f2b34286a7408e58463f4cc429627f9a8",
            node_id:
              "C_kwDOAJy2KtoAKGIxYjA5NTVmMmIzNDI4NmE3NDA4ZTU4NDYzZjRjYzQyOTYyN2Y5YTg",
            commit: {
              author: {
                name: 'Sebastian "Sebbie" Silbermann',
                email: "sebastian.silbermann@vercel.com",
                date: "2025-09-01T14:40:30Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-09-01T14:40:30Z",
              },
              message:
                "[DevTools] Fix inspected element scroll in Suspense tab (#34355)",
              tree: {
                sha: "87393c5f9f7198565f098889a8912b0b0ac51fb7",
                url: "https://api.github.com/repos/facebook/react/git/trees/87393c5f9f7198565f098889a8912b0b0ac51fb7",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/b1b0955f2b34286a7408e58463f4cc429627f9a8",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJotbBeCRC1aQ7uu5UhlAAAIREQAIf99Pa7Ku43rEqHTbVkQSYx\nsjrTxz3T4TGqTMMMOwOdiMqN82n3bVjEZ3jzXjiB5QJB7b+fEF/X9o/bwlYhCPzS\nGpVBVQJJ1h8kgJ+44Wjzz1WLI5par8h4KYXlTaSmDzntuGXuuhBNjZ84lV5YggAJ\n1ksL3UBL65JEnZCS1NxsyFiN2rfuyLEOGfFmnHkdyj4qCHuugOSiZDAjmTGhsNlw\nPdAaHhjCwvI2AO30et3vUnC3zQkHYp70pXfkaMjGrN43OycGeGIrZA1HSoir/pco\nm2K985bFogE7UuwVRIpN81nuJZEsWwDlRvm2+khU76W9nPdpqdTGGI/cOqVWSzdU\nOswShhQsB4mP+r9dCsXoMhbYZgNDhsrfthwt32Ka81JbR3pognhICp64Iw8rF8uJ\nB8r+LJpD5fDmCNrfw5PQzdfnQut17SJo90h4KOrEvFml0UjZDoGwrd8WOPUWZdNt\nyiIf8OSdNB4cs8eAQ4G94WDjyfFr+8hhQd9nlqCI1D+tqicIEg17rgR5DjPnX+Ln\nhVtayWhh4lfoeKb+yGfCuvP3byqHD3wKrxCKTHdd3P6bW01QdhYJhniMD4Z8+Pcj\ndPLoA017t8wx7RMW561UqV7/YMabJc0pcG6RVUoHp64VhOh2vSsOTSjdpfXsxlGS\nfb/0U97p1jBF12aDrIS0\n=LH+w\n-----END PGP SIGNATURE-----\n",
                payload:
                  'tree 87393c5f9f7198565f098889a8912b0b0ac51fb7\nparent 1549bda33f0df963ae27a590b7191f3de99dad31\nauthor Sebastian "Sebbie" Silbermann <sebastian.silbermann@vercel.com> 1756737630 +0200\ncommitter GitHub <noreply@github.com> 1756737630 +0200\n\n[DevTools] Fix inspected element scroll in Suspense tab (#34355)\n\n',
                verified_at: "2025-09-01T14:40:31Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/b1b0955f2b34286a7408e58463f4cc429627f9a8",
            html_url:
              "https://github.com/facebook/react/commit/b1b0955f2b34286a7408e58463f4cc429627f9a8",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/b1b0955f2b34286a7408e58463f4cc429627f9a8/comments",
            author: {
              login: "eps1lon",
              id: 12292047,
              node_id: "MDQ6VXNlcjEyMjkyMDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/12292047?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/eps1lon",
              html_url: "https://github.com/eps1lon",
              followers_url: "https://api.github.com/users/eps1lon/followers",
              following_url:
                "https://api.github.com/users/eps1lon/following{/other_user}",
              gists_url: "https://api.github.com/users/eps1lon/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/eps1lon/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/eps1lon/subscriptions",
              organizations_url: "https://api.github.com/users/eps1lon/orgs",
              repos_url: "https://api.github.com/users/eps1lon/repos",
              events_url:
                "https://api.github.com/users/eps1lon/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/eps1lon/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "1549bda33f0df963ae27a590b7191f3de99dad31",
                url: "https://api.github.com/repos/facebook/react/commits/1549bda33f0df963ae27a590b7191f3de99dad31",
                html_url:
                  "https://github.com/facebook/react/commit/1549bda33f0df963ae27a590b7191f3de99dad31",
              },
            ],
          },
          {
            sha: "1549bda33f0df963ae27a590b7191f3de99dad31",
            node_id:
              "C_kwDOAJy2KtoAKDE1NDliZGEzM2YwZGY5NjNhZTI3YTU5MGI3MTkxZjNkZTk5ZGFkMzE",
            commit: {
              author: {
                name: "Hendrik Liebau",
                email: "mail@hendrik-liebau.de",
                date: "2025-09-01T10:13:05Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-09-01T10:13:05Z",
              },
              message:
                "[Flight] Only assign `_store` in dev mode when creating lazy types (#34354)\n\nSmall follow-up to #34350. The `_store` property is now only assigned in\ndevelopment mode when creating lazy types. It also uses the `validated`\nvalue that was passed to `createElement`, if applicable.",
              tree: {
                sha: "afc6767fac326fd6f6046013b13221ff936fea18",
                url: "https://api.github.com/repos/facebook/react/git/trees/afc6767fac326fd6f6046013b13221ff936fea18",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/1549bda33f0df963ae27a590b7191f3de99dad31",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJotXGxCRC1aQ7uu5UhlAAAqvIQAD6uMaF9apVaMa0gZmrXvCYj\nDw+bQDZ8dbVKWl76jnWqZVG43zcF+R0yits8YpKl3LfK5U6C91vJzCD5T6vaCDhI\nqtGOe2OAnNRY3jg7XDKFFEvSV1HzXIUop5Fd1pDrVrKzuAFTCT2r7kcXYwozVIZM\nTUUIZbU3AD1lQCj5pdwzjI0vktpUzWMsW0RB11lrOINMmpMbfFuinF0fV+omwFwL\nspLYQdDBuMu4TL+w665hk6L/BYoQxsI6ezs0CXjSMzrrx4bQ/sNHe0Cwgga3z+n3\npUqvspN+apf6QX7F/cuxZf3fFpBDE1s0+HMfRzSe/YP9HpopO6l7zXUaxzYc9To8\n7G8qy/gnTRxDi5XdzbXsDzs1h+MB9RB5NeDqhFC+cWAVM+DOzgn4Ot6xdR61gZF5\niLPVLacTb+qr+M3nXMgSodnc6Lx+1yvZa1xOGNwaabQo0vywfNVrPPAgOccoSFRl\n+3yPNZ3TttDXmJ1o4a6/8h31NGy/vFRw6RkEKX24B/sZjnW7ITEArL8OWEdLFQ7t\nhWQmU6Ql7o3AkBj+cQGssMhXBJ7C6+5XO3WzkDwsxHiVNo1m2QDzw9Q18XC/vIxo\nfS5GFt7e7bS2tLJFxsuAc0NrB8W58oRhHS1h9pBC8AR8GFlEA7ACH8cNoKf+98sK\nVOd7aVLKRasxLmzot3gt\n=Vdcn\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree afc6767fac326fd6f6046013b13221ff936fea18\nparent bb6f0c8d2f29754347db0ff28186dc89c128b6ca\nauthor Hendrik Liebau <mail@hendrik-liebau.de> 1756721585 +0200\ncommitter GitHub <noreply@github.com> 1756721585 +0200\n\n[Flight] Only assign `_store` in dev mode when creating lazy types (#34354)\n\nSmall follow-up to #34350. The `_store` property is now only assigned in\ndevelopment mode when creating lazy types. It also uses the `validated`\nvalue that was passed to `createElement`, if applicable.",
                verified_at: "2025-09-01T10:13:06Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/1549bda33f0df963ae27a590b7191f3de99dad31",
            html_url:
              "https://github.com/facebook/react/commit/1549bda33f0df963ae27a590b7191f3de99dad31",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/1549bda33f0df963ae27a590b7191f3de99dad31/comments",
            author: {
              login: "unstubbable",
              id: 761683,
              node_id: "MDQ6VXNlcjc2MTY4Mw==",
              avatar_url: "https://avatars.githubusercontent.com/u/761683?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/unstubbable",
              html_url: "https://github.com/unstubbable",
              followers_url:
                "https://api.github.com/users/unstubbable/followers",
              following_url:
                "https://api.github.com/users/unstubbable/following{/other_user}",
              gists_url:
                "https://api.github.com/users/unstubbable/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/unstubbable/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/unstubbable/subscriptions",
              organizations_url:
                "https://api.github.com/users/unstubbable/orgs",
              repos_url: "https://api.github.com/users/unstubbable/repos",
              events_url:
                "https://api.github.com/users/unstubbable/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/unstubbable/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "bb6f0c8d2f29754347db0ff28186dc89c128b6ca",
                url: "https://api.github.com/repos/facebook/react/commits/bb6f0c8d2f29754347db0ff28186dc89c128b6ca",
                html_url:
                  "https://github.com/facebook/react/commit/bb6f0c8d2f29754347db0ff28186dc89c128b6ca",
              },
            ],
          },
          {
            sha: "bb6f0c8d2f29754347db0ff28186dc89c128b6ca",
            node_id:
              "C_kwDOAJy2KtoAKGJiNmYwYzhkMmYyOTc1NDM0N2RiMGZmMjgxODZkYzg5YzEyOGI2Y2E",
            commit: {
              author: {
                name: "Hendrik Liebau",
                email: "mail@hendrik-liebau.de",
                date: "2025-09-01T09:03:57Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-09-01T09:03:57Z",
              },
              message:
                "[Flight] Fix wrong missing key warning when static child is blocked (#34350)",
              tree: {
                sha: "e01b60023cb4d6e12c16f5cc11a3d1ee549f80f5",
                url: "https://api.github.com/repos/facebook/react/git/trees/e01b60023cb4d6e12c16f5cc11a3d1ee549f80f5",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/bb6f0c8d2f29754347db0ff28186dc89c128b6ca",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJotWF9CRC1aQ7uu5UhlAAAI7AQAC8AR2s7lDjIF555Pxce7uyW\nWz56cNnMqZ9hEUuZYUnNOX3wDgZAnSGUEiPIaJqhsUZzdk+L1/ttoA28x0mEGQ6f\n/NlNsHpbGA0CkY5cIpp5r94XpE6Nr7FIw3jOibFhImAubvQUdK3DaVWPPowOIMhJ\nGQswujipZ8BStuDFhLAe4JoUThXfclKeAYftWRl3e/WujfjFRYgWrWzkyTFt6g+w\nh7k3CJOnA1RTF8+jdGqzkj5iLabsTZJxVMkxzy+jBk8HKQilwrBuNJx/v+I4NKGn\nqjsXLuveESNAYt+7I4vmNVX91y8Vbb380d2dL8UfmNOO55nwVWejFDkxdRfM5D2V\naZW8N8Xx+jaVAcEEO7GSU6EIbpkz0Noowzyt3lE3KkN2OweSIdxHSEMVZcn+qI/a\nrrUt9jEd8s/21jfFxAFnswgwO3Qrvje1Jk08etiDphx161F8wTqOyCIWbtAerIEN\nEs0urCPrzCFabBzXj81iKdyFvFJCki+dX91tDT1k+1lbLMTmuwMbM6f5BJOJJyoz\ndOL1+vpeuPam3zrwqpMoT9hAb0X5Ucq7OpxzqUgiZDiSL7MFoKoDjZCkfmhPIp4U\nJbClbgMcxcCKP9BkBBJIe0Lw1Quhw1pC1JjvcryJDx9Lp8MKFE3538Av+1/dW9f3\naYkAUG4y2VAzCAlIPERT\n=0hux\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree e01b60023cb4d6e12c16f5cc11a3d1ee549f80f5\nparent aad7c664ffbde52e5d8004b542d83d6d4b7a32a0\nauthor Hendrik Liebau <mail@hendrik-liebau.de> 1756717437 +0200\ncommitter GitHub <noreply@github.com> 1756717437 +0200\n\n[Flight] Fix wrong missing key warning when static child is blocked (#34350)\n\n",
                verified_at: "2025-09-01T09:03:57Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/bb6f0c8d2f29754347db0ff28186dc89c128b6ca",
            html_url:
              "https://github.com/facebook/react/commit/bb6f0c8d2f29754347db0ff28186dc89c128b6ca",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/bb6f0c8d2f29754347db0ff28186dc89c128b6ca/comments",
            author: {
              login: "unstubbable",
              id: 761683,
              node_id: "MDQ6VXNlcjc2MTY4Mw==",
              avatar_url: "https://avatars.githubusercontent.com/u/761683?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/unstubbable",
              html_url: "https://github.com/unstubbable",
              followers_url:
                "https://api.github.com/users/unstubbable/followers",
              following_url:
                "https://api.github.com/users/unstubbable/following{/other_user}",
              gists_url:
                "https://api.github.com/users/unstubbable/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/unstubbable/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/unstubbable/subscriptions",
              organizations_url:
                "https://api.github.com/users/unstubbable/orgs",
              repos_url: "https://api.github.com/users/unstubbable/repos",
              events_url:
                "https://api.github.com/users/unstubbable/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/unstubbable/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "aad7c664ffbde52e5d8004b542d83d6d4b7a32a0",
                url: "https://api.github.com/repos/facebook/react/commits/aad7c664ffbde52e5d8004b542d83d6d4b7a32a0",
                html_url:
                  "https://github.com/facebook/react/commit/aad7c664ffbde52e5d8004b542d83d6d4b7a32a0",
              },
            ],
          },
          {
            sha: "aad7c664ffbde52e5d8004b542d83d6d4b7a32a0",
            node_id:
              "C_kwDOAJy2KtoAKGFhZDdjNjY0ZmZiZGU1MmU1ZDgwMDRiNTQyZDgzZDZkNGI3YTMyYTA",
            commit: {
              author: {
                name: "Hendrik Liebau",
                email: "mail@hendrik-liebau.de",
                date: "2025-08-29T15:22:39Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-29T15:22:39Z",
              },
              message:
                "[Flight] Don't try to close debug channel twice (#34340)\n\nWhen the debug channel was already closed, we must not try to close it\nagain when the Response gets garbage collected.\n\n**Test plan:**\n\n1. reduce the Flight fixture `App` component to a minimum [^1]\n    - remove everything from `<body>`\n    - delete the `console.log` statement\n2. open the app in Firefox (seems to have a more aggressive GC strategy)\n3. wait a few seconds\n\nOn `main`, you will see the following error in the browser console:\n\n```\nTypeError: Can not close stream after closing or error\n```\n\nWith this change, the error is gone.\n\n[^1]: It's a bit concerning that step 1 is needed to reproduce the\nissue. Either GC is behaving differently with the unmodified App, or we\nmay hold on to the Response under certain conditions, potentially\ncreating a memory leak. This needs further investigation.",
              tree: {
                sha: "0687b4a6034030164994ff62532a49ad06252335",
                url: "https://api.github.com/repos/facebook/react/git/trees/0687b4a6034030164994ff62532a49ad06252335",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/aad7c664ffbde52e5d8004b542d83d6d4b7a32a0",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJoscW/CRC1aQ7uu5UhlAAAmv8QAI9cjYNWT6XpWfpzY5lRNJmZ\nQeq0/mwBUidKbNsygutZDqj8TxXl9rgIOHzfvqJvWXjrrU267dQUAqJzBJWAzucJ\nmWDFojMjMXJ276+p7vbPeCx42nqehxIItQXojHNiYO+PuWHoswm1uHNF6J28IgCr\nCxdHPgkA3m2Y1BbTOr48p0xHQfZnT6IM+bT0Z/XUUdN4XTcGk7DEeFeyv/3oy0ah\nqgOHKfRlDnTtwzGs55V60pzBv80HJt3vA5Y48fQrR0eWRCfKlzmxoy6kCpKFNy4i\nOoLY9GOX7T/j0hmdJapnJ7Ar2j8gNNMHhup+dBrwArE6beUGq3w3NfeFSgxhIhyM\n+p3bZBdpu9sptnjswbzvMpOfPHm0Ksb1Ax2A9CTpiLCs1n2i0x7erZUQ3ppxYZp6\n1ZyNwluZ2b1G0n+lIuRLkAoZQWhlhOFAlY7RpEDpe0jaAHG5pQ4qiNvalVKOdwm1\n/B0rBJbYIfTgqAxVESX63ILQdyRqgAMBC4Yt7SuNUjDHPSWHnecLMLiDC4taTaKQ\n66EPhdU2XXhDBKKfuYJKJqgWseCCByxNXmNHz6ApLHcN2mU+wrIHXF72WZlf+Kzs\n0TBzplkZRxXjXD3F9otaD3gf4kXV5a0COZFHOg9WfRBhfMizt+oX2fKNq2wNsD/6\nmcobbqVaLnt/BceImOYu\n=jbnb\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree 0687b4a6034030164994ff62532a49ad06252335\nparent 3fe51c9e147fb5215011cf3fd9544c5a776abf41\nauthor Hendrik Liebau <mail@hendrik-liebau.de> 1756480959 +0200\ncommitter GitHub <noreply@github.com> 1756480959 +0200\n\n[Flight] Don't try to close debug channel twice (#34340)\n\nWhen the debug channel was already closed, we must not try to close it\nagain when the Response gets garbage collected.\n\n**Test plan:**\n\n1. reduce the Flight fixture `App` component to a minimum [^1]\n    - remove everything from `<body>`\n    - delete the `console.log` statement\n2. open the app in Firefox (seems to have a more aggressive GC strategy)\n3. wait a few seconds\n\nOn `main`, you will see the following error in the browser console:\n\n```\nTypeError: Can not close stream after closing or error\n```\n\nWith this change, the error is gone.\n\n[^1]: It's a bit concerning that step 1 is needed to reproduce the\nissue. Either GC is behaving differently with the unmodified App, or we\nmay hold on to the Response under certain conditions, potentially\ncreating a memory leak. This needs further investigation.",
                verified_at: "2025-08-29T15:22:40Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/aad7c664ffbde52e5d8004b542d83d6d4b7a32a0",
            html_url:
              "https://github.com/facebook/react/commit/aad7c664ffbde52e5d8004b542d83d6d4b7a32a0",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/aad7c664ffbde52e5d8004b542d83d6d4b7a32a0/comments",
            author: {
              login: "unstubbable",
              id: 761683,
              node_id: "MDQ6VXNlcjc2MTY4Mw==",
              avatar_url: "https://avatars.githubusercontent.com/u/761683?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/unstubbable",
              html_url: "https://github.com/unstubbable",
              followers_url:
                "https://api.github.com/users/unstubbable/followers",
              following_url:
                "https://api.github.com/users/unstubbable/following{/other_user}",
              gists_url:
                "https://api.github.com/users/unstubbable/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/unstubbable/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/unstubbable/subscriptions",
              organizations_url:
                "https://api.github.com/users/unstubbable/orgs",
              repos_url: "https://api.github.com/users/unstubbable/repos",
              events_url:
                "https://api.github.com/users/unstubbable/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/unstubbable/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "3fe51c9e147fb5215011cf3fd9544c5a776abf41",
                url: "https://api.github.com/repos/facebook/react/commits/3fe51c9e147fb5215011cf3fd9544c5a776abf41",
                html_url:
                  "https://github.com/facebook/react/commit/3fe51c9e147fb5215011cf3fd9544c5a776abf41",
              },
            ],
          },
          {
            sha: "3fe51c9e147fb5215011cf3fd9544c5a776abf41",
            node_id:
              "C_kwDOAJy2KtoAKDNmZTUxYzllMTQ3ZmI1MjE1MDExY2YzZmQ5NTQ0YzVhNzc2YWJmNDE",
            commit: {
              author: {
                name: "Hendrik Liebau",
                email: "mail@hendrik-liebau.de",
                date: "2025-08-29T10:04:27Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-29T10:04:27Z",
              },
              message:
                "[Flight] Use more robust web socket implementation in fixture (#34338)\n\nThe `WebSocketStream` implementation seems to be a bit unreliable. We've\nseen `Cannot close a ERRORED writable stream` errors when expanding the\nlogged deep object, for example. And when reducing the fixture to a\nminimal app, we even get `Connection closed` errors, because the web\nsocket connection is closed before all debug chunks are sent.\n\nWe can improve the reliability of the web socket connection by using a\nnormal `WebSocket` instance on the client, along with manually creating\na `WritableStream` and a `ReadableStream` for processing the messages.\n\nAs an additional benefit, the debug channel now also works in Firefox\nand Safari.\n\nOn the server, we're simplifying the integration with the Express server\na bit by utilizing the `server` property for `WebSocket.Server`, instead\nof the `noServer` property with the manual upgrade handling.",
              tree: {
                sha: "5d39ed2bfb2e396839bc587bcc71968c78cc4551",
                url: "https://api.github.com/repos/facebook/react/git/trees/5d39ed2bfb2e396839bc587bcc71968c78cc4551",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/3fe51c9e147fb5215011cf3fd9544c5a776abf41",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJosXsrCRC1aQ7uu5UhlAAAGHkQAIEPWB6kFJckoyZ9c+N7frpV\nlKDEmGh+9DDF4MvOLJhrT4hEVxmYu7UqY+Ui2+I7PdeZPLl643ASw+P8vL7NUxZw\nlCF0qVjbj3zUuQyWmaQMIW3LaRbIq4mclfai7Ncim3AvANftXsOBWbT3fz1a7YPd\nIi44Tir0pp118If08j0JKo1i9+GJmXGol3vlUvhFpwdA0Z8duelJu0ksi90UjtBj\nWGYv+QQwfh97wTFB/lK4AFo99Y2GyR91Ak+kwtKy00V+2PF452oAdC32zfmMLsBC\nfAFBpXNe8nXMfc5Wuxk2KZsXE+qZgkZXXUrds1EqMc7Y1luyO75mnrRG2iluHlzu\nIQbaSWCpfC/aCllZaI0yseN2ESkcko7eBGU/l3X4Sdr2Nci+LrRw58uEsZ954wax\n1q7+RjLUi1iMmbJ3ItzJrMEPRWNg/ee42nI0Hc8b94X9aMZ6IxM5IFoT8TkdLPy2\noqIuhv8FORO/EwP7QY9sKJ34Y5pcZxRIi2V9ZJMfxIdACW5NuRtRx6mVDR8y/xtS\nY9OADZgX4chlCZZFU/f65rDlmujxphBlh4AAx2swLXH9vTcqFcZq/eYJnPvABW9P\nIHWL/AapOSFlfSYFoqd9ZRa919XqndXUOaUcpj36nz3oziZmNcSrDGuBrrRvARUC\nkeEHpn3lhdYjmz/Fo5F9\n=8j3v\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree 5d39ed2bfb2e396839bc587bcc71968c78cc4551\nparent 4082b0e7d3c042d49ef8987547b923051936956f\nauthor Hendrik Liebau <mail@hendrik-liebau.de> 1756461867 +0200\ncommitter GitHub <noreply@github.com> 1756461867 +0200\n\n[Flight] Use more robust web socket implementation in fixture (#34338)\n\nThe `WebSocketStream` implementation seems to be a bit unreliable. We've\nseen `Cannot close a ERRORED writable stream` errors when expanding the\nlogged deep object, for example. And when reducing the fixture to a\nminimal app, we even get `Connection closed` errors, because the web\nsocket connection is closed before all debug chunks are sent.\n\nWe can improve the reliability of the web socket connection by using a\nnormal `WebSocket` instance on the client, along with manually creating\na `WritableStream` and a `ReadableStream` for processing the messages.\n\nAs an additional benefit, the debug channel now also works in Firefox\nand Safari.\n\nOn the server, we're simplifying the integration with the Express server\na bit by utilizing the `server` property for `WebSocket.Server`, instead\nof the `noServer` property with the manual upgrade handling.",
                verified_at: "2025-08-29T10:04:28Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/3fe51c9e147fb5215011cf3fd9544c5a776abf41",
            html_url:
              "https://github.com/facebook/react/commit/3fe51c9e147fb5215011cf3fd9544c5a776abf41",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/3fe51c9e147fb5215011cf3fd9544c5a776abf41/comments",
            author: {
              login: "unstubbable",
              id: 761683,
              node_id: "MDQ6VXNlcjc2MTY4Mw==",
              avatar_url: "https://avatars.githubusercontent.com/u/761683?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/unstubbable",
              html_url: "https://github.com/unstubbable",
              followers_url:
                "https://api.github.com/users/unstubbable/followers",
              following_url:
                "https://api.github.com/users/unstubbable/following{/other_user}",
              gists_url:
                "https://api.github.com/users/unstubbable/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/unstubbable/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/unstubbable/subscriptions",
              organizations_url:
                "https://api.github.com/users/unstubbable/orgs",
              repos_url: "https://api.github.com/users/unstubbable/repos",
              events_url:
                "https://api.github.com/users/unstubbable/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/unstubbable/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "4082b0e7d3c042d49ef8987547b923051936956f",
                url: "https://api.github.com/repos/facebook/react/commits/4082b0e7d3c042d49ef8987547b923051936956f",
                html_url:
                  "https://github.com/facebook/react/commit/4082b0e7d3c042d49ef8987547b923051936956f",
              },
            ],
          },
          {
            sha: "4082b0e7d3c042d49ef8987547b923051936956f",
            node_id:
              "C_kwDOAJy2KtoAKDQwODJiMGU3ZDNjMDQyZDQ5ZWY4OTg3NTQ3YjkyMzA1MTkzNjk1NmY",
            commit: {
              author: {
                name: "Joseph Savona",
                email: "6425824+josephsavona@users.noreply.github.com",
                date: "2025-08-28T23:21:15Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-28T23:21:15Z",
              },
              message:
                "[compiler] Detect known incompatible libraries (#34027)\n\nA few libraries are known to be incompatible with memoization, whether\nmanually via `useMemo()` or via React Compiler. This puts us in a tricky\nsituation. On the one hand, we understand that these libraries were\ndeveloped prior to our documenting the [Rules of\nReact](https://react.dev/reference/rules), and their designs were the\nresult of trying to deliver a great experience for their users and\nbalance multiple priorities around DX, performance, etc. At the same\ntime, using these libraries with memoization — and in particular with\nautomatic memoization via React Compiler — can break apps by causing the\ncomponents using these APIs not to update. Concretely, the APIs have in\ncommon that they return a function which returns different values over\ntime, but where the function itself does not change. Memoizing the\nresult on the identity of the function will mean that the value never\nchanges. Developers reasonable interpret this as \"React Compiler broke\nmy code\".\n\nOf course, the best solution is to work with developers of these\nlibraries to address the root cause, and we're doing that. We've\npreviously discussed this situation with both of the respective\nlibraries:\n* React Hook Form:\nhttps://github.com/react-hook-form/react-hook-form/issues/11910#issuecomment-2135608761\n* TanStack Table:\nhttps://github.com/facebook/react/issues/33057#issuecomment-2840600158\nand https://github.com/TanStack/table/issues/5567\n\nIn the meantime we need to make sure that React Compiler can work out of\nthe box as much as possible. This means teaching it about popular\nlibraries that cannot be memoized. We also can't silently skip\ncompilation, as this confuses users, so we need these error messages to\nbe visible to users. To that end, this PR adds:\n\n* A flag to mark functions/hooks as incompatible\n* Validation against use of such functions\n* A default type provider to provide declarations for two\nknown-incompatible libraries\n\nNote that Mobx is also incompatible, but the `observable()` function is\ncalled outside of the component itself, so the compiler cannot currently\ndetect it. We may add validation for such APIs in the future.\n\nAgain, we really empathize with the developers of these libraries. We've\ntried to word the error message non-judgementally, because we get that\nit's hard! We're open to feedback about the error message, please let us\nknow.",
              tree: {
                sha: "fb923a6b0dac39b56f3d09d31b3a28b95a21a34b",
                url: "https://api.github.com/repos/facebook/react/git/trees/fb923a6b0dac39b56f3d09d31b3a28b95a21a34b",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/4082b0e7d3c042d49ef8987547b923051936956f",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJosORrCRC1aQ7uu5UhlAAAIywQAE2AK7VVZCPGWi7FPQqlbSJL\nAzdGim0G16tof5+wjeNfaMosr/RXeAjB68y54/96NA43n1jht/KtU4qj1klnP931\nKM8OQ80zvJ5ZDjJWwMIgFFpVrvnlHFRRxynEIlzDAgiDaTZHI86VUu+vSl54Vv9O\nnQLEWPYtFUfezPh0W2cF75+ZzYzNDO9DCPH1wie8Y79gUgVTOivQbxVRFXy180V2\nVOyJcTROWphDaRWTHO5U+XPJ0g31M6/EvP5ogP5STZNiJNQk3DIO4XRHfqewCYFv\nyzJgQJDEVrJHR6XtTMYNe6AGlMAnDU4jHF+V8yAUGIAlxl2bGDqix+1p9MqhZtwJ\ny6a1O4FTF2/7vsVhpmRafhiXb55dAQjyyzVxTQlxRcEXvlJHrVf7D8ZR6ShCABxX\ntXXpnrlf00ffAGtdIJVMDm/+BLg7v3vrXRgXjmZ9kitSWhbkgIfLiRAFOtRJFauJ\njPnd/SYveIRxQKfB7D6WdoW0IBFx5oNAWc7c8OLtCS7+9/fcJWdtvTFC34PS5S8N\n+e09xFN/ZHrMa6idFph5ceSjX/VuyxE9TPHwAzl1uxahSWCKGiGcJfzUJEUZmF1Y\nPygsNLlALmBCpuUk6oote58v+c2FZEVxvzsegSt+p+XzFxQ0gDpqg+u/TQi0XmnU\nszQxaWU9lcDKgRvBPs26\n=jvCm\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree fb923a6b0dac39b56f3d09d31b3a28b95a21a34b\nparent 6b49c449b6d32dcfb846559fd422ff67055b8923\nauthor Joseph Savona <6425824+josephsavona@users.noreply.github.com> 1756423275 -0700\ncommitter GitHub <noreply@github.com> 1756423275 -0700\n\n[compiler] Detect known incompatible libraries (#34027)\n\nA few libraries are known to be incompatible with memoization, whether\nmanually via `useMemo()` or via React Compiler. This puts us in a tricky\nsituation. On the one hand, we understand that these libraries were\ndeveloped prior to our documenting the [Rules of\nReact](https://react.dev/reference/rules), and their designs were the\nresult of trying to deliver a great experience for their users and\nbalance multiple priorities around DX, performance, etc. At the same\ntime, using these libraries with memoization — and in particular with\nautomatic memoization via React Compiler — can break apps by causing the\ncomponents using these APIs not to update. Concretely, the APIs have in\ncommon that they return a function which returns different values over\ntime, but where the function itself does not change. Memoizing the\nresult on the identity of the function will mean that the value never\nchanges. Developers reasonable interpret this as \"React Compiler broke\nmy code\".\n\nOf course, the best solution is to work with developers of these\nlibraries to address the root cause, and we're doing that. We've\npreviously discussed this situation with both of the respective\nlibraries:\n* React Hook Form:\nhttps://github.com/react-hook-form/react-hook-form/issues/11910#issuecomment-2135608761\n* TanStack Table:\nhttps://github.com/facebook/react/issues/33057#issuecomment-2840600158\nand https://github.com/TanStack/table/issues/5567\n\nIn the meantime we need to make sure that React Compiler can work out of\nthe box as much as possible. This means teaching it about popular\nlibraries that cannot be memoized. We also can't silently skip\ncompilation, as this confuses users, so we need these error messages to\nbe visible to users. To that end, this PR adds:\n\n* A flag to mark functions/hooks as incompatible\n* Validation against use of such functions\n* A default type provider to provide declarations for two\nknown-incompatible libraries\n\nNote that Mobx is also incompatible, but the `observable()` function is\ncalled outside of the component itself, so the compiler cannot currently\ndetect it. We may add validation for such APIs in the future.\n\nAgain, we really empathize with the developers of these libraries. We've\ntried to word the error message non-judgementally, because we get that\nit's hard! We're open to feedback about the error message, please let us\nknow.",
                verified_at: "2025-08-28T23:21:16Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/4082b0e7d3c042d49ef8987547b923051936956f",
            html_url:
              "https://github.com/facebook/react/commit/4082b0e7d3c042d49ef8987547b923051936956f",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/4082b0e7d3c042d49ef8987547b923051936956f/comments",
            author: {
              login: "josephsavona",
              id: 6425824,
              node_id: "MDQ6VXNlcjY0MjU4MjQ=",
              avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/josephsavona",
              html_url: "https://github.com/josephsavona",
              followers_url:
                "https://api.github.com/users/josephsavona/followers",
              following_url:
                "https://api.github.com/users/josephsavona/following{/other_user}",
              gists_url:
                "https://api.github.com/users/josephsavona/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/josephsavona/subscriptions",
              organizations_url:
                "https://api.github.com/users/josephsavona/orgs",
              repos_url: "https://api.github.com/users/josephsavona/repos",
              events_url:
                "https://api.github.com/users/josephsavona/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/josephsavona/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "6b49c449b6d32dcfb846559fd422ff67055b8923",
                url: "https://api.github.com/repos/facebook/react/commits/6b49c449b6d32dcfb846559fd422ff67055b8923",
                html_url:
                  "https://github.com/facebook/react/commit/6b49c449b6d32dcfb846559fd422ff67055b8923",
              },
            ],
          },
          {
            sha: "6b49c449b6d32dcfb846559fd422ff67055b8923",
            node_id:
              "C_kwDOAJy2KtoAKDZiNDljNDQ5YjZkMzJkY2ZiODQ2NTU5ZmQ0MjJmZjY3MDU1Yjg5MjM",
            commit: {
              author: {
                name: "Smruti Ranjan Badatya",
                email: "smrutiranjanbadatya2@gmail.com",
                date: "2025-08-28T22:33:12Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-28T22:33:12Z",
              },
              message:
                "Update Code Sandbox CI to Node 20 to Match .nvmrc (#34329)\n\n## Summary\nUpdate the CodeSandbox CI configuration to use Node 20 instead of Node\n18, so that it matches the Node version specified in .nvmrc. This\nensures consistency between local development environments and CI\nbuilds, reducing the risk of version-related build issues.\n\nCloses #34328\n\n## How did you test this change?\n- Verified that .nvmrc specifies Node 20 and .codesandbox/ci.json is\nupdated accordingly.\n- Locally switched to Node 20 using nvm use 20 and successfully ran\nbuild scripts for all packages: `react`, `react-dom`,\n`react-server-dom-webpack`, and `scheduler`.\n- Confirmed there are no Node 20–specific build errors or warnings\nlocally.\n- CI on the feature branch will now run with Node 20, and all builds are\nexpected to succeed.",
              tree: {
                sha: "6be03970b225fe65dcfd9a31a579cd58764c1adb",
                url: "https://api.github.com/repos/facebook/react/git/trees/6be03970b225fe65dcfd9a31a579cd58764c1adb",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/6b49c449b6d32dcfb846559fd422ff67055b8923",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJosNkoCRC1aQ7uu5UhlAAAwckQAHwQmnh99u5Mb0vy0O0aekQb\nJSy91Q7NYpswnvbHHvTGgRKsRSxRQy2F9uG/aIu8D3wujb8oaqehp33lxgErp5m0\nEWjx82/ZxR4m8eRLNx9R65p3FcAQOermqwoEEc8PcrvcPmS6Q1mQcF9sl9VVX9fy\nbmlgUkscl/YC8uSqGvTX08dTPquWKOl+7MiPuvo7BAO/Vd7O5I8NE9+UqE4YWWXU\nes3k3u1V5BG9gVjUjMF+spOEZ+yYPgnCWKm7MSWc0EYQXF+rKHQFmdueuIRQYHzC\nxeL94I3LY7Z8wfPFmL+F63wCEB9U4Xc855yQOuWPdLvs7lhoX7DE9xWzVEwIas6E\nJI1R3exxbCDvHGqzAO2UF1F1eyXrtTeNNsOeaqs+kpg+eE6g0U4ExMJt22cABMzR\nkDPflCg9vvWIqy+xKxNh7L6tyd6dhYv/TKZuoPYT95VI5qSaC8DnA5v6MYDta4OI\nEIabYDfrnkhuO1aFjor+izBhrClhrbul7jghHm14Pfzdvq8v+r0r7jcNpVJ3isDb\nNW4G8goqozCM5naxpUVVxR9spnpb/6H2muTgSEdyD1psdhgjArK+MQw9NC/ru0Ht\nIXHO+uEepBBbqHdjf0Fw1frukS9XTBS51ePSrGdGsa0dkVMwOcrD8m+jO9/MmX0i\n16Kg2bBRzhS/eGzsifoX\n=NYZm\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree 6be03970b225fe65dcfd9a31a579cd58764c1adb\nparent 872b4fef6ded18aa9bda5f7729340384a914ba7b\nauthor Smruti Ranjan Badatya <smrutiranjanbadatya2@gmail.com> 1756420392 +0530\ncommitter GitHub <noreply@github.com> 1756420392 -0400\n\nUpdate Code Sandbox CI to Node 20 to Match .nvmrc (#34329)\n\n## Summary\nUpdate the CodeSandbox CI configuration to use Node 20 instead of Node\n18, so that it matches the Node version specified in .nvmrc. This\nensures consistency between local development environments and CI\nbuilds, reducing the risk of version-related build issues.\n\nCloses #34328\n\n## How did you test this change?\n- Verified that .nvmrc specifies Node 20 and .codesandbox/ci.json is\nupdated accordingly.\n- Locally switched to Node 20 using nvm use 20 and successfully ran\nbuild scripts for all packages: `react`, `react-dom`,\n`react-server-dom-webpack`, and `scheduler`.\n- Confirmed there are no Node 20–specific build errors or warnings\nlocally.\n- CI on the feature branch will now run with Node 20, and all builds are\nexpected to succeed.",
                verified_at: "2025-08-28T22:33:13Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/6b49c449b6d32dcfb846559fd422ff67055b8923",
            html_url:
              "https://github.com/facebook/react/commit/6b49c449b6d32dcfb846559fd422ff67055b8923",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/6b49c449b6d32dcfb846559fd422ff67055b8923/comments",
            author: {
              login: "iamsmruti",
              id: 35039502,
              node_id: "MDQ6VXNlcjM1MDM5NTAy",
              avatar_url:
                "https://avatars.githubusercontent.com/u/35039502?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/iamsmruti",
              html_url: "https://github.com/iamsmruti",
              followers_url: "https://api.github.com/users/iamsmruti/followers",
              following_url:
                "https://api.github.com/users/iamsmruti/following{/other_user}",
              gists_url:
                "https://api.github.com/users/iamsmruti/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/iamsmruti/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/iamsmruti/subscriptions",
              organizations_url: "https://api.github.com/users/iamsmruti/orgs",
              repos_url: "https://api.github.com/users/iamsmruti/repos",
              events_url:
                "https://api.github.com/users/iamsmruti/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/iamsmruti/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "872b4fef6ded18aa9bda5f7729340384a914ba7b",
                url: "https://api.github.com/repos/facebook/react/commits/872b4fef6ded18aa9bda5f7729340384a914ba7b",
                html_url:
                  "https://github.com/facebook/react/commit/872b4fef6ded18aa9bda5f7729340384a914ba7b",
              },
            ],
          },
          {
            sha: "872b4fef6ded18aa9bda5f7729340384a914ba7b",
            node_id:
              "C_kwDOAJy2KtoAKDg3MmI0ZmVmNmRlZDE4YWE5YmRhNWY3NzI5MzQwMzg0YTkxNGJhN2I",
            commit: {
              author: {
                name: "lauren",
                email: "poteto@users.noreply.github.com",
                date: "2025-08-28T22:27:49Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-28T22:27:49Z",
              },
              message:
                "[eprh] Update installation instructions in readme (#34331)\n\nSmall PR to update our readme for eslint-plugin-react-hooks, to better\ndescribe what a minimal but complete eslint config would look like.",
              tree: {
                sha: "9de055b91da1de91e603008cdb67aa1392c99c80",
                url: "https://api.github.com/repos/facebook/react/git/trees/9de055b91da1de91e603008cdb67aa1392c99c80",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/872b4fef6ded18aa9bda5f7729340384a914ba7b",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJosNflCRC1aQ7uu5UhlAAA01kQAACsHodIBJSG17b7RAPqoXzm\nAhXg6OpdTcQ+4XsJwihls4VWIm3rNroqs/n/QgG3pyLQAtAcWvHMNm3nRDjffGW5\n1xuwZNr01ZgZqtmC3PNn3WOVt908Hvyaz4x4gmsju0iP+LywNZ4pYM1f12myIoRq\n5fvOllT8hUCmtExhmTXi72hA5en76d2Ig9NynUW0O9D924i6LJRVWbBz5PpfSfdo\nBwH7j+dl/eHKzqW8ugS53v5PyVpIQB4TApDT59Ezsj59IYtRIVhVQ+kX1yDD0D6X\nsqGMEDvlBAeRgqMrJlkC9DLURl6s2rJHqvTllf31l2DsAjhLF0oa8Wlp0sAMrtel\nsDMlyF4STGwl3ImGy0Ml1DQFO/nzcWYwF+zo8xo+3jZIl5huN9bqzlHGL2GveEsO\noiTfygx6CPSuETRyNRs4B/g7bkKtchLA/q3poIQ0W8U7sU0lZlEdllpgXWq5SyCp\nCgcQ9LzkVo9q2sTNkvJ+2V+YeWxCSN1XXs7UBrKYYH7JvMdsyH5DfnZyHY/z7XCk\nvwdfGrzghOPHse5+NuLlS/nMMlABb5pAdz1Xwa5L/a/Qup76yzRry/SGsm/MMDyI\nYjboVSTKInOceKaRo+cA+IU11XQeWc9Vdwag3BiNykQGknp3rEMbVNEQeCSZvRRf\nC8BW0UkYx5IcIUvX3kNg\n=RImU\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree 9de055b91da1de91e603008cdb67aa1392c99c80\nparent c5362a380fceab6dd62c7fea18c8413647ee44e3\nauthor lauren <poteto@users.noreply.github.com> 1756420069 -0400\ncommitter GitHub <noreply@github.com> 1756420069 -0400\n\n[eprh] Update installation instructions in readme (#34331)\n\nSmall PR to update our readme for eslint-plugin-react-hooks, to better\ndescribe what a minimal but complete eslint config would look like.",
                verified_at: "2025-08-28T22:27:50Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/872b4fef6ded18aa9bda5f7729340384a914ba7b",
            html_url:
              "https://github.com/facebook/react/commit/872b4fef6ded18aa9bda5f7729340384a914ba7b",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/872b4fef6ded18aa9bda5f7729340384a914ba7b/comments",
            author: {
              login: "poteto",
              id: 1390709,
              node_id: "MDQ6VXNlcjEzOTA3MDk=",
              avatar_url: "https://avatars.githubusercontent.com/u/1390709?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/poteto",
              html_url: "https://github.com/poteto",
              followers_url: "https://api.github.com/users/poteto/followers",
              following_url:
                "https://api.github.com/users/poteto/following{/other_user}",
              gists_url: "https://api.github.com/users/poteto/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/poteto/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/poteto/subscriptions",
              organizations_url: "https://api.github.com/users/poteto/orgs",
              repos_url: "https://api.github.com/users/poteto/repos",
              events_url:
                "https://api.github.com/users/poteto/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/poteto/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "c5362a380fceab6dd62c7fea18c8413647ee44e3",
                url: "https://api.github.com/repos/facebook/react/commits/c5362a380fceab6dd62c7fea18c8413647ee44e3",
                html_url:
                  "https://github.com/facebook/react/commit/c5362a380fceab6dd62c7fea18c8413647ee44e3",
              },
            ],
          },
          {
            sha: "c5362a380fceab6dd62c7fea18c8413647ee44e3",
            node_id:
              "C_kwDOAJy2KtoAKGM1MzYyYTM4MGZjZWFiNmRkNjJjN2ZlYTE4Yzg0MTM2NDdlZTQ0ZTM",
            commit: {
              author: {
                name: "Eugene Choi",
                email: "4eugenechoi@gmail.com",
                date: "2025-08-28T20:26:15Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-28T20:26:15Z",
              },
              message:
                '[compiler][playground] (1/N) Config override panel  (#34303)\n\n## Summary\nPart 1 of adding a "Config Override" panel to the React compiler\nplayground. The panel is placed to the left of the current input\nsection, and supports converting the comment pragmas in the input\nsection to a JavaScript-based config. Backwards sync has not been\nimplemented yet.\n\nNOTE: I have added support for a new `OVERRIDE` type pragma to add\nsupport for Map and Function types. (For now, the old pragma format is\nstill intact)\n\n## Testing\nExample of the config overrides synced to the source code:\n<img width="1542" height="527" alt="Screenshot 2025-08-28 at 3 38 13 PM"\nsrc="https://github.com/user-attachments/assets/d46e7660-61b9-4145-93b5-a4005d30064a"\n/>',
              tree: {
                sha: "73ff8137bec82a0a64453b162b76a325ff8024b2",
                url: "https://api.github.com/repos/facebook/react/git/trees/73ff8137bec82a0a64453b162b76a325ff8024b2",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/c5362a380fceab6dd62c7fea18c8413647ee44e3",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJosLtnCRC1aQ7uu5UhlAAA14cQAKZWb8p5SuvgRgQq6xrlMh8e\nz8nBqPLg1Wsx8QAl+vuBDcvWM2nwW/WrWiinhUGQe3prRj55qyLgqlYL/Z8Lfunm\nirHkB0JDnnsTyQwSDM8uoFWNGG9Ufx4UhH7F+qUsN5/xDYFbdswFHTK3rXq40UBO\nEV00olcOOrODFGPtoFCSklk+WeT7DDz9JHyQU6/gouez5TMpWyH2r1m+22v31QZC\ncuka5nExuFOJiiumbsc8XYhnP0UigKzj6VT3IpbrMhGt/oXonLkC89gbdI27BGUv\nqknT3hrmBmqIZdYxOHpndOuxXZVpDAn6mmHgYpRFHYaNgAhGEuyIB9E8vljMxU5D\n7mULgZwvpMF015pYiMpR2idBfZ0mmn0t70cPPaAXL7g4P/tW5MJNQf9lA3IFbCEe\nxHeCMOSR5x/BttAlTsUCW2EL54alruBKc+nFsNhwTGBEbPpm/zaXSIvcCJmd0zGW\n4XJV3xC9bhTDXmoFdB2HAPGAttHwGoXDUGopBV0vbnzeseRDh46gtv86S3vYDmvK\nOCKpiK5HRn27J41AE0QeNyNksmLQliSNFEzljIMDCFIOTget4qXoy8sYoYitxq1e\ngvBjNdSsQ674RqRPjMYKwpUOjt3DwLI3siuGl4e3VuSEq/092JURxSNdodrbC2o/\npWjhFgW5OQugnJ3iKpXx\n=/wvS\n-----END PGP SIGNATURE-----\n",
                payload:
                  'tree 73ff8137bec82a0a64453b162b76a325ff8024b2\nparent 89a803fcec363df9108f2908735e5693280a78b5\nauthor Eugene Choi <4eugenechoi@gmail.com> 1756412775 -0400\ncommitter GitHub <noreply@github.com> 1756412775 -0400\n\n[compiler][playground] (1/N) Config override panel  (#34303)\n\n## Summary\nPart 1 of adding a "Config Override" panel to the React compiler\nplayground. The panel is placed to the left of the current input\nsection, and supports converting the comment pragmas in the input\nsection to a JavaScript-based config. Backwards sync has not been\nimplemented yet.\n\nNOTE: I have added support for a new `OVERRIDE` type pragma to add\nsupport for Map and Function types. (For now, the old pragma format is\nstill intact)\n\n## Testing\nExample of the config overrides synced to the source code:\n<img width="1542" height="527" alt="Screenshot 2025-08-28 at 3 38 13 PM"\nsrc="https://github.com/user-attachments/assets/d46e7660-61b9-4145-93b5-a4005d30064a"\n/>',
                verified_at: "2025-08-28T20:26:16Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/c5362a380fceab6dd62c7fea18c8413647ee44e3",
            html_url:
              "https://github.com/facebook/react/commit/c5362a380fceab6dd62c7fea18c8413647ee44e3",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/c5362a380fceab6dd62c7fea18c8413647ee44e3/comments",
            author: {
              login: "EugeneChoi4",
              id: 20482229,
              node_id: "MDQ6VXNlcjIwNDgyMjI5",
              avatar_url:
                "https://avatars.githubusercontent.com/u/20482229?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/EugeneChoi4",
              html_url: "https://github.com/EugeneChoi4",
              followers_url:
                "https://api.github.com/users/EugeneChoi4/followers",
              following_url:
                "https://api.github.com/users/EugeneChoi4/following{/other_user}",
              gists_url:
                "https://api.github.com/users/EugeneChoi4/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/EugeneChoi4/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/EugeneChoi4/subscriptions",
              organizations_url:
                "https://api.github.com/users/EugeneChoi4/orgs",
              repos_url: "https://api.github.com/users/EugeneChoi4/repos",
              events_url:
                "https://api.github.com/users/EugeneChoi4/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/EugeneChoi4/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "89a803fcec363df9108f2908735e5693280a78b5",
                url: "https://api.github.com/repos/facebook/react/commits/89a803fcec363df9108f2908735e5693280a78b5",
                html_url:
                  "https://github.com/facebook/react/commit/89a803fcec363df9108f2908735e5693280a78b5",
              },
            ],
          },
          {
            sha: "89a803fcec363df9108f2908735e5693280a78b5",
            node_id:
              "C_kwDOAJy2KtoAKDg5YTgwM2ZjZWMzNjNkZjkxMDhmMjkwODczNWU1NjkzMjgwYTc4YjU",
            commit: {
              author: {
                name: 'Sebastian "Sebbie" Silbermann',
                email: "sebastian.silbermann@vercel.com",
                date: "2025-08-28T14:03:54Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-28T14:03:54Z",
              },
              message: "[DevTools] Add breadcrumbs to Suspense tab  (#34312)",
              tree: {
                sha: "b70016d13e5622e3e16db6652d4448e140b6347f",
                url: "https://api.github.com/repos/facebook/react/git/trees/b70016d13e5622e3e16db6652d4448e140b6347f",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/89a803fcec363df9108f2908735e5693280a78b5",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJosGHKCRC1aQ7uu5UhlAAACxcQAJP9tCT+e8AHAB+SPdEfGabb\n5aEn75gO3xc3hmwtVmtUJDJcYredUgpiDkKtIpHfi2iRB/2NEft3DPZDqQHFjR3X\nqq4+Jy99WRQjmt+SP9c/NioNmG68NYVSJKhB7US11sKiSKLPL/pmM8/CVgnO+35n\n/ac71ixxHBQy86mkOueqKS1Ax07pvOJz5IJCAd20ay6EtBIv+RdFlgMZdE+xKrqv\nMrJFKja1J5gC6yDtuD8CSsOr7uB6M3JbSE+YGDjIA7SMDA5vBTdrv3Cq/ZtZccrM\nr+dLng3WGhCjNWRhS5zQKs8VV6U/y5j+LwxxGuWZWSGRoZ+nO+BX545NpLnbo+CC\ng4asQysZ6QKF96yEeYzOa0bpUCfHFSHsH7FbkaIM8yNYnz9RCHmz7ZE0Q90b/Vh5\nZOkuAqnD5KsOcHCBHR2s3URhwQOpF9OAkmDLsMoUmD05rupUc38uT3wO1BzD7HU5\nfskV2Mdm2zVg2FLr1zpb9cXmH1rTdNgp5faxftOWgGtBdbcCjXXEtyZsgPHmBdso\n66aF0hSpXQx6g7/wwNowbY4xAB3Bt9C8poMM0kr0oRsjBrZCRpOukxp/Uq/gUY0c\nhvt7/7Un/ZHvj2gWKDVVCKRfhFnWaZh+aDjbjbMOVeL/ppYyoaHT5m+xFfMKbLuq\n4x2wLouupSJQmRHwj5N3\n=KGSm\n-----END PGP SIGNATURE-----\n",
                payload:
                  'tree b70016d13e5622e3e16db6652d4448e140b6347f\nparent 8d7b5e490320732f40d9c3aa4590b5b0ae5116f5\nauthor Sebastian "Sebbie" Silbermann <sebastian.silbermann@vercel.com> 1756389834 +0200\ncommitter GitHub <noreply@github.com> 1756389834 +0200\n\n[DevTools] Add breadcrumbs to Suspense tab  (#34312)\n\n',
                verified_at: "2025-08-28T14:03:54Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/89a803fcec363df9108f2908735e5693280a78b5",
            html_url:
              "https://github.com/facebook/react/commit/89a803fcec363df9108f2908735e5693280a78b5",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/89a803fcec363df9108f2908735e5693280a78b5/comments",
            author: {
              login: "eps1lon",
              id: 12292047,
              node_id: "MDQ6VXNlcjEyMjkyMDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/12292047?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/eps1lon",
              html_url: "https://github.com/eps1lon",
              followers_url: "https://api.github.com/users/eps1lon/followers",
              following_url:
                "https://api.github.com/users/eps1lon/following{/other_user}",
              gists_url: "https://api.github.com/users/eps1lon/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/eps1lon/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/eps1lon/subscriptions",
              organizations_url: "https://api.github.com/users/eps1lon/orgs",
              repos_url: "https://api.github.com/users/eps1lon/repos",
              events_url:
                "https://api.github.com/users/eps1lon/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/eps1lon/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "8d7b5e490320732f40d9c3aa4590b5b0ae5116f5",
                url: "https://api.github.com/repos/facebook/react/commits/8d7b5e490320732f40d9c3aa4590b5b0ae5116f5",
                html_url:
                  "https://github.com/facebook/react/commit/8d7b5e490320732f40d9c3aa4590b5b0ae5116f5",
              },
            ],
          },
          {
            sha: "8d7b5e490320732f40d9c3aa4590b5b0ae5116f5",
            node_id:
              "C_kwDOAJy2KtoAKDhkN2I1ZTQ5MDMyMDczMmY0MGQ5YzNhYTQ1OTBiNWIwYWU1MTE2ZjU",
            commit: {
              author: {
                name: "Joseph Savona",
                email: "6425824+josephsavona@users.noreply.github.com",
                date: "2025-08-28T00:05:44Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-28T00:05:44Z",
              },
              message:
                "[compiler] Show a ref name hint when assigning to non-ref in a callback (#34298)\n\nIn #34125 I added a hint where if you assign to the .current property of\na frozen object, we suggest naming the variable as `ref` or `-Ref`.\nHowever, the tracking for mutations that assign to .current specifically\nwasn't propagated past function expression boundaries, which meant that\nthe hint only showed up if you mutated the ref in the main body of the\ncomponent/hook. That's less likely to happen since most folks know not\nto access refs in render. What's more likely is that you'll (correctly)\nassign a ref in an effect or callback, but the compiler will throw an\nerror. By showing a hint in this case we can help people understand the\nnaming pattern.\n\n---\n[//]: # (BEGIN SAPLING FOOTER)\nStack created with [Sapling](https://sapling-scm.com). Best reviewed\nwith [ReviewStack](https://reviewstack.dev/facebook/react/pull/34298).\n* #34276\n* __->__ #34298",
              tree: {
                sha: "0244a9d26a8d22eb24ca409da927fe43ce0cef15",
                url: "https://api.github.com/repos/facebook/react/git/trees/0244a9d26a8d22eb24ca409da927fe43ce0cef15",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/8d7b5e490320732f40d9c3aa4590b5b0ae5116f5",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJor51YCRC1aQ7uu5UhlAAAxTwQAJPNkUbIXQoIG8sEaprusE96\nCDhdR1OLSFHE2GbX+s7l4+EHybaJwheBGnxbL/xAMhOKp8tyqcWPYDC6nLLWqnK2\nqA5Mh2UNSGkv+IMP9NA2HGI3PkG2wpD8gHay1n4ba+4YOAlgMsSCHCaTm0sSyufW\nCA+gFbbzadRFuL8ZPOV84J9Z4gv6ZoLGieZLGhggTA+pN09ocDT7uz9ww+50r45d\nIrvbS3yHDfxKxTwwooQeSpEyyYacISk+7oGi0bqQcTVH/sbsrGd+AzhOhVHyAjk9\nGj04ePo1euSWlIKQGaOtNYey9O6kXheZQzmSla1z0srHJ+kyYj5OkOSBR1oRHbpy\nCGM0VbuhGAiybLBqmi+4VVwgHT/30zELBNmabHmxHXyGkxssZkL+they921APqyS\nafFQskT7A3xqsrPXmhoxkFpqt0A2ATrm0YAFzGWAm6deFefnst4v8ZMLnmLfioje\nC5fm5QlLCLrnnohlZMBaS0UvxDEtWYrJSOVUb9jfmhYhIKXP1M+LuQTG7YGU46vi\n8xvzCmWUKNEBPnId83WItSw36kSRLxAxxjFHdJ9iWJiv3gZ8S5EFMqwp3j7bQGwi\nIdcklni40tAj9qcohP9kzw/jIbPv24TIM27KU4kMGq16tvwBrb84IYeEVFnCxorJ\nBcmAADFHi6pUSLU29ZAc\n=Awhf\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree 0244a9d26a8d22eb24ca409da927fe43ce0cef15\nparent 3434ff4f4b89ad9388c6109312ef95c14652ae21\nauthor Joseph Savona <6425824+josephsavona@users.noreply.github.com> 1756339544 -0700\ncommitter GitHub <noreply@github.com> 1756339544 -0700\n\n[compiler] Show a ref name hint when assigning to non-ref in a callback (#34298)\n\nIn #34125 I added a hint where if you assign to the .current property of\na frozen object, we suggest naming the variable as `ref` or `-Ref`.\nHowever, the tracking for mutations that assign to .current specifically\nwasn't propagated past function expression boundaries, which meant that\nthe hint only showed up if you mutated the ref in the main body of the\ncomponent/hook. That's less likely to happen since most folks know not\nto access refs in render. What's more likely is that you'll (correctly)\nassign a ref in an effect or callback, but the compiler will throw an\nerror. By showing a hint in this case we can help people understand the\nnaming pattern.\n\n---\n[//]: # (BEGIN SAPLING FOOTER)\nStack created with [Sapling](https://sapling-scm.com). Best reviewed\nwith [ReviewStack](https://reviewstack.dev/facebook/react/pull/34298).\n* #34276\n* __->__ #34298",
                verified_at: "2025-08-28T00:05:45Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/8d7b5e490320732f40d9c3aa4590b5b0ae5116f5",
            html_url:
              "https://github.com/facebook/react/commit/8d7b5e490320732f40d9c3aa4590b5b0ae5116f5",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/8d7b5e490320732f40d9c3aa4590b5b0ae5116f5/comments",
            author: {
              login: "josephsavona",
              id: 6425824,
              node_id: "MDQ6VXNlcjY0MjU4MjQ=",
              avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/josephsavona",
              html_url: "https://github.com/josephsavona",
              followers_url:
                "https://api.github.com/users/josephsavona/followers",
              following_url:
                "https://api.github.com/users/josephsavona/following{/other_user}",
              gists_url:
                "https://api.github.com/users/josephsavona/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/josephsavona/subscriptions",
              organizations_url:
                "https://api.github.com/users/josephsavona/orgs",
              repos_url: "https://api.github.com/users/josephsavona/repos",
              events_url:
                "https://api.github.com/users/josephsavona/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/josephsavona/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "3434ff4f4b89ad9388c6109312ef95c14652ae21",
                url: "https://api.github.com/repos/facebook/react/commits/3434ff4f4b89ad9388c6109312ef95c14652ae21",
                html_url:
                  "https://github.com/facebook/react/commit/3434ff4f4b89ad9388c6109312ef95c14652ae21",
              },
            ],
          },
          {
            sha: "3434ff4f4b89ad9388c6109312ef95c14652ae21",
            node_id:
              "C_kwDOAJy2KtoAKDM0MzRmZjRmNGI4OWFkOTM4OGM2MTA5MzEyZWY5NWMxNDY1MmFlMjE",
            commit: {
              author: {
                name: "Jack Pope",
                email: "jackpope1@gmail.com",
                date: "2025-08-27T22:05:57Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-27T22:05:57Z",
              },
              message:
                "Add scrollIntoView to fragment instances (#32814)\n\nThis adds `experimental_scrollIntoView(alignToTop)`. It doesn't yet\nsupport `scrollIntoView(options)`.\n\nCases:\n- No host children: Without host children, we represent the virtual\nspace of the Fragment by attempting to scroll to the nearest edge by\nusing its siblings. If the preferred sibling is not found, we'll try the\nother side, and then the parent.\n- 1 or more host children: In order to handle the case of children\nspread between multiple scroll containers, we scroll to each child in\nreverse order based on the `alignToTop` flag.\n\nDue to the complexity of multiple scroll containers and dealing with\nportals, I've added this under a separate feature flag with an\nexperimental prefix. We may stabilize it along with the other APIs, but\nthis allows us to not block the whole feature on it.\n\nThis PR was previously implementing a much more complex approach to\nhandling multiple scroll containers and portals. We're going to start\nwith the simple loop and see if we can find any concrete use cases where\nthat doesn't suffice. 01f31d43013ba7f6f54fd8a36990bbafc3c3cc68 is the\ndiff between approaches here.",
              tree: {
                sha: "0fba3967521419e121a0a2d6159e29cee131b992",
                url: "https://api.github.com/repos/facebook/react/git/trees/0fba3967521419e121a0a2d6159e29cee131b992",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/3434ff4f4b89ad9388c6109312ef95c14652ae21",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJor4FFCRC1aQ7uu5UhlAAAtEcQAJooztEjmEBBYrtPKKgFjxRY\nMpCpwcRVP/+VxoUkbk1WxE0ZO63AaCGI/5DrmMpozpZnHoMXRyYeCJ8PrAW6v6GO\njumLYY2eU6X7sKGEDanGSBM45Tf9ZRGATQxRag8fH76qKhsBYdMJYNWXqMw517M7\nwqz2TbS8My879kG60uwemTr2FR8K2xAj0Gyl6gmCGopMeVOUL6V+Zylrfm1+XYKW\nUMJjZ/SYQZK74xCu52HzFSQnJArPQiG+Galdjc0xEvKSdmBevc+mcaK5jrExcBz+\nM/z7D15gZTBYvZW1u5kzVLATpaclUB/JiGhGZhcvAm86JUEC5xYcnMOqBES96ENR\neCrzZtOTghkjL+J78Zz1zKe1ikr7BBsCzzJDYA5RUqQKUKavEfhlkQ6qHdwWc6bE\nn5+M9nVaezWDAL+CCSsn/4DDnK/WkKTSEeCajjPS/yPpXxOz431XTaeH5d9mTVv+\n9UfwHlG6oQYJHuywCO3IGY6g6U+nNHiq6qNG96ZGREqsZ5vnUuwgt4LQqnTWuz8C\nXlNpidyxRrjsdJTDP2z75I9Z15xixtHxQMxDNjmpbJ9d2Pi3vXYOBqu52COtrfqq\nt1V5nRJc8QaMphn3EXl1Qu0Fbr0qnU+RbJaXP417Sr/BchHXqj2QlQNjAH7o/IH8\nTwUQlsI+kENELjk99xr9\n=5Xyj\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree 0fba3967521419e121a0a2d6159e29cee131b992\nparent bd5b1b7639b818a3fbd33ce83bf022a6f9f27b55\nauthor Jack Pope <jackpope1@gmail.com> 1756332357 -0400\ncommitter GitHub <noreply@github.com> 1756332357 -0400\n\nAdd scrollIntoView to fragment instances (#32814)\n\nThis adds `experimental_scrollIntoView(alignToTop)`. It doesn't yet\nsupport `scrollIntoView(options)`.\n\nCases:\n- No host children: Without host children, we represent the virtual\nspace of the Fragment by attempting to scroll to the nearest edge by\nusing its siblings. If the preferred sibling is not found, we'll try the\nother side, and then the parent.\n- 1 or more host children: In order to handle the case of children\nspread between multiple scroll containers, we scroll to each child in\nreverse order based on the `alignToTop` flag.\n\nDue to the complexity of multiple scroll containers and dealing with\nportals, I've added this under a separate feature flag with an\nexperimental prefix. We may stabilize it along with the other APIs, but\nthis allows us to not block the whole feature on it.\n\nThis PR was previously implementing a much more complex approach to\nhandling multiple scroll containers and portals. We're going to start\nwith the simple loop and see if we can find any concrete use cases where\nthat doesn't suffice. 01f31d43013ba7f6f54fd8a36990bbafc3c3cc68 is the\ndiff between approaches here.",
                verified_at: "2025-08-27T22:05:57Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/3434ff4f4b89ad9388c6109312ef95c14652ae21",
            html_url:
              "https://github.com/facebook/react/commit/3434ff4f4b89ad9388c6109312ef95c14652ae21",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/3434ff4f4b89ad9388c6109312ef95c14652ae21/comments",
            author: {
              login: "jackpope",
              id: 8965173,
              node_id: "MDQ6VXNlcjg5NjUxNzM=",
              avatar_url: "https://avatars.githubusercontent.com/u/8965173?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/jackpope",
              html_url: "https://github.com/jackpope",
              followers_url: "https://api.github.com/users/jackpope/followers",
              following_url:
                "https://api.github.com/users/jackpope/following{/other_user}",
              gists_url:
                "https://api.github.com/users/jackpope/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/jackpope/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/jackpope/subscriptions",
              organizations_url: "https://api.github.com/users/jackpope/orgs",
              repos_url: "https://api.github.com/users/jackpope/repos",
              events_url:
                "https://api.github.com/users/jackpope/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/jackpope/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "bd5b1b7639b818a3fbd33ce83bf022a6f9f27b55",
                url: "https://api.github.com/repos/facebook/react/commits/bd5b1b7639b818a3fbd33ce83bf022a6f9f27b55",
                html_url:
                  "https://github.com/facebook/react/commit/bd5b1b7639b818a3fbd33ce83bf022a6f9f27b55",
              },
            ],
          },
          {
            sha: "bd5b1b7639b818a3fbd33ce83bf022a6f9f27b55",
            node_id:
              "C_kwDOAJy2KtoAKGJkNWIxYjc2MzliODE4YTNmYmQzM2NlODNiZjAyMmE2ZjlmMjdiNTU",
            commit: {
              author: {
                name: "lauren",
                email: "poteto@users.noreply.github.com",
                date: "2025-08-27T21:58:44Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-27T21:58:44Z",
              },
              message:
                "[compiler] Emit better error for unsupported syntax `this` (#34322)",
              tree: {
                sha: "7a16b52d83846d79e5091dbb35246049f5d014c4",
                url: "https://api.github.com/repos/facebook/react/git/trees/7a16b52d83846d79e5091dbb35246049f5d014c4",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/bd5b1b7639b818a3fbd33ce83bf022a6f9f27b55",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJor3+UCRC1aQ7uu5UhlAAAwfUQAE8VIJrV4K8uxfbI0agNbiJd\njSr34mqu2+6BMYf6YqwGD0tGqqXbk0o1ZATDhvDMvUNNYFfEZp8HvYameD1MzEN7\n1a1wW/zqf9DpHXRG58mSQsAEujeheyT8rrbHHRdvp3uNJE/VO1QgRqnn44NEKKmi\nbiKVbPqiN9tkpCMIcu/u5ErStjPh2KfKymYrE4RSg5Z1VfxT+LDwh2TJJGm+snGX\nT0q8/wY94A22WA7yg/tfkq08pQ07k0KP+vXjHIBJh61mrs34876W0OJ6x05GmMCP\nlyAp2/3w1WJ/O8jEccqT1yJXMMUTjmZr/UacoaFudY6xBxx1ry/65Ey5uLhe5x2d\nWLT3mi3MGOxka5OBA7yoXMIM//6MHpw+Tvw2CNtJf5GrQgbTd7VUoZpJEmGkEZkd\n4AqXfdoQ88fFmLKN7YH2FlNh5H2FIB1x61+8CpC1Q1LwFwFUaIkgw2oB0Hcp+QIA\nvOeAO3tH4DFHmkOee2Y4e0ZdZBojR/TGNffWaPfoqJJh+YwVN5eSLV4PVYvlMdqY\nIB0S6XE7eFlyUIMRDANczNLY30aJyUAjQ47TbChgDKLsPVqIgytWX9oPfRJfNHk2\nMlgwzTMBh8mnWgdqaxmEK9fmsV+UQ3BxLL61l1ZOZmD779xRfrRDg3D013wq2To6\nGrWxWMpHcVk7X7EC2sA7\n=L7By\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree 7a16b52d83846d79e5091dbb35246049f5d014c4\nparent 0a1f1fcd5080320139bb51021b4325be65d6e2bd\nauthor lauren <poteto@users.noreply.github.com> 1756331924 -0400\ncommitter GitHub <noreply@github.com> 1756331924 -0400\n\n[compiler] Emit better error for unsupported syntax `this` (#34322)\n\n",
                verified_at: "2025-08-27T21:58:44Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/bd5b1b7639b818a3fbd33ce83bf022a6f9f27b55",
            html_url:
              "https://github.com/facebook/react/commit/bd5b1b7639b818a3fbd33ce83bf022a6f9f27b55",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/bd5b1b7639b818a3fbd33ce83bf022a6f9f27b55/comments",
            author: {
              login: "poteto",
              id: 1390709,
              node_id: "MDQ6VXNlcjEzOTA3MDk=",
              avatar_url: "https://avatars.githubusercontent.com/u/1390709?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/poteto",
              html_url: "https://github.com/poteto",
              followers_url: "https://api.github.com/users/poteto/followers",
              following_url:
                "https://api.github.com/users/poteto/following{/other_user}",
              gists_url: "https://api.github.com/users/poteto/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/poteto/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/poteto/subscriptions",
              organizations_url: "https://api.github.com/users/poteto/orgs",
              repos_url: "https://api.github.com/users/poteto/repos",
              events_url:
                "https://api.github.com/users/poteto/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/poteto/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "0a1f1fcd5080320139bb51021b4325be65d6e2bd",
                url: "https://api.github.com/repos/facebook/react/commits/0a1f1fcd5080320139bb51021b4325be65d6e2bd",
                html_url:
                  "https://github.com/facebook/react/commit/0a1f1fcd5080320139bb51021b4325be65d6e2bd",
              },
            ],
          },
          {
            sha: "0a1f1fcd5080320139bb51021b4325be65d6e2bd",
            node_id:
              "C_kwDOAJy2KtoAKDBhMWYxZmNkNTA4MDMyMDEzOWJiNTEwMjFiNDMyNWJlNjVkNmUyYmQ",
            commit: {
              author: {
                name: "lauren",
                email: "poteto@users.noreply.github.com",
                date: "2025-08-27T18:37:18Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-27T18:37:18Z",
              },
              message:
                "[ci] Cache playwright in run_devtools_e2e_tests (#34320)\n\nI happened to notice that I forgot to cache playwright in\nrun_devtools_e2e_tests, so it would try to install it every time which\ncan randomly take a while to complete (I'm not sure why it's not\ndeterministic, but the dependencies appear to be installed\ninconsistently across multiple workflows).\n\nThis PR adds the same cache we use for other steps that use playwright,\nwhich should shave off some time from this workflow when the cache is\nwarm.\n\nAdditionally I omitted the standalone install-deps command as it appears\nto be redundant and adds a lot of extra time to CI, due to the fact that\nit installs many unrelated dependencies.\n\n---\n[//]: # (BEGIN SAPLING FOOTER)\nStack created with [Sapling](https://sapling-scm.com). Best reviewed\nwith [ReviewStack](https://reviewstack.dev/facebook/react/pull/34320).\n* #34321\n* __->__ #34320",
              tree: {
                sha: "112258083bea8330cb1b75d7ae89de245de7ad87",
                url: "https://api.github.com/repos/facebook/react/git/trees/112258083bea8330cb1b75d7ae89de245de7ad87",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/0a1f1fcd5080320139bb51021b4325be65d6e2bd",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJor1BeCRC1aQ7uu5UhlAAADeEQAG2HnNr8AzTTwcV48WQ3hv7L\nRBdPmFyyRcRyhwJXzOKgn6XP24rI7PISlFXGHsJAY5Qsn8TWe7Q/bPgxdOVDGz6m\n82vi3gitkXKGhRwkSa1XK4CbgHiGUP8yFxHnLe7rbULVfM2qlPVfFzEKgElHSDU8\nchPM/EyYCI0zt8YGczItvV2sYTCckBnhiuR7pm1dzX6LCDl4p2DyNoyjzz2iNt4t\nlCf5cu/xZMAw0ptu+g6sc0zjgDlnam6lVu3PBX7FluDuJAq8M+x4Khp7IYiLcXnh\nwkm2x7wb23OAYrAQ8DEKwuF7L1CRMVTxZ0ArXyG9ODTg6AalwVby1tX8vx1U7FNz\nTbd2oC8HJzQ+y7sQNWSvkCayAxW8YYVPvRWDpbSmO4O36RjERjX343Rm2SWfRqaN\nqTfAnkSC70iOK2hKZXio4iK0XqCE9e2Og5+b0o93CeR91H4ZWCt6aUi88weV8x4D\neOm5V4o04fmg64oa9ggzlvwks27MyvVtslqhcI3OCAVp25IjRHfKZmBhdO67dFB8\nS+8Pp0hbipK88HwjVO8jBdz9BWwi4miGyTg5nNjFT68Xfh5pBckdiLdrJF2aInGB\n0kY5l9VXPdsozZBXptnK8n0ISXzAuzBIfESCJGnuZL86BKPBOlxnIgka4PlXIIBb\ntkfyM0Rr8NfW2+lNAYGM\n=X/6B\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree 112258083bea8330cb1b75d7ae89de245de7ad87\nparent b870042915c8a7cc1524feb7e0b5cbe7453a7648\nauthor lauren <poteto@users.noreply.github.com> 1756319838 -0400\ncommitter GitHub <noreply@github.com> 1756319838 -0400\n\n[ci] Cache playwright in run_devtools_e2e_tests (#34320)\n\nI happened to notice that I forgot to cache playwright in\nrun_devtools_e2e_tests, so it would try to install it every time which\ncan randomly take a while to complete (I'm not sure why it's not\ndeterministic, but the dependencies appear to be installed\ninconsistently across multiple workflows).\n\nThis PR adds the same cache we use for other steps that use playwright,\nwhich should shave off some time from this workflow when the cache is\nwarm.\n\nAdditionally I omitted the standalone install-deps command as it appears\nto be redundant and adds a lot of extra time to CI, due to the fact that\nit installs many unrelated dependencies.\n\n---\n[//]: # (BEGIN SAPLING FOOTER)\nStack created with [Sapling](https://sapling-scm.com). Best reviewed\nwith [ReviewStack](https://reviewstack.dev/facebook/react/pull/34320).\n* #34321\n* __->__ #34320",
                verified_at: "2025-08-27T18:37:19Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/0a1f1fcd5080320139bb51021b4325be65d6e2bd",
            html_url:
              "https://github.com/facebook/react/commit/0a1f1fcd5080320139bb51021b4325be65d6e2bd",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/0a1f1fcd5080320139bb51021b4325be65d6e2bd/comments",
            author: {
              login: "poteto",
              id: 1390709,
              node_id: "MDQ6VXNlcjEzOTA3MDk=",
              avatar_url: "https://avatars.githubusercontent.com/u/1390709?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/poteto",
              html_url: "https://github.com/poteto",
              followers_url: "https://api.github.com/users/poteto/followers",
              following_url:
                "https://api.github.com/users/poteto/following{/other_user}",
              gists_url: "https://api.github.com/users/poteto/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/poteto/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/poteto/subscriptions",
              organizations_url: "https://api.github.com/users/poteto/orgs",
              repos_url: "https://api.github.com/users/poteto/repos",
              events_url:
                "https://api.github.com/users/poteto/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/poteto/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "b870042915c8a7cc1524feb7e0b5cbe7453a7648",
                url: "https://api.github.com/repos/facebook/react/commits/b870042915c8a7cc1524feb7e0b5cbe7453a7648",
                html_url:
                  "https://github.com/facebook/react/commit/b870042915c8a7cc1524feb7e0b5cbe7453a7648",
              },
            ],
          },
          {
            sha: "b870042915c8a7cc1524feb7e0b5cbe7453a7648",
            node_id:
              "C_kwDOAJy2KtoAKGI4NzAwNDI5MTVjOGE3Y2MxNTI0ZmViN2UwYjVjYmU3NDUzYTc2NDg",
            commit: {
              author: {
                name: "lauren",
                email: "poteto@users.noreply.github.com",
                date: "2025-08-27T17:59:26Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-27T17:59:26Z",
              },
              message:
                "[compiler] Validate against component/hook factories (#34305)\n\nPreviously, the compiler would incorrectly attempt to compile nested\ncomponents/hooks defined inside non-React functions. This would lead to\nscope reference errors at runtime because the compiler would optimize\nthe nested React function without understanding its closure over the\nparent function's variables.\n\nThis PR adds detection when non-React functions declare components or\nhooks, and reports a clear error before compilation. I put this under a\nnew compiler flag defaulting to false. I'll run a test on this\ninternally first, but I expect we should be able to just turn it on in\nboth compiler (so we stop miscompiling) and linter.\n\nCloses #33978\n\nPlayground example:\nhttps://react-compiler-playground-git-pr34305-fbopensource.vercel.app/#N4Igzg9grgTgxgUxALhAejQAgAIDcCGANgJYAm+ALggHIQAiAngHb4C2xcRhDAwjApQSkeEVgAcITBEwpgA8jAASECAGswAHSkAPCTAqYAZlCZwKxSZgDmCCgEkmYqBQAU+AJSZgWzJjiSwAwB1GHwxMQQYTABeTBdPaIA+Lx9fPwCDAAt8JlJCBB5sphsYuITk7yY0tPwAOklCnJt4gG5U3wBfNqZ2zH4KWCqAHmJHZ0wGopto4CK8gqmEDsw0RO7O7tT+wcwQsIiYbo6QDqA",
              tree: {
                sha: "c8f09c9c5b9adad54f93bb3540ccc4dad1bb8ddd",
                url: "https://api.github.com/repos/facebook/react/git/trees/c8f09c9c5b9adad54f93bb3540ccc4dad1bb8ddd",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/b870042915c8a7cc1524feb7e0b5cbe7453a7648",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJor0d+CRC1aQ7uu5UhlAAAtFsQAK6cEw4gHs/1mHcaHCuxahp9\nVj6+qabj/+SXWKUFhvP1LP0XqXU5r4tXSYBjbA5IwLGy0QSlUAaK+tYdJGmteCpx\nThg7gM3IDicesLzTUICF2RV/uQyADbUlsFW5EDmlewwwzd9ma4NO9tNdE6nPnXBh\new6AdAsNhf5fcL/ut5M3pMOwPYDa8K9h28JEbXj9L+bqPvv/CrtzbHdE0Ypu/Wvz\nZJSUwWZvY0XqdFlAA7MOaRmi83nUZY7lVpG+2j7oh+lFY3ozHRIP0ETfCZiL0wL8\n/lYJW9y2qr2zih7Vmz8Ty+WdVgtEEvWnRAT/ItD9Yx/6rCqCCYrDz8AsNIZoScjP\nSQh2oAIQh59Xi3TAWXjNVarqKJwSoTfYIZKV3zFgW4yYuuqEhEQNbC/P8Us+Oxbc\n+Ex8LBeer8roZUb7S+Bw11mWTb+VmrlOPd7Asuv59Vr23oOutc/JqhPOXrpM5aNa\n93sfoFxZ1nX1zc9wjg3E91MadZ767QMapKae7TvKZb0NZE6PWPAYlFwnQ0H9e+in\ndbiQSeZaxdUDKFVS4YJPhfXi7ct7RKstfvm33QL3mfPpi0fdkEOBXvTpPO0kX3He\nqLfiO7e9/eerPNBPqJrZPiRKhRpCh9AwtSoICTGbjEvsP5ZR/L5C6j/GpuXk5q7j\nizyYQaz2T3fNORB3aT+r\n=cABT\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree c8f09c9c5b9adad54f93bb3540ccc4dad1bb8ddd\nparent 33a1095d724c5ad0a6238e03e04461b6df5e73e2\nauthor lauren <poteto@users.noreply.github.com> 1756317566 -0400\ncommitter GitHub <noreply@github.com> 1756317566 -0400\n\n[compiler] Validate against component/hook factories (#34305)\n\nPreviously, the compiler would incorrectly attempt to compile nested\ncomponents/hooks defined inside non-React functions. This would lead to\nscope reference errors at runtime because the compiler would optimize\nthe nested React function without understanding its closure over the\nparent function's variables.\n\nThis PR adds detection when non-React functions declare components or\nhooks, and reports a clear error before compilation. I put this under a\nnew compiler flag defaulting to false. I'll run a test on this\ninternally first, but I expect we should be able to just turn it on in\nboth compiler (so we stop miscompiling) and linter.\n\nCloses #33978\n\nPlayground example:\nhttps://react-compiler-playground-git-pr34305-fbopensource.vercel.app/#N4Igzg9grgTgxgUxALhAejQAgAIDcCGANgJYAm+ALggHIQAiAngHb4C2xcRhDAwjApQSkeEVgAcITBEwpgA8jAASECAGswAHSkAPCTAqYAZlCZwKxSZgDmCCgEkmYqBQAU+AJSZgWzJjiSwAwB1GHwxMQQYTABeTBdPaIA+Lx9fPwCDAAt8JlJCBB5sphsYuITk7yY0tPwAOklCnJt4gG5U3wBfNqZ2zH4KWCqAHmJHZ0wGopto4CK8gqmEDsw0RO7O7tT+wcwQsIiYbo6QDqA",
                verified_at: "2025-08-27T17:59:27Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/b870042915c8a7cc1524feb7e0b5cbe7453a7648",
            html_url:
              "https://github.com/facebook/react/commit/b870042915c8a7cc1524feb7e0b5cbe7453a7648",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/b870042915c8a7cc1524feb7e0b5cbe7453a7648/comments",
            author: {
              login: "poteto",
              id: 1390709,
              node_id: "MDQ6VXNlcjEzOTA3MDk=",
              avatar_url: "https://avatars.githubusercontent.com/u/1390709?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/poteto",
              html_url: "https://github.com/poteto",
              followers_url: "https://api.github.com/users/poteto/followers",
              following_url:
                "https://api.github.com/users/poteto/following{/other_user}",
              gists_url: "https://api.github.com/users/poteto/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/poteto/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/poteto/subscriptions",
              organizations_url: "https://api.github.com/users/poteto/orgs",
              repos_url: "https://api.github.com/users/poteto/repos",
              events_url:
                "https://api.github.com/users/poteto/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/poteto/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "33a1095d724c5ad0a6238e03e04461b6df5e73e2",
                url: "https://api.github.com/repos/facebook/react/commits/33a1095d724c5ad0a6238e03e04461b6df5e73e2",
                html_url:
                  "https://github.com/facebook/react/commit/33a1095d724c5ad0a6238e03e04461b6df5e73e2",
              },
            ],
          },
          {
            sha: "33a1095d724c5ad0a6238e03e04461b6df5e73e2",
            node_id:
              "C_kwDOAJy2KtoAKDMzYTEwOTVkNzI0YzVhZDBhNjIzOGUwM2UwNDQ2MWI2ZGY1ZTczZTI",
            commit: {
              author: {
                name: "Joseph Savona",
                email: "6425824+josephsavona@users.noreply.github.com",
                date: "2025-08-27T15:44:09Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-27T15:44:09Z",
              },
              message:
                "[compiler] Infer render helpers for additional validation (#33647)\n\nWe currently assume that any functions passes as props may be event\nhandlers or effect functions, and thus don't check for side effects such\nas mutating globals. However, if a prop is a function that returns JSX\nthat is a sure sign that it's actually a render helper and not an event\nhandler or effect function. So we now emit a `Render` effect for any\nprop that is a JSX-returning function, triggering all of our render\nvalidation.\n\nThis required a small fix to InferTypes: we weren't correctly populating\nthe `return` type of function types during unification. I also improved\nthe printing of types so we can see the inferred return types.\n\n---\n[//]: # (BEGIN SAPLING FOOTER)\nStack created with [Sapling](https://sapling-scm.com). Best reviewed\nwith [ReviewStack](https://reviewstack.dev/facebook/react/pull/33647).\n* #33643\n* #33650\n* #33642\n* __->__ #33647",
              tree: {
                sha: "aeb65be5f56015b21c61e89f987f31904a875730",
                url: "https://api.github.com/repos/facebook/react/git/trees/aeb65be5f56015b21c61e89f987f31904a875730",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/33a1095d724c5ad0a6238e03e04461b6df5e73e2",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJoryfJCRC1aQ7uu5UhlAAAduEQAFNWBE1DufiHXJmPkK4zdhuf\n06H4JWqhi/qI2O1GGseCfhpU54Au9YttdLMs35031ba4euEYNe5/e5eoa8mQx8MO\ni8IbFHuWRkETZHlXE0nCfTgIoolO1yYAv4DIjNGagSLJROKEM0dtijkh7thZH+aU\nNEDTuAzv+zgFJ/nlpYa67zx+267at9YaY6Dz+RjcolCLmWbFhbWiNpVxYBRnu7m7\nqknYIT99IErkVLyrhOg2H1Sqqg9B+Hi1bcB1V99TR36hqa4fCgz5QDbcsHdumwmK\nvK9JtCteBLbXDHoNXPtT67hYq/4uqxr/Pt59nTb1b8uE5ihCEO4JrnhKdfaHtfhf\nxVmW4IBJiCE63PVI5DhiZHO6CxMhF2q4jNwaTtttDaTm9zZ3lgO8GzLxs6Xasytt\nTbL4zF/Nhk00a5ndtmVwst4alFMy3Xv1NQb1LpOj/nyIV9qfMyL6f0wj75grMqxM\nGl/4YnlVB6wsnoGuNv1jvpr7FJq9V7WSiQSpxeFg3X1qtNjAyl4VcUM+i2qGfopK\n2W+Gq+RcPeeNYP58j+78dnHtrhdsu0MnnwXWlv+wvrod1Fk8WgcnWRbUyyzURdd9\nUJowsJpQXVnIXU2XyjH4nKma+WTWKgIQ7gVReZBPIN1WmhuekxVxWSSweQUExthN\n9vUFlpA3dMZ7dfnxWtco\n=X/NC\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree aeb65be5f56015b21c61e89f987f31904a875730\nparent 213594860f456850bd615fcf08c0f0da25a998c5\nauthor Joseph Savona <6425824+josephsavona@users.noreply.github.com> 1756309449 -0700\ncommitter GitHub <noreply@github.com> 1756309449 -0700\n\n[compiler] Infer render helpers for additional validation (#33647)\n\nWe currently assume that any functions passes as props may be event\nhandlers or effect functions, and thus don't check for side effects such\nas mutating globals. However, if a prop is a function that returns JSX\nthat is a sure sign that it's actually a render helper and not an event\nhandler or effect function. So we now emit a `Render` effect for any\nprop that is a JSX-returning function, triggering all of our render\nvalidation.\n\nThis required a small fix to InferTypes: we weren't correctly populating\nthe `return` type of function types during unification. I also improved\nthe printing of types so we can see the inferred return types.\n\n---\n[//]: # (BEGIN SAPLING FOOTER)\nStack created with [Sapling](https://sapling-scm.com). Best reviewed\nwith [ReviewStack](https://reviewstack.dev/facebook/react/pull/33647).\n* #33643\n* #33650\n* #33642\n* __->__ #33647",
                verified_at: "2025-08-27T15:44:09Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/33a1095d724c5ad0a6238e03e04461b6df5e73e2",
            html_url:
              "https://github.com/facebook/react/commit/33a1095d724c5ad0a6238e03e04461b6df5e73e2",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/33a1095d724c5ad0a6238e03e04461b6df5e73e2/comments",
            author: {
              login: "josephsavona",
              id: 6425824,
              node_id: "MDQ6VXNlcjY0MjU4MjQ=",
              avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/josephsavona",
              html_url: "https://github.com/josephsavona",
              followers_url:
                "https://api.github.com/users/josephsavona/followers",
              following_url:
                "https://api.github.com/users/josephsavona/following{/other_user}",
              gists_url:
                "https://api.github.com/users/josephsavona/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/josephsavona/subscriptions",
              organizations_url:
                "https://api.github.com/users/josephsavona/orgs",
              repos_url: "https://api.github.com/users/josephsavona/repos",
              events_url:
                "https://api.github.com/users/josephsavona/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/josephsavona/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "213594860f456850bd615fcf08c0f0da25a998c5",
                url: "https://api.github.com/repos/facebook/react/commits/213594860f456850bd615fcf08c0f0da25a998c5",
                html_url:
                  "https://github.com/facebook/react/commit/213594860f456850bd615fcf08c0f0da25a998c5",
              },
            ],
          },
          {
            sha: "213594860f456850bd615fcf08c0f0da25a998c5",
            node_id:
              "C_kwDOAJy2KtoAKDIxMzU5NDg2MGY0NTY4NTBiZDYxNWZjZjA4YzBmMGRhMjVhOTk4YzU",
            commit: {
              author: {
                name: 'Sebastian "Sebbie" Silbermann',
                email: "sebastian.silbermann@vercel.com",
                date: "2025-08-27T14:00:06Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-27T14:00:06Z",
              },
              message: "[DevTools] Better scrolling in Suspense tab (#34299)",
              tree: {
                sha: "c7f82779171702c00f5e2419481254bb0b67099a",
                url: "https://api.github.com/repos/facebook/react/git/trees/c7f82779171702c00f5e2419481254bb0b67099a",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/213594860f456850bd615fcf08c0f0da25a998c5",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJorw9mCRC1aQ7uu5UhlAAArgYQAHf1e4Ng7m2dtf+HVfdJMv4X\nehMAAfffXBZO44FRXLz9ylgu1hRVqQHNIoIFzI3KvS7ILTadwBsahrAG1SyWd+46\nyEGQgAPSGp3U3eCcDhesqRTj35yGHteOQVA/LxIrD2fYQA4RD+KReRq3dim8cQ2c\nYgsCfvxnGKZQ2798JxnbPPtDMrIh6WVC+7L4hlNWnh2foi6G1FLGU+2ax9Egd4Bc\nmB7tlUAzf493OIdW5JjgqKJ6gdTiq2N8L3zunKVJaS1kT76+78OQ6vQgZo4YhrFr\nHBjkegA1Jdy+kD+4mzGo4APew7Fd/l2naePjpeplG24oJLlZb7LHzAaHDoKSHKto\nYaMbHmB6kSL8tG0dS/Y4q8LQXBk4+SZPco9UCGqk4MZZPGlgHERMZ54cQp5+zvTh\njEFJQ2QwhsCj/ZHnEALmlRYW6UIDn5R42cp4iPiS1d8fMeJe5g6rTVhBv1sPtAS+\nJ8F079VwAcMeDR/tSWvDXweJvAKyAouH/42xSo6WSZ9x2olYb2/XU20Q7y8gFtwV\nsxNo6p9wAqFomdQBA4THVzi4nm2qARWNcdy02X7l6fL190SOtBjc682BAfedtrtQ\nAHTAZ4n6dveqgMad1lma2X124f6QNS31TtBDl/oFPM+6njTmS4kEjeKRHjU8d1mA\no7LLmDXCQdVi45IUNbYo\n=pfsW\n-----END PGP SIGNATURE-----\n",
                payload:
                  'tree c7f82779171702c00f5e2419481254bb0b67099a\nparent 9c2e2b8475fb9d55fe47f55b007fba2d474e06f4\nauthor Sebastian "Sebbie" Silbermann <sebastian.silbermann@vercel.com> 1756303206 +0200\ncommitter GitHub <noreply@github.com> 1756303206 +0200\n\n[DevTools] Better scrolling in Suspense tab (#34299)\n\n',
                verified_at: "2025-08-27T14:00:07Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/213594860f456850bd615fcf08c0f0da25a998c5",
            html_url:
              "https://github.com/facebook/react/commit/213594860f456850bd615fcf08c0f0da25a998c5",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/213594860f456850bd615fcf08c0f0da25a998c5/comments",
            author: {
              login: "eps1lon",
              id: 12292047,
              node_id: "MDQ6VXNlcjEyMjkyMDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/12292047?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/eps1lon",
              html_url: "https://github.com/eps1lon",
              followers_url: "https://api.github.com/users/eps1lon/followers",
              following_url:
                "https://api.github.com/users/eps1lon/following{/other_user}",
              gists_url: "https://api.github.com/users/eps1lon/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/eps1lon/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/eps1lon/subscriptions",
              organizations_url: "https://api.github.com/users/eps1lon/orgs",
              repos_url: "https://api.github.com/users/eps1lon/repos",
              events_url:
                "https://api.github.com/users/eps1lon/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/eps1lon/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "9c2e2b8475fb9d55fe47f55b007fba2d474e06f4",
                url: "https://api.github.com/repos/facebook/react/commits/9c2e2b8475fb9d55fe47f55b007fba2d474e06f4",
                html_url:
                  "https://github.com/facebook/react/commit/9c2e2b8475fb9d55fe47f55b007fba2d474e06f4",
              },
            ],
          },
          {
            sha: "9c2e2b8475fb9d55fe47f55b007fba2d474e06f4",
            node_id:
              "C_kwDOAJy2KtoAKDljMmUyYjg0NzVmYjlkNTVmZTQ3ZjU1YjAwN2ZiYTJkNDc0ZTA2ZjQ",
            commit: {
              author: {
                name: "Hendrik Liebau",
                email: "mail@hendrik-liebau.de",
                date: "2025-08-27T11:50:19Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-27T11:50:19Z",
              },
              message:
                "[Flight] Don't drop debug info if there's only a readable debug channel (#34304)\n\nWhen the Flight Client is waiting for pending debug chunks, it drops the\ndebug info if there is no writable side of the debug channel defined.\nHowever, it should instead check if there's no readable side defined.\n\nFixing this is not only important for browser clients that don't want or\nneed a return channel, but it's also crucial for server-side rendering,\nbecause the Node and Edge clients only accept a readable side of the\ndebug channel. So they can't even define a noop writable side as a\nworkaround.",
              tree: {
                sha: "da892c2c4dfcd83fc0f9a5b0a8d403455f749c08",
                url: "https://api.github.com/repos/facebook/react/git/trees/da892c2c4dfcd83fc0f9a5b0a8d403455f749c08",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/9c2e2b8475fb9d55fe47f55b007fba2d474e06f4",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJorvD7CRC1aQ7uu5UhlAAAIB4QADsRbzreXyg1gsBpvzR3PiVD\n2PtGJXhf4N3jKBAwFmBcrgFr6rXjOL8G0138+iXBFpsSxZT4utH+eei+3s7TSK7W\nMqTA1yr3EJNkW5Bxje5fSwThdZ3S/4QO6fyzb+f7TF5Ai2IYpJ3K0JNbfZbOeTn+\nr5zgr1nsxYsGRIaaTXIOXK+TUyQQn4nyTySOapgAcibkYSRZQDiKck3cT6i/fUyy\nh5HVhzEiFCl/GTqyBPKQ3OBDxDjPU8vJFZJC1EDNDus1VkClsXeBsCf022St96q/\nw+x0Nexph/BOcdhh/rZf+J2WQNmBNKXbUohx0qa3/RX3cpCih7wqZX2V6maPR8ww\npI2zdtQBOv5ibO9aaHMi/1ZQ1IvOVv62imIWN4hqMB0PW1AJllvvVfSPfgUyRd+U\nwMaj+Ju7s8RSfRSTRk5/Oondte+S/gVffc1W4ZsfXrpft/NpsQ8jC9xEwXpuz2Gv\ns03nZzJxRytWDDI+0HxjRVkufK58xk6q+K4em2ffu0wzZm+ehqTdK+DBH8afbIs5\nzYaijkWLggdFX0G8QojliD0vKml+FcFhHJ7HpvRHCT8VYWtFy86Ezh/7sKI847Ce\ned2nzC6YRvKccSaHJFTI5xH+z5iKdpHOm/mDFEDjeaHkifCpqImssIYlOY3T8qlt\nqJcl6I6Xbxi8nCvFkonv\n=XQZR\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree da892c2c4dfcd83fc0f9a5b0a8d403455f749c08\nparent 4123f6b771bb71a2831b1c450c385c38530125a0\nauthor Hendrik Liebau <mail@hendrik-liebau.de> 1756295419 +0200\ncommitter GitHub <noreply@github.com> 1756295419 +0200\n\n[Flight] Don't drop debug info if there's only a readable debug channel (#34304)\n\nWhen the Flight Client is waiting for pending debug chunks, it drops the\ndebug info if there is no writable side of the debug channel defined.\nHowever, it should instead check if there's no readable side defined.\n\nFixing this is not only important for browser clients that don't want or\nneed a return channel, but it's also crucial for server-side rendering,\nbecause the Node and Edge clients only accept a readable side of the\ndebug channel. So they can't even define a noop writable side as a\nworkaround.",
                verified_at: "2025-08-27T11:50:20Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/9c2e2b8475fb9d55fe47f55b007fba2d474e06f4",
            html_url:
              "https://github.com/facebook/react/commit/9c2e2b8475fb9d55fe47f55b007fba2d474e06f4",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/9c2e2b8475fb9d55fe47f55b007fba2d474e06f4/comments",
            author: {
              login: "unstubbable",
              id: 761683,
              node_id: "MDQ6VXNlcjc2MTY4Mw==",
              avatar_url: "https://avatars.githubusercontent.com/u/761683?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/unstubbable",
              html_url: "https://github.com/unstubbable",
              followers_url:
                "https://api.github.com/users/unstubbable/followers",
              following_url:
                "https://api.github.com/users/unstubbable/following{/other_user}",
              gists_url:
                "https://api.github.com/users/unstubbable/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/unstubbable/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/unstubbable/subscriptions",
              organizations_url:
                "https://api.github.com/users/unstubbable/orgs",
              repos_url: "https://api.github.com/users/unstubbable/repos",
              events_url:
                "https://api.github.com/users/unstubbable/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/unstubbable/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "4123f6b771bb71a2831b1c450c385c38530125a0",
                url: "https://api.github.com/repos/facebook/react/commits/4123f6b771bb71a2831b1c450c385c38530125a0",
                html_url:
                  "https://github.com/facebook/react/commit/4123f6b771bb71a2831b1c450c385c38530125a0",
              },
            ],
          },
          {
            sha: "4123f6b771bb71a2831b1c450c385c38530125a0",
            node_id:
              "C_kwDOAJy2KtoAKDQxMjNmNmI3NzFiYjcxYTI4MzFiMWM0NTBjMzg1YzM4NTMwMTI1YTA",
            commit: {
              author: {
                name: 'Sebastian "Sebbie" Silbermann',
                email: "sebastian.silbermann@vercel.com",
                date: "2025-08-26T15:28:36Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-26T15:28:36Z",
              },
              message:
                "[Fizz] Skip past hidden inputs when attempting to hydrate hydration boundaries (#34302)",
              tree: {
                sha: "3308e2d87af80098bafe3f516eec5aa846068305",
                url: "https://api.github.com/repos/facebook/react/git/trees/3308e2d87af80098bafe3f516eec5aa846068305",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/4123f6b771bb71a2831b1c450c385c38530125a0",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJordKkCRC1aQ7uu5UhlAAAgNIQAKtJbU36WdSV57P0mFQFAqT5\nFv8Jm61EUXr87PEoaohZzuLbGUZsFH1vPbSZZWIIdKsTBrPQRdai5IHYOnv44gGs\n3qCStd/B/361MGT/XVtJclnaYGi2jL6mNYp9DWy5w89cqjKRl55uQvTXD3rJe0au\nit3TsfeoGY0lk5nzVwCxrHrBFNUdsV/8petJb/7GPFRtt5dKHu01KZucQf89hTAN\n+35dMup8LQT7Bgzjppvr3OQi+T8Gl3EllaR+mtpSlh6syLi3gK/qR2EHqetxVBE6\nTktI3nKwx+k9i/HW1CHFjvSCYhVGPvoypcY00xb4LPu/qMu1lKvH4aX6j0scl/aK\nxSC+CwV9kPUqSN0yVloHTMNemkO2+SPUP58d0LZ1nz84Vv8BkcOjIHJ/8Y7ex4gM\ndaBsg46bqYHkViMF7pnLfKhBdEycvbYLl04F6q25RANOLNlrsVXtNRP+v0Bnf7DY\nPhBfZVcGgyrWb/CeBtXrKWSt6mJlK1Wmu/ewBYADdwBbhzDimyV1yoIgzHwquTie\nSispLGa5p51kQiZ5bJyzzfxniBBIrs7TX3ikMFfHZ8gx7PhCs11zkvBX8519yWAN\ntDdPNWKWBZM6a8UzOrxWubdeBNvt34Efj3I0zyX63KpCfsYEx54V2LJfofij3DW5\nW9xJ0zpE+R2+W6KHklxQ\n=TKP/\n-----END PGP SIGNATURE-----\n",
                payload:
                  'tree 3308e2d87af80098bafe3f516eec5aa846068305\nparent cb1e73be043513fd52fdf21366aa35c141ec5f1a\nauthor Sebastian "Sebbie" Silbermann <sebastian.silbermann@vercel.com> 1756222116 +0200\ncommitter GitHub <noreply@github.com> 1756222116 +0200\n\n[Fizz] Skip past hidden inputs when attempting to hydrate hydration boundaries (#34302)\n\n',
                verified_at: "2025-08-26T15:28:37Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/4123f6b771bb71a2831b1c450c385c38530125a0",
            html_url:
              "https://github.com/facebook/react/commit/4123f6b771bb71a2831b1c450c385c38530125a0",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/4123f6b771bb71a2831b1c450c385c38530125a0/comments",
            author: {
              login: "eps1lon",
              id: 12292047,
              node_id: "MDQ6VXNlcjEyMjkyMDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/12292047?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/eps1lon",
              html_url: "https://github.com/eps1lon",
              followers_url: "https://api.github.com/users/eps1lon/followers",
              following_url:
                "https://api.github.com/users/eps1lon/following{/other_user}",
              gists_url: "https://api.github.com/users/eps1lon/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/eps1lon/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/eps1lon/subscriptions",
              organizations_url: "https://api.github.com/users/eps1lon/orgs",
              repos_url: "https://api.github.com/users/eps1lon/repos",
              events_url:
                "https://api.github.com/users/eps1lon/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/eps1lon/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "cb1e73be043513fd52fdf21366aa35c141ec5f1a",
                url: "https://api.github.com/repos/facebook/react/commits/cb1e73be043513fd52fdf21366aa35c141ec5f1a",
                html_url:
                  "https://github.com/facebook/react/commit/cb1e73be043513fd52fdf21366aa35c141ec5f1a",
              },
            ],
          },
          {
            sha: "cb1e73be043513fd52fdf21366aa35c141ec5f1a",
            node_id:
              "C_kwDOAJy2KtoAKGNiMWU3M2JlMDQzNTEzZmQ1MmZkZjIxMzY2YWEzNWMxNDFlYzVmMWE",
            commit: {
              author: {
                name: 'Sebastian "Sebbie" Silbermann',
                email: "sebastian.silbermann@vercel.com",
                date: "2025-08-26T15:22:30Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-26T15:22:30Z",
              },
              message:
                "[DevTools] Batch Suspense toggles when advancing the Suspense timeline (#34251)",
              tree: {
                sha: "a76d0086a66e33a07ad4a18d8eeb3caeebc825e8",
                url: "https://api.github.com/repos/facebook/react/git/trees/a76d0086a66e33a07ad4a18d8eeb3caeebc825e8",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/cb1e73be043513fd52fdf21366aa35c141ec5f1a",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJordE2CRC1aQ7uu5UhlAAANQMQAGAj8QtX82R/Dns+VpMSY/w6\nNWFmxY7CnmNYmTdV4mUzhuRPxHLbNvAxeT+y6Vd9y2BK2ntzKUIV1BuwUQ0DtAIl\n009akx4j3TuY7ZnrLMzNAQj5+qXP7nyxeJUsvS7Nf0BylKfDH+oyu/XCsg9gIG4N\nMQf5k4uEEPaSqDVHwXMhIio3mmSE6ZgPjtc+EE25wdBAK80436Wae3hzVfyOXsCG\nppYsSuzOB/R2QtNF24MqkOUELiiK18YijVJK5SdJktzgR15pPg5idIgPbDH1GqDU\nMfC5iDhoHDqZjR/ADQREpb3tRHfSQp+S+b4YoMcXcBoqx6AO0FjSq/azaVJybAw+\njZiVFcQZI5Sz1/TCVbtpakWss7difD4FbiYxbnJ2P+nbciXWgHOLyTgBb9Xsl0DL\njPINpq78ERF/pvUsange7lEL4LRhrzwjwC/AohIOv06VikGRiuR+PF6Ld3p4gC9o\n1Vknhn8LCcLKvUFHKru+56KEQTVielmXhylOBNxHuwnipUc6ZPSLZQhcLJ8eu0pk\nRJaaz2e/jELmkGuy/7TcxqzddQLPI2nLUgRxMvqrffxtSWkNozfKirHw1NLvIOS2\ngaQksFtCr5kgUjJzGtyeTN6BExbq53fsiy/4X5Ok2ED44/bUFIC3JZ+5VdRKFErl\nWu4ueBvBre/Vg4oVPtdR\n=bocY\n-----END PGP SIGNATURE-----\n",
                payload:
                  'tree a76d0086a66e33a07ad4a18d8eeb3caeebc825e8\nparent cacc20e37c9ec320b5d2aa13f86cfc999d269d6b\nauthor Sebastian "Sebbie" Silbermann <sebastian.silbermann@vercel.com> 1756221750 +0200\ncommitter GitHub <noreply@github.com> 1756221750 +0200\n\n[DevTools] Batch Suspense toggles when advancing the Suspense timeline (#34251)\n\n',
                verified_at: "2025-08-26T15:22:30Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/cb1e73be043513fd52fdf21366aa35c141ec5f1a",
            html_url:
              "https://github.com/facebook/react/commit/cb1e73be043513fd52fdf21366aa35c141ec5f1a",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/cb1e73be043513fd52fdf21366aa35c141ec5f1a/comments",
            author: {
              login: "eps1lon",
              id: 12292047,
              node_id: "MDQ6VXNlcjEyMjkyMDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/12292047?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/eps1lon",
              html_url: "https://github.com/eps1lon",
              followers_url: "https://api.github.com/users/eps1lon/followers",
              following_url:
                "https://api.github.com/users/eps1lon/following{/other_user}",
              gists_url: "https://api.github.com/users/eps1lon/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/eps1lon/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/eps1lon/subscriptions",
              organizations_url: "https://api.github.com/users/eps1lon/orgs",
              repos_url: "https://api.github.com/users/eps1lon/repos",
              events_url:
                "https://api.github.com/users/eps1lon/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/eps1lon/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "cacc20e37c9ec320b5d2aa13f86cfc999d269d6b",
                url: "https://api.github.com/repos/facebook/react/commits/cacc20e37c9ec320b5d2aa13f86cfc999d269d6b",
                html_url:
                  "https://github.com/facebook/react/commit/cacc20e37c9ec320b5d2aa13f86cfc999d269d6b",
              },
            ],
          },
          {
            sha: "cacc20e37c9ec320b5d2aa13f86cfc999d269d6b",
            node_id:
              "C_kwDOAJy2KtoAKGNhY2MyMGUzN2M5ZWMzMjBiNWQyYWExM2Y4NmNmYzk5OWQyNjlkNmI",
            commit: {
              author: {
                name: "Hendrik Liebau",
                email: "mail@hendrik-liebau.de",
                date: "2025-08-26T15:15:25Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-26T15:15:25Z",
              },
              message:
                "[Flight] Wait for both streams to end before closing the response (#34301)\n\nWhen a debug channel is defined, we must ensure that we don't close the\nFlight Client's response when the debug channel's readable is done, but\nthe RSC stream is still flowing. Now, we wait for both streams to end\nbefore closing the response.",
              tree: {
                sha: "8aaaa885d989978b9ca52ad2dd46518b4740d3da",
                url: "https://api.github.com/repos/facebook/react/git/trees/8aaaa885d989978b9ca52ad2dd46518b4740d3da",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/cacc20e37c9ec320b5d2aa13f86cfc999d269d6b",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJorc+NCRC1aQ7uu5UhlAAAyesQACrWazWqPrDQ9tylFT/gDSen\nWWWBa9CJydsOodSuqrhi/quiYcS6JmduQmJMcryVyhtyH31sJPXeV3xD1g6VL3rE\neVtzE1gON4sLjPvdW/X4tTmJzqVaon7aOtM67iVDhWI+J1ElI40UxVb5q4itz2qX\nAWm5CI1OY6ipwyuUXQpTn4zV3uXGAWrbdsiPAarf8NFjIenn0m17ROmQ7IkV7rNw\nBdtTEwHbT2ck1tB9YXffL1o9BGLRZOcE4DODQTAlddUPwKQcRFfp/+hD30tKKlsU\n+a777GZuK/Pq4AJrUnP9G9jGfspo5j4zX9465WMsikxMYIYfyZjtAP5PwERhW+DG\nwKuqHz4NqECYtNaU5aPa4q2RWiusIsfQ3bOdCXyU0MtMiwKQAhQrURATYzXWb7Af\ndX/arm3eC/FJJl6gSWFNWA4u/C5p9u0e4uJxRqZU/qx1sTgYoKnzOy9xljS1969/\nwVi9ItuydIztFDHabH35wv0D0DyoM9t0NRwjWjxr8FCZPsREV10ZGfulcQ+zqDKw\nf2NW7XI90jhy2klq3bjwIrAdJBuCFhJ1rmUgFv+6nKqP0cAl0rFs70DqosK52wcc\nweK990EY+c6IdLaY+cP/vDQNEAxuvtvuQOS4dOZ5aQiZHtrKvyKXcxL70Kk8eit9\nWUCAsMBOq6nS19O8QXVp\n=Itd0\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree 8aaaa885d989978b9ca52ad2dd46518b4740d3da\nparent bb7c9c1b8af82236125418f9fd3aa4de6fcc17e1\nauthor Hendrik Liebau <mail@hendrik-liebau.de> 1756221325 +0200\ncommitter GitHub <noreply@github.com> 1756221325 +0200\n\n[Flight] Wait for both streams to end before closing the response (#34301)\n\nWhen a debug channel is defined, we must ensure that we don't close the\nFlight Client's response when the debug channel's readable is done, but\nthe RSC stream is still flowing. Now, we wait for both streams to end\nbefore closing the response.",
                verified_at: "2025-08-26T15:15:26Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/cacc20e37c9ec320b5d2aa13f86cfc999d269d6b",
            html_url:
              "https://github.com/facebook/react/commit/cacc20e37c9ec320b5d2aa13f86cfc999d269d6b",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/cacc20e37c9ec320b5d2aa13f86cfc999d269d6b/comments",
            author: {
              login: "unstubbable",
              id: 761683,
              node_id: "MDQ6VXNlcjc2MTY4Mw==",
              avatar_url: "https://avatars.githubusercontent.com/u/761683?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/unstubbable",
              html_url: "https://github.com/unstubbable",
              followers_url:
                "https://api.github.com/users/unstubbable/followers",
              following_url:
                "https://api.github.com/users/unstubbable/following{/other_user}",
              gists_url:
                "https://api.github.com/users/unstubbable/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/unstubbable/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/unstubbable/subscriptions",
              organizations_url:
                "https://api.github.com/users/unstubbable/orgs",
              repos_url: "https://api.github.com/users/unstubbable/repos",
              events_url:
                "https://api.github.com/users/unstubbable/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/unstubbable/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "bb7c9c1b8af82236125418f9fd3aa4de6fcc17e1",
                url: "https://api.github.com/repos/facebook/react/commits/bb7c9c1b8af82236125418f9fd3aa4de6fcc17e1",
                html_url:
                  "https://github.com/facebook/react/commit/bb7c9c1b8af82236125418f9fd3aa4de6fcc17e1",
              },
            ],
          },
          {
            sha: "bb7c9c1b8af82236125418f9fd3aa4de6fcc17e1",
            node_id:
              "C_kwDOAJy2KtoAKGJiN2M5YzFiOGFmODIyMzYxMjU0MThmOWZkM2FhNGRlNmZjYzE3ZTE",
            commit: {
              author: {
                name: 'Sebastian "Sebbie" Silbermann',
                email: "sebastian.silbermann@vercel.com",
                date: "2025-08-26T15:13:37Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-26T15:13:37Z",
              },
              message:
                "Create more realistic containers in DevTools fixture (#34296)",
              tree: {
                sha: "4893a17552699546dbadbca86e5f290e210bcff8",
                url: "https://api.github.com/repos/facebook/react/git/trees/4893a17552699546dbadbca86e5f290e210bcff8",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/bb7c9c1b8af82236125418f9fd3aa4de6fcc17e1",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJorc8hCRC1aQ7uu5UhlAAALdAQAAEJABjnWEo4NTzqynyUj8VM\nXpmG5L07BZKZCEKDJpWNqNQvFgC85Nh8Yqu/HWQeGMquThYdBq1RwrdQ+Wm22Eov\nHelzfGadFut8KmIasDHNlcnMwrKCcDT/ugYPj/kpTRtBcimkE6MmZrW/tuPQk4yn\n5VYLRg6k+rexiAN8znOhOcGNX1WKeJGl6Z9FtveEvoLJeXxyxmy9CMsonw8+raMj\nZJGOIrnE7bBMKXv3sv8etLGrHNhTTALLah7zEFjbVnvwWGze8IbgrxHIFAtTQfGA\ns/dYfNWqGiTtpbOkv4jJKJ0vIoRN31efpDUVhg1OLqx3FNAoMjDy7T7S84T+M8l1\nfHECV/wcxSFUHDOL3uJ/zbi6HsPde7Q2MZtFw1PGv8/SorJ14MT+lb7vQRlcgePp\nwYYhc9TKa0JP88rlOQt0bxZDjbK2dHaHkCxn/kkx9j8wwbtXL6ZeUYSM6j8np81J\nrBErqyVffaGuQLtV219JJckIM7r0pNU8zlLHMmOocfnyk/a3WWAhzlIak6jlIIJZ\npUe9IdErFdy6+KPtuzX8fk2KhS3xQj9tDOLZmx4g56HFFAaY0wZw5VkYiY/Z0G8t\ndzSHbVEMJscVtzOPWKj9EaWmcrGn1oNB2wQkoWET/jryXOJTvZKN4cywuKGia905\nGlQnYnS3YQiXZsjqM0Cn\n=wg4s\n-----END PGP SIGNATURE-----\n",
                payload:
                  'tree 4893a17552699546dbadbca86e5f290e210bcff8\nparent 44f8451ede5001b2c31de339890b9160fc06e436\nauthor Sebastian "Sebbie" Silbermann <sebastian.silbermann@vercel.com> 1756221217 +0200\ncommitter GitHub <noreply@github.com> 1756221217 +0200\n\nCreate more realistic containers in DevTools fixture (#34296)\n\n',
                verified_at: "2025-08-26T15:13:38Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/bb7c9c1b8af82236125418f9fd3aa4de6fcc17e1",
            html_url:
              "https://github.com/facebook/react/commit/bb7c9c1b8af82236125418f9fd3aa4de6fcc17e1",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/bb7c9c1b8af82236125418f9fd3aa4de6fcc17e1/comments",
            author: {
              login: "eps1lon",
              id: 12292047,
              node_id: "MDQ6VXNlcjEyMjkyMDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/12292047?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/eps1lon",
              html_url: "https://github.com/eps1lon",
              followers_url: "https://api.github.com/users/eps1lon/followers",
              following_url:
                "https://api.github.com/users/eps1lon/following{/other_user}",
              gists_url: "https://api.github.com/users/eps1lon/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/eps1lon/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/eps1lon/subscriptions",
              organizations_url: "https://api.github.com/users/eps1lon/orgs",
              repos_url: "https://api.github.com/users/eps1lon/repos",
              events_url:
                "https://api.github.com/users/eps1lon/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/eps1lon/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "44f8451ede5001b2c31de339890b9160fc06e436",
                url: "https://api.github.com/repos/facebook/react/commits/44f8451ede5001b2c31de339890b9160fc06e436",
                html_url:
                  "https://github.com/facebook/react/commit/44f8451ede5001b2c31de339890b9160fc06e436",
              },
            ],
          },
          {
            sha: "44f8451ede5001b2c31de339890b9160fc06e436",
            node_id:
              "C_kwDOAJy2KtoAKDQ0Zjg0NTFlZGU1MDAxYjJjMzFkZTMzOTg5MGI5MTYwZmMwNmU0MzY",
            commit: {
              author: {
                name: 'Sebastian "Sebbie" Silbermann',
                email: "sebastian.silbermann@vercel.com",
                date: "2025-08-26T15:09:55Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-26T15:09:55Z",
              },
              message: "[DevTools] Avoid tearing Suspense store (#34294)",
              tree: {
                sha: "a17434c8ca6edd49f71061b94b9905675f28ada7",
                url: "https://api.github.com/repos/facebook/react/git/trees/a17434c8ca6edd49f71061b94b9905675f28ada7",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/44f8451ede5001b2c31de339890b9160fc06e436",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJorc5DCRC1aQ7uu5UhlAAAfV8QAG0oY9mfsYNRcsJAYlXA3Gzy\nQmqtk23I54D8CJUghfWLcy1ThhmGtiYt6nMacBZE/aAGwbN01R8/9pb0fJfDii89\n/M6F/LPahZrXMGjjoZjI0+8IJaPiK2RUSj00IdWn+91sYtYtLKUEL+Fu2X06TTvW\nZyguK0LTQ2PRAATr0hkUqhMzbGprsftBvAjQdLb7SrGE32i/BlTqQGjD1aWdxZCu\n7swhSXpldRrdazWlMGVZQ6nzCfEUbfa9FSHF8w6HRgM12hKdl4F+DNV6vyXwF+PK\np/7W7sMKr/QyQKCtuC1KdnD9WcsBr3UD32N/qVMqP07uJc51Ck5K10cmQMWyMsEE\n0AmgL5WqJ1uyZEpCK4UefwNYXu/unQCPxVQ/g8hQjctwMYFIxLhK5nLeTMjgjopM\nda/WkB90J5BGGf4XPd1Oj31pZmF1oIspB+Yl9wXbJL1r5exjZtEggQ88N8xBxe54\nAdhHIvIv3ZpH8mJ5S/cnMSm/GVXMFS8Q+0H3sqKGhWG7eABY/hCjbl4MBccVgQ73\nIvVh2kK2zvIH0yqj3c5xFPzF3ORr/dTlRlrmf8W5tfUZllMdAiplQEkefQH1iMn4\nW4gsBNkbaVd5fmTgmlgkPj9dc/qIQZueg5z/gCB/CI5yHM7p880nPXPohWmAyNef\noUtAxyl7d+OrB38UcEoa\n=JCdP\n-----END PGP SIGNATURE-----\n",
                payload:
                  'tree a17434c8ca6edd49f71061b94b9905675f28ada7\nparent ad4ecb6e6eb0663dcabb5967fe23a8c4331c18d0\nauthor Sebastian "Sebbie" Silbermann <sebastian.silbermann@vercel.com> 1756220995 +0200\ncommitter GitHub <noreply@github.com> 1756220995 +0200\n\n[DevTools] Avoid tearing Suspense store (#34294)\n\n',
                verified_at: "2025-08-26T15:09:56Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/44f8451ede5001b2c31de339890b9160fc06e436",
            html_url:
              "https://github.com/facebook/react/commit/44f8451ede5001b2c31de339890b9160fc06e436",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/44f8451ede5001b2c31de339890b9160fc06e436/comments",
            author: {
              login: "eps1lon",
              id: 12292047,
              node_id: "MDQ6VXNlcjEyMjkyMDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/12292047?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/eps1lon",
              html_url: "https://github.com/eps1lon",
              followers_url: "https://api.github.com/users/eps1lon/followers",
              following_url:
                "https://api.github.com/users/eps1lon/following{/other_user}",
              gists_url: "https://api.github.com/users/eps1lon/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/eps1lon/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/eps1lon/subscriptions",
              organizations_url: "https://api.github.com/users/eps1lon/orgs",
              repos_url: "https://api.github.com/users/eps1lon/repos",
              events_url:
                "https://api.github.com/users/eps1lon/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/eps1lon/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "ad4ecb6e6eb0663dcabb5967fe23a8c4331c18d0",
                url: "https://api.github.com/repos/facebook/react/commits/ad4ecb6e6eb0663dcabb5967fe23a8c4331c18d0",
                html_url:
                  "https://github.com/facebook/react/commit/ad4ecb6e6eb0663dcabb5967fe23a8c4331c18d0",
              },
            ],
          },
          {
            sha: "ad4ecb6e6eb0663dcabb5967fe23a8c4331c18d0",
            node_id:
              "C_kwDOAJy2KtoAKGFkNGVjYjZlNmViMDY2M2RjYWJiNTk2N2ZlMjNhOGM0MzMxYzE4ZDA",
            commit: {
              author: {
                name: 'Sebastian "Sebbie" Silbermann',
                email: "sebastian.silbermann@vercel.com",
                date: "2025-08-26T13:18:20Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-26T13:18:20Z",
              },
              message:
                "[DevTools] Fix symbolication with Index Source Maps (#34300)",
              tree: {
                sha: "44072ac7ef1972b8d3e8201c29eeb6cf0c0295b6",
                url: "https://api.github.com/repos/facebook/react/git/trees/44072ac7ef1972b8d3e8201c29eeb6cf0c0295b6",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/ad4ecb6e6eb0663dcabb5967fe23a8c4331c18d0",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJorbQcCRC1aQ7uu5UhlAAAaXUQABJMihyv31YlaLg7DVD3FgPw\nzVXuEU04b2ZhVnunlRvcevFYHasugMbizUflfTAmySIoSz7D2kZuTsProENXYsm2\nEY6ZIS6ZCKq4ahjxy3nQNEOw+JIRZdfCKoVc59SN7uLwnaWLEswRIxRuy7pqfNVm\n3l8aFL8wVuCH8+VMWIM7COIYbe+6anK/EWtzNiVozaSQfJeBsNcLXy3jOOd1SEQM\nXYxWgJluVc5e6+7o+oEzWafbU+DZck4ffX0vDL24st6GQXlgfFIeBHAiaL7D/Etk\neIL6VITn04yvP859vtv5u6ITfaR+132h5SS4CwcdXEg0mSMNtC3LmirtQn6RoWze\nWyriFXKTTMHnnKy6GQWwjlB61xPluF+Z60ZAQ2JxlZ8v6Yo/w/JRvQpW3P1tS2kD\nZsUR7FxRnY+sTIbrYZDGjNOK75Q5SmhcQ5KV99VnsA2rkWEFLex9ahxsA6NbZmBk\n5F5KgkEPKBx+EThCD7+RLIRlx21oLqS/WAWYcmifB7u2xjTSS5a0LGwAFNPF/vEc\nIjO4Ik07F4GW40exQmWm0Ev8QgMlp4inLY3+pB7mq4VUH8Aes12IqXQJoBypQGVP\nMYhi5wayGbqMCKX7psX8b24hji21b6XdeqdypJaYCO6+pQY0pUbMVAIAEDpf+ALz\nJZ10VbExXWXQJ4Wif16n\n=I+Ch\n-----END PGP SIGNATURE-----\n",
                payload:
                  'tree 44072ac7ef1972b8d3e8201c29eeb6cf0c0295b6\nparent 26e87b5f15d80fd4aaf9909f90de0857e54c1129\nauthor Sebastian "Sebbie" Silbermann <sebastian.silbermann@vercel.com> 1756214300 +0200\ncommitter GitHub <noreply@github.com> 1756214300 +0200\n\n[DevTools] Fix symbolication with Index Source Maps (#34300)\n\n',
                verified_at: "2025-08-26T13:18:21Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/ad4ecb6e6eb0663dcabb5967fe23a8c4331c18d0",
            html_url:
              "https://github.com/facebook/react/commit/ad4ecb6e6eb0663dcabb5967fe23a8c4331c18d0",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/ad4ecb6e6eb0663dcabb5967fe23a8c4331c18d0/comments",
            author: {
              login: "eps1lon",
              id: 12292047,
              node_id: "MDQ6VXNlcjEyMjkyMDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/12292047?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/eps1lon",
              html_url: "https://github.com/eps1lon",
              followers_url: "https://api.github.com/users/eps1lon/followers",
              following_url:
                "https://api.github.com/users/eps1lon/following{/other_user}",
              gists_url: "https://api.github.com/users/eps1lon/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/eps1lon/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/eps1lon/subscriptions",
              organizations_url: "https://api.github.com/users/eps1lon/orgs",
              repos_url: "https://api.github.com/users/eps1lon/repos",
              events_url:
                "https://api.github.com/users/eps1lon/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/eps1lon/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "26e87b5f15d80fd4aaf9909f90de0857e54c1129",
                url: "https://api.github.com/repos/facebook/react/commits/26e87b5f15d80fd4aaf9909f90de0857e54c1129",
                html_url:
                  "https://github.com/facebook/react/commit/26e87b5f15d80fd4aaf9909f90de0857e54c1129",
              },
            ],
          },
          {
            sha: "26e87b5f15d80fd4aaf9909f90de0857e54c1129",
            node_id:
              "C_kwDOAJy2KtoAKDI2ZTg3YjVmMTVkODBmZDRhYWY5OTA5ZjkwZGUwODU3ZTU0YzExMjk",
            commit: {
              author: {
                name: "Jan Kassens",
                email: "jkassens@meta.com",
                date: "2025-08-25T16:58:12Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-25T16:58:12Z",
              },
              message:
                "Fix Flow issue from land race (#34293)\n\nA Flow upgrade removed the bundled library definitinos for\nSynthaticEvent and we probably want to use our internal definitions.\nThose are not properly typed at this point yet, but we can look into\nthat as a followup.",
              tree: {
                sha: "25e75105278c5623708e81319c91d2969f627f86",
                url: "https://api.github.com/repos/facebook/react/git/trees/25e75105278c5623708e81319c91d2969f627f86",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/26e87b5f15d80fd4aaf9909f90de0857e54c1129",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJorJYkCRC1aQ7uu5UhlAAAh6cQAFWEZuICI34e8fE62Ap15awA\nMG404v3PL09jkqlSuruizxJGBeNJeGLIgmfakfLKzLTsUmSEeGaEqODfk9Z39tUq\n+S8ov1vCEQdY+cVOXVWPSUlkyq8GEkPMR5WRg/1Vo3mEh/zTtxVmBXT/MPgP25R3\nMoPO8vDZ3Zklq271Hke98esrXIMxt4AWnHHTbGZr5sWMrTnwonG3wxiVwPQCr94J\nsO/4DMGRWt6G23ZoVetKAXfZ+8QX7C08+3ylMXEKt3AG+zF6WxQjlvwS79dsWSYU\nwCxaYatdkiLQueZQITw0xOsE4iGHlcyws7RHZRYY2EVWdX2gdSgxy33oZfYk4mgS\nYMx5yaYskUqrB8jECnfMTdydHhgGSrcEZbXnJEsCqYNgNQ3v5PiHJmDXzJmIC1TX\ntovURP05seyMDOI8iRBzYfwLZkncfPaYJfZKTUaqXX5yZzRuRgJUzq9X/sSg+Nh4\nXnboWwWMuiaN/Pmc1eOYIu89arBPFU1fmr798xbM/qD6Hc8Q6hfOqrBYgaMB98Ji\nqTnGR7KlttJZadxVrnLy23J7/i2VCGq9XrsYJQVVc/qGqatsr1OVwZU6fKYD/p7Z\nHcDEjnCvtcIRvSCezfT6XE96aggD+WKSSIezfaoHoL61s+ld5BdNXopskUsZ2QYA\nNN1tY6pB8lIDBn6RjwmK\n=1yur\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree 25e75105278c5623708e81319c91d2969f627f86\nparent 75dc0026d665bd3c92e677c91252e6bf18303e45\nauthor Jan Kassens <jkassens@meta.com> 1756141092 -0400\ncommitter GitHub <noreply@github.com> 1756141092 -0400\n\nFix Flow issue from land race (#34293)\n\nA Flow upgrade removed the bundled library definitinos for\nSynthaticEvent and we probably want to use our internal definitions.\nThose are not properly typed at this point yet, but we can look into\nthat as a followup.",
                verified_at: "2025-08-25T16:58:13Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/26e87b5f15d80fd4aaf9909f90de0857e54c1129",
            html_url:
              "https://github.com/facebook/react/commit/26e87b5f15d80fd4aaf9909f90de0857e54c1129",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/26e87b5f15d80fd4aaf9909f90de0857e54c1129/comments",
            author: {
              login: "kassens",
              id: 11849,
              node_id: "MDQ6VXNlcjExODQ5",
              avatar_url: "https://avatars.githubusercontent.com/u/11849?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/kassens",
              html_url: "https://github.com/kassens",
              followers_url: "https://api.github.com/users/kassens/followers",
              following_url:
                "https://api.github.com/users/kassens/following{/other_user}",
              gists_url: "https://api.github.com/users/kassens/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/kassens/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/kassens/subscriptions",
              organizations_url: "https://api.github.com/users/kassens/orgs",
              repos_url: "https://api.github.com/users/kassens/repos",
              events_url:
                "https://api.github.com/users/kassens/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/kassens/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "75dc0026d665bd3c92e677c91252e6bf18303e45",
                url: "https://api.github.com/repos/facebook/react/commits/75dc0026d665bd3c92e677c91252e6bf18303e45",
                html_url:
                  "https://github.com/facebook/react/commit/75dc0026d665bd3c92e677c91252e6bf18303e45",
              },
            ],
          },
          {
            sha: "75dc0026d665bd3c92e677c91252e6bf18303e45",
            node_id:
              "C_kwDOAJy2KtoAKDc1ZGMwMDI2ZDY2NWJkM2M5MmU2NzdjOTEyNTJlNmJmMTgzMDNlNDU",
            commit: {
              author: {
                name: 'Sebastian "Sebbie" Silbermann',
                email: "sebastian.silbermann@vercel.com",
                date: "2025-08-25T15:47:29Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-25T15:47:29Z",
              },
              message:
                "[DevTools] Initial version of Suspense timeline (#34233)",
              tree: {
                sha: "ad0f77fc9ed7909816b01db7b3e42822a3a2bd72",
                url: "https://api.github.com/repos/facebook/react/git/trees/ad0f77fc9ed7909816b01db7b3e42822a3a2bd72",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/75dc0026d665bd3c92e677c91252e6bf18303e45",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJorIWRCRC1aQ7uu5UhlAAAaZUQAGCiUwdaSN2JZT5etMTJZAZZ\ns2W9rxgyJ2e56igk1ZGYLWFao+OatqWT1U1ArFxDk6TlVdS5/ZU4A+W9lVVCMf4G\nnzpDkQzHb9oZHowMlg27pURnJ5ySOSrGwOLC1Iu0WzHxq28F0tRmgSj0B5s8bHx2\nuTVaXbDamHot6cv0rSoiyOaU7xk/eLPD8zmROLxqyYyCRsfKRFm+2YHCFQDp6A+b\nSyE3dSSf3LTMzkd5/YIpfALz7uLFntJVTMY3+QKi703af8Xsj4KPLsLs7hcx7WmV\nz9RtlVeZov79i0SvYcMwWV+dqrr95Z/AhcMmcU6unuzXp5bP+c3EGE4Ev11WcPNu\nj/DGIK8MiSx399kuehK+Rpsmnw/OJHfjq7S7MdDpJGIbqAi7Bu7utp72waJ+gocV\npdOpMQcIg5nuLd7tH7cS0BvEMtGkLcvc1GED9GRiM+64c2Cun+BtUkTuv4gNhXcx\nLHV1923Q24jUhiZdUhyAOoLsQUt1IGDdtBY7bJM21+6AjJaqfxHSNih4cv0/fV3I\nCO7f+LxB2XUVBoIXDEGmiBtHxeBd9mXAaviUsP7xTxmkQ4+41zap8y/UcHchFRri\nEblYYW4n6VyR3CGyf8iPGmtXNga+rc9aie/F7oXfDZoQo9IjfPktDjtN9RVb79cU\nRAxe5Y8+oiT98GADJo9x\n=YFAk\n-----END PGP SIGNATURE-----\n",
                payload:
                  'tree ad0f77fc9ed7909816b01db7b3e42822a3a2bd72\nparent df10309e2b884868d2032a4d6506714b3953b027\nauthor Sebastian "Sebbie" Silbermann <sebastian.silbermann@vercel.com> 1756136849 +0200\ncommitter GitHub <noreply@github.com> 1756136849 +0200\n\n[DevTools] Initial version of Suspense timeline (#34233)\n\n',
                verified_at: "2025-08-25T15:47:29Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/75dc0026d665bd3c92e677c91252e6bf18303e45",
            html_url:
              "https://github.com/facebook/react/commit/75dc0026d665bd3c92e677c91252e6bf18303e45",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/75dc0026d665bd3c92e677c91252e6bf18303e45/comments",
            author: {
              login: "eps1lon",
              id: 12292047,
              node_id: "MDQ6VXNlcjEyMjkyMDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/12292047?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/eps1lon",
              html_url: "https://github.com/eps1lon",
              followers_url: "https://api.github.com/users/eps1lon/followers",
              following_url:
                "https://api.github.com/users/eps1lon/following{/other_user}",
              gists_url: "https://api.github.com/users/eps1lon/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/eps1lon/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/eps1lon/subscriptions",
              organizations_url: "https://api.github.com/users/eps1lon/orgs",
              repos_url: "https://api.github.com/users/eps1lon/repos",
              events_url:
                "https://api.github.com/users/eps1lon/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/eps1lon/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "df10309e2b884868d2032a4d6506714b3953b027",
                url: "https://api.github.com/repos/facebook/react/commits/df10309e2b884868d2032a4d6506714b3953b027",
                html_url:
                  "https://github.com/facebook/react/commit/df10309e2b884868d2032a4d6506714b3953b027",
              },
            ],
          },
          {
            sha: "df10309e2b884868d2032a4d6506714b3953b027",
            node_id:
              "C_kwDOAJy2KtoAKGRmMTAzMDllMmI4ODQ4NjhkMjAzMmE0ZDY1MDY3MTRiMzk1M2IwMjc",
            commit: {
              author: {
                name: "Jan Kassens",
                email: "jkassens@meta.com",
                date: "2025-08-25T15:02:56Z",
              },
              committer: {
                name: "GitHub",
                email: "noreply@github.com",
                date: "2025-08-25T15:02:56Z",
              },
              message:
                "Update Flow to 0.279 (#34277)\n\nMultiple of these version upgrades required minor additional\nannotations.",
              tree: {
                sha: "fe3b247593933d95a6d3d60342ef3156ef856d5f",
                url: "https://api.github.com/repos/facebook/react/git/trees/fe3b247593933d95a6d3d60342ef3156ef856d5f",
              },
              url: "https://api.github.com/repos/facebook/react/git/commits/df10309e2b884868d2032a4d6506714b3953b027",
              comment_count: 0,
              verification: {
                verified: true,
                reason: "valid",
                signature:
                  "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJorHsgCRC1aQ7uu5UhlAAAbO0QAJcirAXvRPlPOXCrFbgNIIrF\nE9NAw3tFSl7ZEpfL9x55UmiIw33+a2log7tXrrx2SBUxj3hDyengY36dxs8500f9\nJJTca1g5mUlfeMy/MsHT0Y/Rl7daPOgf4g6JdKtVmKjjbxK8V19OF7CUVq2ShbwA\nsiUVIevclDM49dvcIHcerxQTLZ/WXsY+RwnfRdxqzpwi7Lb7ayo7mdecUM+VSaTO\nTvdUtgviHMUD8jiaxn/Wd0HiOj3wvvubM1XM1aARwFgqgN9wrSPvZjex55iccJQL\nj8tlqPPFulaertWpWh5yWtxLFP2ySrfpQIdy6YR9qBHaKq1ZISGuF1VwcMiTMRrv\nlVoLF/tL7sqW4y/L73TmSVkLihJ5BPwFDQ4XKQlXPm6ISbrZYOaOtJELiXth4AHi\nGCk2/cgluPiBKhe44Jqa6JzqfBdifJ7o8Riqhlg3uKkje8FMRSlQFoQhyp2GcYlw\nD0FNMUKjUvBLtoMYiVdnCh2NaQfXoX81P0Brfwi0MeygOGa+vTgi75kJBGiobYmV\nUqIHucDeD9VChJt/RvKWMQxg1GOF0mx5kSQ5zONdhcQWAMlPPrMFLEjYOkKQ/g6D\n23++hrZuVWypMWAkqVQCFIcgwhQMS9lkU7PWfzbdXz/+gh76SsuA1s743B573fpj\nXl5NTmQb28xs6aRxf/U9\n=sLmS\n-----END PGP SIGNATURE-----\n",
                payload:
                  "tree fe3b247593933d95a6d3d60342ef3156ef856d5f\nparent e42f3d30cae0f3b9c6205ba37fd9497c6fc199e8\nauthor Jan Kassens <jkassens@meta.com> 1756134176 -0400\ncommitter GitHub <noreply@github.com> 1756134176 -0400\n\nUpdate Flow to 0.279 (#34277)\n\nMultiple of these version upgrades required minor additional\nannotations.",
                verified_at: "2025-08-25T15:02:57Z",
              },
            },
            url: "https://api.github.com/repos/facebook/react/commits/df10309e2b884868d2032a4d6506714b3953b027",
            html_url:
              "https://github.com/facebook/react/commit/df10309e2b884868d2032a4d6506714b3953b027",
            comments_url:
              "https://api.github.com/repos/facebook/react/commits/df10309e2b884868d2032a4d6506714b3953b027/comments",
            author: {
              login: "kassens",
              id: 11849,
              node_id: "MDQ6VXNlcjExODQ5",
              avatar_url: "https://avatars.githubusercontent.com/u/11849?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/kassens",
              html_url: "https://github.com/kassens",
              followers_url: "https://api.github.com/users/kassens/followers",
              following_url:
                "https://api.github.com/users/kassens/following{/other_user}",
              gists_url: "https://api.github.com/users/kassens/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/kassens/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/kassens/subscriptions",
              organizations_url: "https://api.github.com/users/kassens/orgs",
              repos_url: "https://api.github.com/users/kassens/repos",
              events_url:
                "https://api.github.com/users/kassens/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/kassens/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            committer: {
              login: "web-flow",
              id: 19864447,
              node_id: "MDQ6VXNlcjE5ODY0NDQ3",
              avatar_url:
                "https://avatars.githubusercontent.com/u/19864447?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/web-flow",
              html_url: "https://github.com/web-flow",
              followers_url: "https://api.github.com/users/web-flow/followers",
              following_url:
                "https://api.github.com/users/web-flow/following{/other_user}",
              gists_url:
                "https://api.github.com/users/web-flow/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/web-flow/subscriptions",
              organizations_url: "https://api.github.com/users/web-flow/orgs",
              repos_url: "https://api.github.com/users/web-flow/repos",
              events_url:
                "https://api.github.com/users/web-flow/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/web-flow/received_events",
              type: "User",
              user_view_type: "public",
              site_admin: false,
            },
            parents: [
              {
                sha: "e42f3d30cae0f3b9c6205ba37fd9497c6fc199e8",
                url: "https://api.github.com/repos/facebook/react/commits/e42f3d30cae0f3b9c6205ba37fd9497c6fc199e8",
                html_url:
                  "https://github.com/facebook/react/commit/e42f3d30cae0f3b9c6205ba37fd9497c6fc199e8",
              },
            ],
          },
        ]);
      }

      // test-user/commit-errorの場合はエラーを返す
      if (owner === "test-user" && repo === "commit-error") {
        return HttpResponse.json(
          {
            message: "Server Error",
            documentation_url:
              "https://docs.github.com/rest/reference/repos#list-commits",
          },
          { status: 500 },
        );
      }

      // test-user/language-errorの場合は正常に空の配列を返す
      if (owner === "test-user" && repo === "language-error") {
        return HttpResponse.json([]);
      }

      return HttpResponse.json([]);
    },
  ),
];
