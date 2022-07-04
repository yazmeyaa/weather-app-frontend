import { useRef } from "react";
import { iconsCondition } from "components/conditionIcons";

export function useDynamicSVGImport(codeToSearch: number) {
    const ImportedIconRef = useRef();
    const isSVGAvailable = iconsCondition.find((item) => item.code === codeToSearch)


    const importIcon = async () => {
        try {
            if(!isSVGAvailable){
                return null
            }
            ImportedIconRef.current = (
                await import(`../assets/weather-icons/${isSVGAvailable.localFileName}`)
            )
        }
        catch (error) {
            console.log(error)
        }
    }

}