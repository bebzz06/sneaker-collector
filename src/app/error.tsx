"use client";

import { useEffect } from "react";
import { Button } from "components";
import { BUTTON_OPTIONS, BUTTON_SIZE } from "components/Button/constants";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={`error_container`}>
      <div className={`error_handler`}>
        <h2>Something went wrong!</h2>
        <Button
          size={BUTTON_SIZE.SMALL}
          text={BUTTON_OPTIONS.ERROR}
          onClick={() => reset()}
        />
      </div>
    </div>
  );
}
