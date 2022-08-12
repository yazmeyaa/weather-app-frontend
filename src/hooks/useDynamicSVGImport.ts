import { useEffect, useRef, useState } from 'react'

export interface UseDynamicSVGImportOptions {
    onCompleted?: (
        name: string,
        SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
    ) => void
    onError?: (err: Error) => void
}

export function useDynamicSVGImport(
    name: string,
    options: UseDynamicSVGImportOptions = {}
) {
    const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    const { onCompleted, onError } = options

    useEffect(() => {
        setLoading(true)
        const importIcon = async (): Promise<void> => {
            try {
                ImportedIconRef.current = (
                    await import(
                        `!!@svgr/webpack?-svgo,+titleProp,+ref!../assets/weather-icons/${name}.svg`
                    )
                ).default

                onCompleted?.(name, ImportedIconRef.current)
            } catch (err) {
                if (err instanceof Error) {
                    onError?.(err)
                    setError(err)
                }
            } finally {
                setLoading(false)
            }
        }
        importIcon()
    }, [name, onCompleted, onError])

    return { error, loading, SvgIcon: ImportedIconRef.current }
}
