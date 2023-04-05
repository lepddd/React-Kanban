import { useCallback } from "react";

const useResizeArea = (refElement, isEditing) => {
  const resize = (ref) => {
    ref.current.style.height = "auto";
    ref.current.style.height = ref.current.scrollHeight + "px";
  };

  const resizeArea = useCallback(() => resize(refElement), [isEditing]);

  return { resizeArea };
};

export default useResizeArea;
