import PostTag from "@components/post_tag";
import { DotsHorizontal } from "@images/heroicons/solid";
import { useMemo, useState } from "react";

export default function PostTags({ tags, limit = 2 }) {
  const [isFullDisplay, setIsFullDisplay] = useState(false);
  const pageTags = useMemo(
    () => (typeof tags === "string" ? JSON.parse(tags) : tags),
    [tags]
  );

  function displayedTags(): string[] {
    if (isFullDisplay) {
      return pageTags;
    }

    return pageTags.slice(0, limit);
  }

  function isOverLimit() {
    return pageTags.length > limit && !isFullDisplay;
  }

  return (
    <ul className="flex flex-wrap items-center">
      {displayedTags().map((tag) => (
        <PostTag key={tag} tag={tag} />
      ))}
      {isOverLimit() && (
        <li>
          <button
            className="relative z-10 flex items-center justify-center block px-2 py-1 mb-2 mr-2 text-xs bg-blue-200 border border-transparent rounded focus:outline-none transition-colors duration-75 ease-in-out focus:border-blue-700"
            onClick={() => setIsFullDisplay(true)}
          >
            <DotsHorizontal className="w-4 h-4 text-blue-700" />
          </button>
        </li>
      )}
    </ul>
  );
}
