"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { giscusConfig } from "@/lib/config";

export default function Comments() {
  const { theme } = useTheme();

  // Don't render if Giscus is not configured
  if (!giscusConfig.repo || !giscusConfig.repoId) {
    return (
      <div className="text-center py-8 text-gray-600 dark:text-gray-400">
        <p className="mb-2">Comments are not configured yet.</p>
        <p className="text-sm">
          Please set up Giscus in your environment variables to enable comments.
        </p>
        <a
          href="https://giscus.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          Learn how to configure Giscus →
        </a>
      </div>
    );
  }

  return (
    <Giscus
      repo={giscusConfig.repo as `${string}/${string}`}
      repoId={giscusConfig.repoId}
      category={giscusConfig.category}
      categoryId={giscusConfig.categoryId}
      mapping={giscusConfig.mapping}
      strict={giscusConfig.strict}
      reactionsEnabled={giscusConfig.reactionsEnabled}
      emitMetadata={giscusConfig.emitMetadata}
      inputPosition={giscusConfig.inputPosition}
      theme={theme === "dark" ? "dark" : "light"}
      lang={giscusConfig.lang}
      loading={giscusConfig.loading}
    />
  );
}

