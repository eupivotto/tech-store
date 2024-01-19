interface CategoriesProps {
    handleGetProducts: (category: string) => Promise<void>
  }
  



import { useState, useEffect } from "react"
import { categoryApi } from "../../services/api"
import { ContainerCategory } from "./styles"
import { Loading } from '../Loading'



export const Category: React.FC<CategoriesProps> = ({handleGetProducts}) => {
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("")
    const [loading, setLoading] = useState(true)
    

    

    const handleGetCategories = async () => {
        setLoading(true)
        try {
          const response = await categoryApi.get('')
          const dataCategories: string[] = response.data
          setCategories(dataCategories)
          
        } catch (error) {
          console.log('Erro ao listar categorias:', error)
        } finally {
          setLoading(false); // Definir o estado 'loading' como 'false' após o carregamento das categorias
        }
      };

      const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const category = event.target.value
        console.log('Selected Category:', category)
        setSelectedCategory(category === "todos" ? "" : category)
        setLoading(false)
        handleGetProducts(category)
        
      };

      useEffect(() => {
        
        handleGetCategories()
        
        

    }, [])

    console.log(selectedCategory)
    return (
        <ContainerCategory>
        <h2>Categorias:</h2>
        {loading ? (
        <Loading />
      ) : (
        <select onChange={handleCategoryChange}>
            <option value="todos">Todos</option>
            {categories.map((category, index) => (
            <option key={index} value={category}>
                {category}
            </option>
            ))}
        </select>
        )}
        </ContainerCategory>
    )
}