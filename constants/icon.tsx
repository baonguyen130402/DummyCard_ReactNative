import { Feather } from "@expo/vector-icons";

export const icon = {
  index: (props: any) => <Feather name='user' size={24} {...props} />,
  recipes: (props: any) => <Feather name='sidebar' size={24} {...props} />,
  products: (props: any) => <Feather name='box' size={24} {...props} />,
}
