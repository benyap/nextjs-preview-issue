import React, { FC } from "react";
import { useRouter } from "next/router";

export const Preview: FC = () => {
  const { push } = useRouter();

  const preview = (id: string) => () => {
    const token = prompt("Enter preview token.");
    if (token) push(`/api/preview?token=${token}&pageId=${id}`);
  };

  return (
    <div>
      <button onClick={preview("wip")}>PREVIEW WIP</button>
      <button onClick={preview("draft")}>PREVIEW DRAFT</button>
      <button
        onClick={() =>
          fetch("/api/preview?clear=true").then(() =>
            alert("Exited preview mode")
          )
        }
      >
        EXIT PREVIEW
      </button>
      <p>Use any of the following as preview tokens.</p>
      <pre>token1</pre>
      <pre>token2</pre>
    </div>
  );
};
