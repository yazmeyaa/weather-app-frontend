import { useEffect, useRef, useState } from "react";

interface UseDynamicSVGImportOptions {
  onCompleted?: (name: string, SvgIcon: string | undefined) => void;
  onError?: (err: Error) => void;
}

export function useDynamicSVGImport(
  name: string,
  options: UseDynamicSVGImportOptions = {}
) {
  const ImportedIconRef = useRef<string>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const { onCompleted, onError } = options;

  useEffect(() => {
    setLoading(true);

    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(
            `assets/weather-icons/${name}${name.split(".")[1] ? "" : ".svg"}`
          )
        ).default;
        onCompleted?.(name, ImportedIconRef.current);
      } catch (err) {
        if (err instanceof Error) {
          onError?.(err);
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };
    importIcon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}
