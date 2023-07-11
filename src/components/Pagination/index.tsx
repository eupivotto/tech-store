interface PaginationProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    pages: number;
  }


import { ContainerPages, ButtonPages } from "./styles"




export const Pagination = ( {setCurrentPage, pages}: PaginationProps ) => {
    return(
        <ContainerPages>
            
            {Array.from(Array(pages), (_item, index) => {
                return <ButtonPages value={index} onClick={(e: React.MouseEvent<HTMLButtonElement>)=> setCurrentPage(Number(e.currentTarget.value))}>{index + 1}</ButtonPages>
        })}
        </ContainerPages>
    )
}
