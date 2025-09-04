import { Metadata } from "next";

import { getRepositoryDetailAction } from "@/actions/repository-actions";

interface GenerateRepositoryMetadataProps {
  owner: string;
  name: string;
}

// メタデータを生成する関数
export async function generateRepositoryMetadata({
  owner,
  name,
}: GenerateRepositoryMetadataProps): Promise<Metadata> {
  try {
    const result = await getRepositoryDetailAction(owner, name);

    if (result.error || !result.data) {
      return {
        title: "リポジトリが見つかりません - GitHub リポジトリ検索",
        description: "指定されたリポジトリが見つかりませんでした。",
      };
    }

    const repository = result.data;

    return {
      title: `${repository.full_name} - GitHub リポジトリ検索`,
      description:
        repository.description || `${repository.full_name}の詳細情報`,
      openGraph: {
        title: repository.full_name,
        description:
          repository.description || `${repository.full_name}の詳細情報`,
        images: [
          {
            url: repository.owner.avatar_url,
            width: 400,
            height: 400,
            alt: `${repository.owner.login} avatar`,
          },
        ],
      },
    };
  } catch {
    return {
      title: "リポジトリが見つかりません - GitHub リポジトリ検索",
      description: "指定されたリポジトリが見つかりませんでした。",
    };
  }
}

export const repositoryViewport = {
  width: "device-width",
  initialScale: 1,
};
