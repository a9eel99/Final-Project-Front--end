import AboutUsHero from "./componants/AboutUsHero";
import Contact_Componant  from "./componants/Contact_Componant";
import Contact_Form  from "./componants/Contact_Form";
import "./componant_style/Contact.css";

export default function About() {
  return (
    <div className="contenars">  
<AboutUsHero title={"Contact"}/>
<Contact_Componant />
<Contact_Form />

    </div>
  ); 
}
