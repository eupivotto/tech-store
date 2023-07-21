import * as z from 'zod';


export const AdministrativePanelFormSchema = z.object({
  name: z.string().min(4),
  // Add other validation rules for other form fields here...
});
