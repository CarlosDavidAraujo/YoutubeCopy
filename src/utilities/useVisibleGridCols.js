import { useEffect, useState } from "react";

//Esta função não é de minha autoria
const useVisibleGridCols = (containerRef, defaultColsCount) => {
    const [visibleCols, setVisibleCols] = useState(defaultColsCount);

    useEffect(() => {
        //calcula a qtd de colunas visiveis em um grid com auto-fit
        const calcColumns = () => {
            // Abord if no ref
            if (!containerRef.current) return;

            // infer # of cols by parsing the computed grid-template-columns
            // see https://stackoverflow.com/a/58393617/5389588
            const containerComputerStyle = window
                .getComputedStyle(containerRef.current);
            const nCols = containerComputerStyle
                .getPropertyValue('grid-template-columns')
                .replace(' 0px', '')
                .split(' ')
                .length;

            // Update
            setVisibleCols(nCols);
        };

        // Do it now
        calcColumns();
        // And on resize
        window.addEventListener('resize', calcColumns);
        return () => {
            window.removeEventListener('resize', calcColumns);
        };
    }, [containerRef, setVisibleCols]);

    return visibleCols;
};

export default useVisibleGridCols;