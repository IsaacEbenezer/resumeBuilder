import templateOneImg from "../TemplateImages/template-1.JPG";
import templateTwoImg from "../TemplateImages/template-2.JPG";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";

export const templates = [
  {
    id: 1,
    template: <Template1 />,
    template_img: templateOneImg,
    template_name: "Template One",
  },
  {
    id: 2,
    template: <Template2 />,
    template_img: templateTwoImg,
    template_name: "Template Two",
  },
  
];
