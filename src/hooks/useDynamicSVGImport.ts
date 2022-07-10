import { useCallback, useEffect, useState } from 'react'

interface UseDynamicSVGImportOptions {
    onCompleted?: (name: string, SvgIcon: string | undefined) => void
    onError?: (err: Error) => void
}

export function useDynamicSVGImport(
    name: string,
    options: UseDynamicSVGImportOptions = {}
) {
    const [ImportedIcon, setImportedIcon] = useState<string>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error>()
    const { onCompleted, onError } = options

    const getIcon = useCallback(async (name: string) => {
        setLoading(false)
        try {
            const importedIcon = await import(`assets/weather-icons/${name}`)
            setImportedIcon(importedIcon.default)
            onCompleted?.(name, importedIcon.default)
        } catch (err) {
            if (err instanceof Error) {
                setError(err)
                onError?.(err)
            }
        } finally {
            setLoading(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getIcon(name)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { error, loading, SvgIcon: ImportedIcon }
}
