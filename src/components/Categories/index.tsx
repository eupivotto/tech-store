interface CategoriesProps {
    handleGetProducts: (category: string) => Promise<void>;
  }
  



import { useState, useEffect } from "react";
import { categoryApi } from "../../services/api";
import { ContainerCategory } from "./styles";


export const Category: React.FC<CategoriesProps> = ({handleGetProducts}) => {
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    

    const handleGetCategories = async () => {
        try {
          const response = await categoryApi.get('');
          const dataCategories: string[] = response.data;
          setCategories(dataCategories);
        } catch (error) {
          console.log('Erro ao listar categorias:', error);
        }
      };

      const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const category = event.target.value
        console.log('Selected Category:', category)
        setSelectedCategory(category === "todos" ? "" : category)
        handleGetProducts(category)
      };

      useEffect(() => {
        
        handleGetCategories()
    }, [])

    return (
        <ContainerCategory>
        <h2>Categorias:</h2>
        <select onChange={handleCategoryChange}>
            <option value="todos">Todos</option>
            {categories.map((category, index) => (
            <option key={index} value={category}>
                {category}
            </option>
            ))}
        </select>
        </ContainerCategory>
    )
}