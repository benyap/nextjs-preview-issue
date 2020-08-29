import React, { FC } from "react";
import { useRouter } from "next/router";

export const Preview: FC = () => {
  const { push, reload } = useRouter();

  const previewMode = () => {
    const token = prompt("Enter preview token.");
    if (token) push(`/api/preview?token=${token}`);
  };

  return (
    <div>
      <button onClick={previewMode}>PREVIEW MODE</button>
      <button onClick={() => fetch("/api/clear-preview").then(reload)}>
        EXIT PREVIEW
      </button>
      <p>Use any of the following as preview tokens.</p>
      <pre>token1</pre>
      <pre>token2</pre>
    </div>
  );
};
